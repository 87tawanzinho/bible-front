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
      <TitleAndLesson title="Conhecendo a Trindade" lesson="1" cap="2" />
      <ImageBanner src={jesusBanner} />
      <TextIntrodutionModel1 text="Vamos viajar na história para entender como a Trindade, que é como Deus se mostra, chegou até nós. Conheça o Papai Deus, Jesus e o Espírito Santo e descubra por que cada um é tão especial:" />

      <Topic
        cap="2"
        titleOne="Deus Papai, Nosso Criador"
        textOne="Láááá no comecinho, Deus Papai criou o mundo e tudo que a gente vê. Ele é como um super pai amoroso que quer o melhor para todos nós. Deus Papai nos ama tanto que decidiu cuidar de tudo com muito carinho."
      />

      <Topic
        cap="2"
        titleOne="Jesus, Nosso Amigão"
        textOne={
          "Depois, Jesus apareceu como o Amigão de Deus! Ele veio aqui na Terra para nos mostrar como ser pessoas legais, nos ensinou a amar todo mundo e fez coisas incríveis. Jesus até deu Sua vida por nós, mostrando que o amor é muito forte."
        }
      />

      <Topic
        cap="2"
        titleOne="Espírito Santo, Nosso Ajudante"
        textOne="Quando Jesus voltou para o céu, Deus mandou o Espírito Santo para ficar sempre com a gente. O Espírito Santo é como a ajuda especial de Deus, que nos guia, dá força e está sempre por perto. Ele é como um amigo que a gente sente, mas não consegue ver."
      />

      <Topic
        cap="2"
        titleOne="Como ser Amigo da Trindade"
        textOne="Para ser amigo da Trindade, é só conversar com Deus Papai, agradecer a Jesus e pedir ajuda ao Espírito Santo. Assim, você vai ter a amizade especial de Deus em todas as formas que Ele nos ama. Cada parte da Trindade tem uma história linda, e juntas elas formam a história mais incrível de amor que a gente já viu!"
      />

      <IsCompleted n={1} index={0} cap="2" chapter="secondChapter" />
    </div>
  );
}

export default page;
