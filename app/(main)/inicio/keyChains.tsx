"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import keychains from "@/public/keychains.png";
import pray from "@/public/pray.png";
import bible from "@/public/bible.png";
function KeyChains() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className=" border-2 flex flex-col  mt-8 rounded-lg text-sm px-4 shadow-md">
      <div
        className="flex items-center gap-2     cursor-pointer"
        onClick={() => setClicked(!clicked)}
      >
        <Image src={keychains} alt="key chains" className="h-6 w-6" />
        <p>Minhas Conquistas</p>
        {clicked ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </div>
      {clicked && (
        <div className="text-start mt-2 flex justify-around items-center border-t pt-2">
          <div className="text-center">
            <Image src={pray} alt="pray" className="h-6 w-6" />
            <p>5</p>
          </div>

          <div className="text-center">
            <Image src={bible} alt="pray" className="h-6 w-6" />
            <p>5</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default KeyChains;
