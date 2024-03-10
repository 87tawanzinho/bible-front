"use client";

import React, { useEffect, useState } from "react";
import jesusAndClouds from "@/public/Jesus/JesusAndClouds.png";

import camel from "@/public/Jesus/Camel.png";
import jesusAndSheep from "@/public/JesusFirst/JesusNormalFirstCard/JesusAndYourSheeps.png";
import jesusAndBeach from "@/public/JesusFirst/JesusNormalFirstCard/UnderstandWordsGod.png";
import OneCard from "../OneCard";
import { useCardsContext } from "../../context/cardsData";
import Loading from "../../loading";

function CardsChapter2({}) {
  const { cardsData, setCardsData, AxiosTakeCards } = useCardsContext();
  useEffect(() => {
    AxiosTakeCards();
  }, []);
  const isCompleted = (chapter: any, number: number) => {
    return (
      cardsData &&
      cardsData[chapter] &&
      cardsData[chapter][number] &&
      cardsData[chapter][number].completed === true
    );
  };
  return (
    <>
      {cardsData ? (
        <div className="flex overflow-x-auto  gap-2 md:gap-4  lg:gap-8  p-0 lg:p-2  text-center  ">
          <OneCard
            img={jesusAndClouds}
            optionalClassForText="text-[12px]"
            src="/capitulo1/1"
            completed={isCompleted("firstChapter", 0)}
          />
          <OneCard
            img={jesusAndBeach}
            optionalClassForText="text-[14px]"
            src="/capitulo1/2"
            completed={isCompleted("firstChapter", 1)}
          />
          <OneCard
            img={jesusAndSheep}
            optionalClassForText="text-[14px]"
            src="/capitulo1/3"
            completed={isCompleted("firstChapter", 2)}
            optionalClassForImage="h-32 object-cover"
          />
          <OneCard
            img={camel}
            src="/capitulo1/4"
            optionalClassForText="text-[14px]"
            completed={isCompleted("firstChapter", 3)}
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CardsChapter2;

interface chapter {
  firstChapter: string;
}
