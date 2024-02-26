import React from "react";
import CardsHome from "./cards";
import { FaChevronDown, FaSortDown } from "react-icons/fa";
import Title_and_arrowDown from "../components/title_and_arrowDown";
import { BsArrowDown } from "react-icons/bs";
import Card_with_citation_square from "../components/card_with_citation_square";

function page() {
  return (
    <div className="">
      <Title_and_arrowDown
        title="O que você quer ver"
        span="hoje?"
        underline={true}
      />

      <CardsHome />

      <Card_with_citation_square />

      <div className="mt-10 text-xl">
        <Title_and_arrowDown title="Anotações" span="" underline={false} />
      </div>
    </div>
  );
}

export default page;