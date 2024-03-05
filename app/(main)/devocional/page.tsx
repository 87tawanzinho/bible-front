"use client";
import React, { useEffect, useState } from "react";
import { useCardsContext } from "../context/cardsData";
import Loading from "../loading";
import Back from "../components/back";

function page() {
  const { takeDevotional, devotionalText } = useCardsContext();
  const [fontSize, setFontSize] = useState<string | null>("sm");

  const handleFontSize = () => {
    if (fontSize == "sm") {
      setFontSize("lg");
    }
    if (fontSize == "lg") {
      setFontSize("xl");
    }
    if (fontSize == "xl") {
      setFontSize("sm");
    }
  };
  useEffect(() => {
    takeDevotional();
  }, []);
  return (
    <>
      {devotionalText ? (
        <div>
          <Back className="" src={"/inicio"} size={20} />
          <div className={`flex items-center justify-between mt-4 border-b `}>
            <h2 className=" text-2xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-black ">
              Devocional do Dia
            </h2>
            <div className="bg-slate-900 rounded-lg px-2 text-center ">
              <h2 className="   text-center  text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">
                {devotionalText.chapter}
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6 border-l px-1">
            <h2 className="bg-yellow-200 text-black rounded-lg px-2">
              {devotionalText.title}
            </h2>
            <p className="italic font-bold">{devotionalText.version}</p>
          </div>

          <div className="flex items-center justify-between mt-10">
            <h3>O que você irá aprender?</h3>
            <p
              className="mt-1 font-bold cursor-pointer"
              onClick={handleFontSize}
            >
              +
            </p>
          </div>

          <h3
            className={` overflow-auto mt-4 ${`text-${fontSize} `} border p-2 rounded  bg-green-50 leading-10  `}
          >
            {devotionalText.summary}
          </h3>

          <p className="mt-10">Leitura</p>
          <p
            className={` ${`text-${fontSize} `} max-h-[26rem] overflow-auto mt-4 border p-2 rounded  bg-yellow-50 leading-10 `}
          >
            {devotionalText.content}
          </p>

          {devotionalText.concluded === false ? (
            <div className=" mt-10 w-full flex justify-center lg:justify-start">
              <button className="bg-emerald-800   text-white rounded-lg  p-2 w-7/12 lg:w-auto">
                Concluir Leitura
              </button>
            </div>
          ) : (
            <div className=" mt-10 w-full flex justify-center lg:justify-start">
              <button className="bg-red-800   text-white rounded-lg  p-2 w-7/12 lg:w-auto">
                Desfazer Leitura
              </button>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default page;