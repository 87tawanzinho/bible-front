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
  const [textToSpeak, setTextToSpeak] = useState(`
    Jesus, o seu melhor amigo!

    Para se tornar amigo(a) de Jesus, você pode fazer algumas coisas simples:

    1. Converse com Ele: Fale com Jesus como se fosse um amigo. Diga para Ele sobre o seu dia, suas alegrias e até mesmo as coisas que te deixam triste. Ele sempre estará ouvindo!

    2. Agradeça: Diga "obrigada" a Jesus por coisas boas que acontecem na sua vida, como brincar com amigos, ter uma família carinhosa, ou até mesmo por um dia bonito.

    3. Peça Ajuda: Se precisar de ajuda ou se sentir triste, você pode pedir para Jesus te ajudar. Ele sempre está pronto para cuidar de você.

    4. Cante Músicas Felizes: Você pode cantar músicas alegres sobre Jesus. Isso faz com que Ele sinta o quanto você O ama.

    5. Leia Histórias da Bíblia: Pergunte aos seus pais ou responsáveis para ler histórias da Bíblia com você. Assim, você vai conhecendo mais sobre Jesus e os amigos especiais que Ele teve.

    Lembre-se, Jesus é como um grande amigo que está sempre por perto, mesmo quando não conseguimos vê-Lo. Ele te ama muito!
  `);

  const [isAudio, setIsAudio] = useState(false);

  const handleSpeak = () => {
    const synth = window.speechSynthesis;
    setIsAudio(true);

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
    <div className="text-black  px-8 text-sm">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-center font-bold text-xl  text-orange-600 font-serif relative">
            Jesus, o seu melhor amigo!
          </h2>
          {isAudio ? (
            <Image src={audio} alt="audio" onClick={handleSpeak} />
          ) : (
            <Image
              src={audio}
              alt="audio"
              onClick={() => {
                synth.cancel();
                setIsAudio(false);
              }}
            />
          )}
        </div>

        <div className="flex  justify-center">
          <Image src={jesus} alt="jesus" className="h-8 w-8" />
          <Image src={sheep} alt="sheep" className="h-6 w-6 mt-2" />
        </div>

        <p className="mt-10">
          Para se tornar amigo(a) de Jesus, você pode fazer algumas coisas
          simples:
        </p>

        <div className="mt-10 flex flex-col gap-8 ">
          <p>
            {" "}
            1:Converse com Ele: Fale com Jesus como se fosse um amigo. Conte
            para Ele sobre o seu dia, suas alegrias e até mesmo as coisas que te
            deixam triste. Ele sempre estará ouvindo!
          </p>
          <p>
            2:Agradeça: Diga "obrigada" a Jesus por coisas boas que acontecem na
            sua vida, como brincar com amigos, ter uma família carinhosa, ou até
            mesmo por um dia bonito.
          </p>

          <p>
            3:Peça Ajuda: Se precisar de ajuda ou se sentir triste, você pode
            pedir para Jesus te ajudar. Ele sempre está pronto para cuidar de
            você.
          </p>

          <p>
            4:Cante Músicas Felizes: Você pode cantar músicas alegres sobre
            Jesus. Isso faz com que Ele sinta o quanto você O ama.
          </p>

          <p>
            5:Leia Histórias da Bíblia: Pergunte aos seus pais ou responsáveis
            para ler histórias da Bíblia com você. Assim, você vai conhecendo
            mais sobre Jesus e os amigos especiais que Ele teve.
          </p>

          <p>
            Lembre-se, Jesus é como um grande amigo que está sempre por perto,
            mesmo quando não conseguimos vê-Lo. Ele te ama muito!
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
