import React from "react";
import { cn } from "../utils/cn";

export default function Deco({ active, className, ...props }) {
  return (
    <div
      className={cn("w-[6px] h-[6px] bg-gray-500 rounded-full", className, {
        "w-6 bg-orange-700": active,
      })}
      {...props}
    ></div>
  );
}
