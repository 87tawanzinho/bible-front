"use client";
import React, { useState } from "react";
import OneCard from "../ensinamentos/OneCard";
import Devotional from "@/public/cardsHome/1.png";
import Teachings from "@/public/cardsHome/2.png";
import Link from "next/link";
import ModelWarn from "../models/modelWarn";
function page() {
  const [warn, setWarn] = useState("");
  return (
    <div className="flex  flex-col items-center h-full mt-10">
      <h2 className="text-2xl mt-10 text-black ">Meu Amigo Jesus</h2>
      <div className="flex gap-4 mt-10 ">
        <Link
          href={"/inicio"}
          onClick={() => {
            setWarn("devotional");
          }}
        >
          <OneCard img={Devotional} border={true} />
        </Link>
        <img
          src="https://img.freepik.com/vetores-premium/desenhos-animados-de-arca-de-noe_29190-73.jpg"
          alt=""
          className="absolute end-0 bottom-0   w-32  md:w-32 lg:w-60 "
        />
        {warn && <ModelWarn isDevotional={warn == "devotional"} />}

        <Link href={"/ensinamentos"}>
          <OneCard img={Teachings} border={true} />
        </Link>
      </div>
    </div>
  );
}

export default page;
