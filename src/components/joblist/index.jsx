import { Pagination } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import JobCard from "../jobCard";
import { useJobList } from "./joblist.query";
import { useResize } from "../../hooks/resize.hook";

export default function JobList() {
  const setSearch = useSearchParams()[1];

  const { per_page } = useResize();

  const {
    data: jobList,
    isPending,
    isError,
    error,
  } = useJobList({
    per_page,
  });

  function handlePageChange(_, value) {
    setSearch(
      (prev) => {
        prev.set("page", value);

        return prev;
      },
      {
        replace: true,
      }
    );
  }

  if (isPending) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <section className='grid gap-[10px] grid-cols-[repeat(auto-fit,minmax(430px,1fr))] grid-rows-[repeat(4,auto)]'>
        {jobList.total === 0 && (
          <p className='text-center py-2'>查無資料, 請調整搜尋條件</p>
        )}
        {jobList?.data.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </section>
      <Pagination
        count={Math.round(jobList.total / per_page)}
        onChange={handlePageChange}
        className='px-4 py-2 flex justify-center items-center'
      />
    </>
  );
}
