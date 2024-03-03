import React from "react";
import OneCard from "../ensinamentos/OneCard";
import Devotional from "@/public/cardsHome/1.png";
import Teachings from "@/public/cardsHome/2.png";
import Link from "next/link";
function page() {
  return (
    <div className="flex  flex-col items-center h-full mt-10">
      <h2 className="text-2xl mt-10 text-black ">Meu Amigo Jesus</h2>
      <div className="flex gap-4 mt-10 ">
        <Link href={"/inicio"}>
          <OneCard img={Devotional} border={true} />
        </Link>
        <Link href={"/ensinamentos"}>
          <OneCard img={Teachings} border={true} />
        </Link>
      </div>
    </div>
  );
}

export default page;
