import React from "react";
import Deco from "../components/deco";

export default function TopWorks({ children }) {
  return (
    <section className='p-4 flex flex-col gap-3'>
      <h6 className='text-4 font-bold flex gap-3 items-center'>
        <Deco
          extend
          className={"rotate-90"}
        />
        適合前端工程師的好工作
      </h6>
      {children}
    </section>
  );
}
