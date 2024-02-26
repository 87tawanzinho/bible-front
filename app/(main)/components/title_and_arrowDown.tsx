import React from "react";
import { FaChevronDown } from "react-icons/fa";

function Title_and_arrowDown({
  title,
  span,
  underline,
}: {
  title: string;
  span: string;
  underline: boolean;
}) {
  return (
    <div className="flex items-center gap-2  mb-8">
      <h2 className="text-lg font-bold text-black w-max ">
        {title} <span className={`${underline && "underline"}`}>{span}</span>
      </h2>
      <FaChevronDown size={12} className="text-black" />
    </div>
  );
}

export default Title_and_arrowDown;
