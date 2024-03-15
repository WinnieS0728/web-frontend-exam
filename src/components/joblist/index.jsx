import React, { useEffect, useState } from "react";
import { useJobList } from "./joblist.query";
import JobCard from "../jobCard";

export default function JobList() {
  const [page, setPage] = useState(1);
  const [device, setDevice] = useState("phone");

  const {
    data: jobList,
    isPending,
    isError,
    error,
  } = useJobList({
    page,
    device,
  });

  useEffect(() => {
    function handleChange() {
      const { innerWidth } = window;

      if (innerWidth <= 1024) {
        setDevice("phone");
      } else {
        setDevice("computer");
      }
    }

    window.addEventListener("resize", handleChange);

    return () => {
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  if (isPending) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <section className='grid gap-[10px]'>
      {jobList?.data.map((job) => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}
    </section>
  );
}
