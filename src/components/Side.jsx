import { CircleQuestionMark, LayoutGrid } from "lucide-react";
import React from "react";

const Side = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <CircleQuestionMark className="text-[#929CA6]" />
      <LayoutGrid className="text-[#929CA6]" />
      <span></span>
    </div>
  );
};

export default Side;