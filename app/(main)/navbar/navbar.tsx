"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import kissbird from "@/public/kiss-bird.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="bg-blue-50 text-white  flex p-2 justify-between lg:justify-end px-4 lg:px-24 items-center gap-4">
      <Image
        src={kissbird}
        alt="icon"
        className="h-8 w-8 lg:absolute start-7"
      />
      <div className="hidden lg:flex gap-2">
        <Link
          href={"#"}
          className="border bg-[#07819c] w-16 text-center text-white rounded p-1"
        >
          <p>Início</p>
        </Link>
      </div>
      <div className="flex items-center gap-2 lg:hidden">
        <CgMenuLeftAlt
          size={24}
          className="text-black"
          onClick={() => setOpenMenu(!openMenu)}
        />

        {openMenu && (
          <div className="absolute top-12 bg-blue-50 text-black end-0 p-2 w-48 text-center">
            <p>Passaró</p>
            <p>Passaró</p>
            <p>Passaró</p>
            <p>Passaró</p>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
