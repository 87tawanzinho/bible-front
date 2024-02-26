import React from "react";
import { GiVanillaFlower } from "react-icons/gi";
import Animations from "../components/animations";
import arc from "@/public/arc.json";
function page() {
  return (
    <div>
      <p className="text-center text-2xl font-serif  ">Devocional</p>
      <div className="flex items-center gap-4 justify-center">
        <GiVanillaFlower size={34} className="text-sky-900" />

        <Animations gif={arc} height="200px" width="200px" />
        <GiVanillaFlower size={34} className="text-sky-900" />
      </div>
    </div>
  );
}

export default page;
