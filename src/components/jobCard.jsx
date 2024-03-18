import React from "react";
import person from "../assets/icons/person.svg";
import book from "../assets/icons/book.svg";
import money from "../assets/icons/money.svg";

export default function JobCard({ job }) {
  return (
    <article className='rounded-md hover:shadow-my_shadow p-4 text-red border border-gray-500 grid grid-rows-subgrid row-span-4 gap-[10px]'>
      <h5 className='text-5 font-bold'>{job.companyName}</h5>
      <div className='flex flex-col gap-2'>
        <Info
          type={"jobTitle"}
          label={job.jobTitle}
        />
        <Info
          type={"education"}
          label={job.education}
        />
        <Info
          type={"salary"}
          label={job.salary}
        />
      </div>
      <p className='text-2'>{job.preview}</p>
      <button
        type='button'
        className='text-2 font-bold text-orange-700'
      >
        查看細節
      </button>
    </article>
  );
}

function Info({ type, label }) {
  const icon =
    type === "jobTitle" ? person : type === "education" ? book : money;

  return (
    <p className='text-2 flex gap-1 items-center'>
      <img
        src={icon}
        alt={type}
      />
      {label}
    </p>
  );
}
