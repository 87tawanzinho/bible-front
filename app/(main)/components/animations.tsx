"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

function Animations({
  gif,
  height,
  width,
}: {
  gif: any;
  height: string;
  width: string;
}) {
  return (
    <div className="">
      <Player
        autoplay
        loop
        src={gif}
        style={{ height: "100px", width: "100px" }}
      ></Player>
    </div>
  );
}

export default Animations;
