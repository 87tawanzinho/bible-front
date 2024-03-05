import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

function Back({
  className,
  src,
  size,
}: {
  className: string;
  src: string;
  size: number;
}) {
  return (
    <Link
      className={`${className} text-center hover:scale-105 transition-all cursor-pointer`}
      href={src}
    >
      <IoArrowBackOutline
        size={size}
        className="hover:scale-105 transition-all cursor-pointer"
      />
    </Link>
  );
}

export default Back;
