"use client";
import React, { useEffect, useState } from "react";
import { useCardsContext } from "../context/cardsData";
import Loading from "../loading";
import Back from "../components/back";
import { TbEyeSearch } from "react-icons/tb";
import caracol from "@/public/caracol.png";
import Image from "next/image";
import CompletedButton from "../components/completedButton";
function page() {
  const {
    takeDevotional,
    devotionalText,
    readDevotionalText,
    loading,
    setLoading,
  } = useCardsContext();
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

  const username =
    typeof window !== "undefined" && localStorage.getItem("username");

  useEffect(() => {
    setLoading(false);
  }, [devotionalText && devotionalText.concluded_by?.includes(username)]);

  return (
    <>
      {devotionalText && devotionalText.chapter ? (
        <div className={""}>
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
            <p className="italic font-bold ">{devotionalText.version}</p>
          </div>

          <div className="flex items-center justify-between mt-10">
            <h3 className="px-2">O que você irá aprender? </h3>

            <TbEyeSearch
              className=" font-bold cursor-pointer"
              onClick={handleFontSize}
            />
          </div>

          <h3
            className={` overflow-auto mt-4 ${`text-${fontSize} `} border p-2 rounded  bg-green-100 leading-10  `}
          >
            {devotionalText.summary}
          </h3>

          <p className="mt-10 ">Leitura</p>
          <p
            className={` ${`text-${fontSize} `} ${"bg-yellow-100"} max-h-[26rem] overflow-auto mt-4 border p-2 rounded   leading-10 `}
          >
            {devotionalText.content}
          </p>

          {!devotionalText.concluded_by?.includes(username) ? (
            <div className=" mt-10 w-full flex justify-center lg:justify-start">
              {!loading ? (
                <button
                  className="bg-white border-2  flex items-center justify-center gap-2  lg:w-96 text-black rounded-lg  p-2 w-11/12 "
                  onClick={() => {
                    setLoading(true);
                    readDevotionalText(devotionalText.id);
                  }}
                >
                  +1 <Image src={caracol} alt="caracol" className="h-8 w-8" />
                </button>
              ) : (
                <div className="ld-ripple">
                  <div></div>
                  <div></div>
                </div>
              )}
            </div>
          ) : (
            <div className=" mt-10 w-full flex justify-center lg:justify-start ">
              <CompletedButton devocional={true} />
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
