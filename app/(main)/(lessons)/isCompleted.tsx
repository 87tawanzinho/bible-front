"use client";
import React, { useEffect } from "react";
import { useCardsContext } from "../context/cardsData";
import Button from "./button";

function IsCompleted({ n, index }: { n: number; index: number }) {
  const { cardsData } = useCardsContext();
  return (
    <div className="flex items-center mt-10 gap-4 ">
      {cardsData.firstChapter[index].completed === false ? (
        <Button n={n} />
      ) : (
        <div className=" mt-10 w-full flex justify-center lg:justify-start ">
          <button className="bg-green-200   text-gray-800  p-2 w-11/12 lg:w-96">
            Completado
          </button>
        </div>
      )}
    </div>
  );
}

export default IsCompleted;
