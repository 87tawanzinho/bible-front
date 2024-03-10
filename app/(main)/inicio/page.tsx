"use client";
import React, { useEffect, useState } from "react";
import OneCard from "../ensinamentos/OneCard";
import Devotional from "@/public/cardsHome/1.png";
import Teachings from "@/public/cardsHome/2.png";
import Link from "next/link";
import ModelWarn from "../models/modelWarn";
import { useCardsContext } from "../context/cardsData";
import Loading from "../loading";
import { useRouter } from "next/navigation";

import KeyChains from "./keyChains";
function page() {
  const [warn, setWarn] = useState("");
  const { profileData, setProfileData, fetchProfile } = useCardsContext();

  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchProfile();
    }
  }, []);

  const username =
    typeof window !== "undefined" && localStorage.getItem("username");

  return (
    <>
      {profileData ? (
        <div className="flex  flex-col items-center h-full lg:mt-10">
          <h2 className="text-2xl mt-10 text-zinc-800 lg:text-4xl">
            Meu amigo Jesus
          </h2>

          <div className="border mt-4 rounded-lg px-2">
            <div className="flex items-center gap-2">
              <p>Olá, </p>
              <p className="text-yellow-600">{username} </p>
            </div>
          </div>

          <div className="flex gap-4 mt-10 ">
            <Link
              href={`${profileData.devotionalWarn ? "/devocional" : "/inicio"}`}
              onClick={() => {
                if (!profileData.devotionalWarn) {
                  setWarn("devotional");
                }
              }}
            >
              <OneCard img={Devotional} border={true} />
            </Link>

            {warn && <ModelWarn isDevotional={warn == "devotional"} />}

            <Link href={"/ensinamentos"}>
              <OneCard img={Teachings} border={true} />
            </Link>
          </div>

          <KeyChains />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default page;
