import React from "react";
import Card_with_citation_square from "../components/card_with_citation_square";
import ChaptersText from "../components/chaptersText";
import CardsChapter1 from "./cards";

function page() {
  return (
    <div className="mt-8">
      <div className="text-center  lg:text-start text-2xl lg:text-4xl pb-12  ">
        <h2 className="">Ensinamentos sobre Jesus</h2>
        <h4 className="text-[12px] text-gray-600">
          Comece a caminhar com <span className="font-bold">Deus</span>.
        </h4>
      </div>
      <ChaptersText cap="1" total="4" />
      <CardsChapter1 />

      <Card_with_citation_square />
    </div>
  );
}

export default page;
