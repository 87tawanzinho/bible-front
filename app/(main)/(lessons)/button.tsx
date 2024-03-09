import React, { useState } from "react";
import { axiosToggleCompleted } from "./ToggleCompleted";
import { useRouter } from "next/navigation";
import { useCardsContext } from "../context/cardsData";
import caracol from "@/public/caracol.png";
import Image from "next/image";
function Button({ n, index }: { n: number; index: number }) {
  const { cardsData, setCardsData, AxiosTakeCards, loading, setLoading } =
    useCardsContext();
  const router = useRouter();

  return (
    <button
      className=" mt-10 w-full flex justify-center lg:justify-start"
      onClick={() => {
        try {
          setLoading(true);
          axiosToggleCompleted("firstChapter", n);
          AxiosTakeCards();
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {!loading ? (
        <button className="bg-white border-2  flex items-center justify-center gap-2  lg:w-96 text-black rounded-lg  p-2 w-11/12 ">
          +1 <Image src={caracol} alt="caracol" className="h-8 w-8" />
        </button>
      ) : (
        <div className="ld-ripple">
          <div></div>
          <div></div>
        </div>
      )}
    </button>
  );
}

export default Button;
