import React from "react";
import CardsHome from "./cards";
import { FaChevronDown, FaSortDown } from "react-icons/fa";
import Title_and_arrowDown from "../components/title_and_arrowDown";
import { BsArrowDown } from "react-icons/bs";
import Card_with_citation_square from "../components/card_with_citation_square";

function page() {
  return (
    <div className="">
      <h2 className="text-center underline lg:text-start text-2xl lg:text-4xl pb-12  ">
        Ensinamentos sobre Jesus
      </h2>

      <div className="flex items-center gap-2 font-serif px-2">
        <h2>Comece por aqui</h2>
      </div>
      <CardsHome />

      <Card_with_citation_square />
    </div>
  );
}

export default page;
