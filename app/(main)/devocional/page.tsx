"use client";
import React, { useState } from "react";
import jesusBanner from "@/public/Shres ar.png";

import TitleAndLesson from "../components/titleAndLesson";
import Image from "next/image";
import ImageBanner from "../components/ImageBanner";
import TextIntrodution from "../components/textIntrodution";
import TextIntrodutionModel1 from "../components/textIntrodution";
function page() {
  const [textToSpeak, setTextToSpeak] = useState("");
  const [isAudio, setIsAudio] = useState(false);

  const handleSpeak = () => {
    setIsAudio(true);
    const synth = window.speechSynthesis;

    if (synth.speaking) {
      synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = "pt-BR";
    synth.speak(utterance);

    if (!synth.speaking) {
      setIsAudio(false);
    }
  };

  return (
    <div>
      <TitleAndLesson title="Como ser um amigo de Jesus?" lesson="1" cap="1" />
      <ImageBanner src={jesusBanner} />
      <TextIntrodutionModel1 text="Para se tornar amigo(a) de Jesus, você pode fazer algumas coisas simples:" />
    </div>
  );
}

export default page;
