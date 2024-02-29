"use client";
import React, { useState } from "react";
import jesusKiss from "@/public/Jesus/JesusKiss.png";
import jesusWord from "@/public/Jesus/jesusWord.png";
import jesusOpenArms from "@/public/JesusIcons/JesusOpenArms.png";
import { OneCard } from "../inicio/cards";
import Image from "next/image";
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";
import jesus from "@/public/JesusIcons/jesus.png";
import sheep from "@/public/JesusIcons/sheep.png";
import audio from "@/public/audio.png";
import { MdAudiotrack } from "react-icons/md";
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
    <div className="text-black  px-4 text-sm flex flex-col justify-center items-center">
      <div className="mx-0  lg:mx-0 xl:mx-52 lg:border-x-2   p-4 lg:p-8">
        <div className="flex  justify-center">
          <Image src={jesus} alt="jesus" className="h-8 w-8" />
          <Image src={sheep} alt="sheep" className="h-6 w-6 mt-2" />
        </div>

        <p className="mt-10 text-center">
          Para se tornar amigo(a) de Jesus, você pode fazer algumas coisas
          simples:
        </p>

        <div className="mt-10 flex flex-col gap-4 ">
          <div className="relative bg-yellow-100 p-4 rounded-xl">
            <p>
              {" "}
              1:Converse com Ele: Fale com Jesus como se fosse um amigo. Conte
              para Ele sobre o seu dia, suas alegrias e até mesmo as coisas que
              te deixam triste. Ele sempre estará ouvindo!
            </p>
            <Image
              src={audio}
              alt="audio"
              className="absolute end-2 bottom-2"
              onClick={() => {
                setTextToSpeak(` 1:Converse com Ele: Fale com Jesus como se fosse um amigo. Conte
                para Ele sobre o seu dia, suas alegrias e até mesmo as coisas que
                te deixam triste. Ele sempre estará ouvindo!`);
                handleSpeak();
              }}
            />
          </div>

          <div className="bg-emerald-100 p-4 rounded-xl relative">
            <p>
              2:Agradeça: Diga "obrigada(o)" a Jesus por coisas boas que
              acontecem na sua vida, como brincar com amigos, ter uma família
              carinhosa, ou até mesmo por um dia bonito.
            </p>
            <Image
              src={audio}
              alt="audio"
              className="absolute end-2 bottom-2"
              onClick={() => {
                setTextToSpeak(`2:Agradeça: Diga "obrigada(o)" a Jesus por coisas boas que
                acontecem na sua vida, como brincar com amigos, ter uma família
                carinhosa, ou até mesmo por um dia bonito.`);
                handleSpeak();
              }}
            />
          </div>

          <div className="relative bg-sky-100 p-4 rounded-xl">
            <p>
              3:Peça Ajuda: Se precisar de ajuda ou se sentir triste, você pode
              pedir para Jesus te ajudar. Ele sempre está pronto para cuidar de
              você.
            </p>
            <Image
              src={audio}
              alt="audio"
              className="absolute end-2 bottom-2"
            />
          </div>

          <div className="bg-purple-100 p-4 rounded-xl relative">
            <p className="bg-purple-100 p-4 rounded-xl">
              4:Cante Músicas Felizes: Você pode cantar músicas alegres sobre
              Jesus. Isso faz com que Ele sinta o quanto você O ama.
            </p>
            <Image
              src={audio}
              alt="audio"
              className="absolute end-2 bottom-2"
            />
          </div>

          <div className="bg-pink-100 p-4 rounded-xl relative">
            <p>
              5:Leia Histórias da Bíblia: Pergunte aos seus pais ou responsáveis
              para ler histórias da Bíblia com você. Assim, você vai conhecendo
              mais sobre Jesus e os amigos especiais que Ele teve.
            </p>
            <Image
              src={audio}
              alt="audio"
              className="absolute end-2 bottom-2"
            />
          </div>

          <p className="">
            Lembre-se, Jesus é como um grande amigo que está sempre por perto,
            mesmo quando não conseguimos vê-Lo. Ele te ama muito!
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
