"use client";
import React, { useState } from "react";
import jesusBanner from "@/public/Shres ar.png";

import TitleAndLesson from "../../../components/titleAndLesson";
import Image from "next/image";
import ImageBanner from "../../../components/ImageBanner";
import TextIntrodution from "../../../components/textIntrodution";
import TextIntrodutionModel1 from "../../../components/textIntrodution";
import Topic from "../../../components/topic";
import Link from "next/link";
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
    <div className="border p-4">
      <TitleAndLesson title="Como ser um amigo de Jesus?" lesson="1" cap="1" />
      <ImageBanner src={jesusBanner} />
      <TextIntrodutionModel1 text="Para se tornar amigo(a) de Jesus, você pode fazer algumas coisas simples:" />

      <Topic
        titleOne="Converse com Ele"
        textOne="Fale com Jesus como se fosse um amigo. Conte para Ele sobre o seu dia, suas alegrias e até mesmo as coisas que te deixam triste. Ele sempre estará ouvindo!"
      />

      <Topic
        titleOne="Agradeça"
        textOne={
          "Agradeça a Jesus por coisas boas que acontecem na sua vida, como brincar com amigos, ter uma família carinhosa, ou até mesmo por um dia bonito."
        }
      />

      <Topic
        titleOne="Peça Ajuda"
        textOne=" Se precisar de ajuda ou se sentir triste, você pode pedir para Jesus te ajudar. Ele sempre está pronto para cuidar de você.
        "
      />

      <Topic
        titleOne="Cante Musicas Felizes"
        textOne="Você pode cantar músicas alegres sobre Jesus. Isso faz com que Ele sinta o quanto você O ama."
      />

      <Topic
        titleOne="Leia Histórias Da Biblia"
        textOne="Pergunte aos seus pais ou responsáveis para ler histórias da Bíblia com você. Assim, você vai conhecendo mais sobre Jesus e os amigos especiais que Ele teve.
        Lembre-se, Jesus é como um grande amigo que está sempre por perto, mesmo quando não conseguimos vê-Lo. Ele te ama muito!
        "
      />

      <div className="flex items-center mt-10 gap-4 ">
        <button className=" px-4 py-2 bg-emerald-600 rounded text-white ">
          Entendi!
        </button>

        <Link href={"/inicio"}>
          <button className="px-4 py-2 bg-red-600 text-white rounded">
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default page;
