import React from "react";
import Deco from "../components/deco";
import FilterForm from "../components/filter form";
import { useResize } from "../hooks/resize.hook";

export default function TopWorks({ children }) {
  const { showFilter } = useResize();
  return (
    <section className='p-4 flex flex-col gap-3'>
      <h6 className='text-4 font-bold flex gap-3 items-center'>
        <Deco
          extend
          className={"rotate-90"}
        />
        適合前端工程師的好工作
      </h6>
      {showFilter && <FilterForm />}
      {children}
    </section>
  );
}
