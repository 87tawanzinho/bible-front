"use client";
import React, { useEffect } from "react";
import { useCardsContext } from "../context/cardsData";
import Loading from "../loading";

function page() {
  const { takeDevotional, devotionalText } = useCardsContext();

  useEffect(() => {
    takeDevotional();
  }, []);
  return (
    <>
      {devotionalText ? (
        <div>
          <div className="flex items-center justify-between mt-4 border-b">
            <h2 className=" text-2xl">Devocional do Dia</h2>
            <h2 className="bg-slate-900 rounded-lg px-2 text-white text-center">
              Salmo 23
            </h2>
          </div>
          <div className="flex items-center justify-between mt-6">
            <h2>{devotionalText.title}</h2>
            <p className="4">{devotionalText.version}</p>
          </div>
          <p>{devotionalText.content}</p>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default page;
