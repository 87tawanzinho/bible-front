"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { PiBird, PiHandsPrayingFill } from "react-icons/pi";
import { TbBible } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdArrowDropleft, IoMdClose } from "react-icons/io";
import { BiDonateHeart } from "react-icons/bi";
import { useCardsContext } from "../context/cardsData";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { setProfileData } = useCardsContext();
  return (
    <nav className="border-b   text-white bg-slate-900  flex p-2 lg:p-4  justify-between lg:justify-end px-4 lg:px-24 items-center gap-4">
      <div className="flex items-center gap-1 lg:absolute start-7">
        <PiBird className="text-white" size={24} />
      </div>
      <div className="hidden lg:flex gap-2 items-center">
        <Link
          href={"/inicio"}
          className=" w-auto text-center  rounded p-1 hover:opacity-75"
        >
          <h3 className="">Início</h3>
        </Link>

        <Link
          href={"/devocional"}
          className=" w-auto text-center  rounded p-1 hover:opacity-75"
        >
          <h3 className="">Devocional Diário</h3>
        </Link>

        <Link
          href={"/ensinamentos"}
          className=" w-auto text-center  rounded p-1 hover:opacity-75"
        >
          <h3 className="">Ensinamentos Biblicos</h3>
        </Link>

        <Link
          href={"/doar"}
          className=" w-auto text-center  rounded p-1 hover:opacity-75"
        >
          <h3 className="">Contribuir</h3>
        </Link>

        <h3
          className="cursor-pointer hover:opacity-75"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          Sair
        </h3>
      </div>
      <div className="flex items-center gap-2 lg:hidden ">
        {openMenu ? (
          <IoMdClose
            size={26}
            className="text-white"
            onClick={() => setOpenMenu(!openMenu)}
          />
        ) : (
          <CgMenuLeftAlt
            size={26}
            className="text-white"
            onClick={() => setOpenMenu(!openMenu)}
          />
        )}
        {openMenu && (
          <div className="absolute top-11 bg-nav-mobile text-black border z-50 end-0 p-2 w-60  gap-1 flex flex-col">
            <Link href={"/inicio"}>
              <div className="flex items-center gap-2 border-b ">
                <IoHomeOutline />
                <p>Pagina Inicial</p>
              </div>
            </Link>

            <Link href={"/devocional"}>
              <div className="flex items-center gap-2 border-b">
                <PiHandsPrayingFill />
                <p>Devocional</p>
              </div>
            </Link>

            <Link href={"/ensinamentos"}>
              <div className="flex items-center gap-2 border-b">
                <TbBible />
                <p>Ensinamentos Biblicos</p>
              </div>
            </Link>

            <Link href={"/doar"}>
              <div className="flex items-center gap-2 border-b">
                <BiDonateHeart />
                <p>Doar</p>
              </div>
            </Link>

            <div
              className="flex items-center gap-2 border-b"
              onClick={() => {
                localStorage.removeItem("token");
                setProfileData(null);
                window.location.href = "/";
              }}
            >
              <IoMdArrowDropleft />
              <p>Sair</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
