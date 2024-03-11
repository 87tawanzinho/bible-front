"use client";
import React, { useState } from "react";
import jesusBanner from "@/public/cap1banner/cap1l2.png";

import TitleAndLesson from "../../../components/titleAndLesson";
import ImageBanner from "../../../components/ImageBanner";
import TextIntrodutionModel1 from "../../../components/textIntrodution";
import Topic from "../../../components/topic";
import Link from "next/link";
import { axiosToggleCompleted } from "../../ToggleCompleted";
import { useRouter } from "next/navigation";
import Button from "../../button";
import IsCompleted from "../../isCompleted";
import Back from "@/app/(main)/components/back";
function page() {
  const router = useRouter();
  return (
    <div className="border p-4">
      <Back className="" size={20} src="/ensinamentos" />
      <TitleAndLesson title="Conhecendo a Palavra de Deus" lesson="2" cap="1" />
      <ImageBanner src={jesusBanner} />
      <TextIntrodutionModel1 text="Vamos explorar juntos a incrível Palavra de Deus! Aqui estão algumas maneiras de se conectar com ela:" />

      <Topic
        titleOne="Leia a Bíblia"
        textOne="A Bíblia é como uma carta especial de Deus para você! Peça aos seus pais ou responsáveis para lerem histórias e ensinamentos da Bíblia contigo. Descubra como Deus nos ama e nos guia através de Suas palavras."
      />

      <Topic
        titleOne="Ore a Deus"
        textOne="Assim como conversamos com amigos, podemos falar com Deus através da oração. Diga a Ele sobre seu dia, agradeça pelas coisas boas e peça ajuda quando precisar. Deus está sempre pronto para ouvir e cuidar de você!"
      />

      <Topic
        titleOne="Aprenda Versículos"
        textOne="Memorizar versículos da Bíblia é uma maneira divertida de guardar a Palavra de Deus em seu coração. Peça ajuda aos seus pais para escolher versículos adequados à sua idade e aprenda sobre o amor e a sabedoria divina."
      />

      <Topic
        titleOne="Cante Louvores"
        textOne="Expresse sua alegria e amor por Deus cantando músicas que falam sobre Seu poder e bondade. É uma forma animada de se conectar com Ele e celebrar o amor que Ele nos dá todos os dias."
      />

      <Topic
        titleOne="Compartilhe com Amigos"
        textOne="Conte aos seus amigos sobre Deus e como Ele é maravilhoso. Compartilhar o que aprendemos sobre a Palavra de Deus é uma maneira especial de espalhar amor e bondade ao nosso redor."
      />

      <TextIntrodutionModel1 text="Lembre-se, conhecer a Palavra de Deus nos aproxima Dele e nos ajuda a viver vidas cheias de amor e propósito. Deus te ama muito!" />

      <IsCompleted n={2} index={1} cap="1" chapter="firstChapter" />
    </div>
  );
}

export default page;
