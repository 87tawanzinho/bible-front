"use client";
import React, { useState } from "react";
import jesusBanner from "@/public/Shres ar.png";

import TitleAndLesson from "../../../components/titleAndLesson";
import ImageBanner from "../../../components/ImageBanner";
import TextIntrodutionModel1 from "../../../components/textIntrodution";
import Topic from "../../../components/topic";
import Button from "../../button";
import { useCardsContext } from "@/app/(main)/context/cardsData";
import IsCompleted from "../../isCompleted";
import Back from "@/app/(main)/components/back";
function page() {
  const { cardsData } = useCardsContext();

  return (
    <div className="border p-4">
      <Back className="" size={20} src="/ensinamentos" />
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

      <IsCompleted n={1} index={0} cap="1" chapter="firstChapter" />
    </div>
  );
}

export default page;
