"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import gif from "@/public/bird-loading.json";
function Loading() {
  return (
    <div className="justify-center flex items-center h-screen">
      <Player
        autoplay
        loop
        src={gif}
        style={{ height: "400px", width: "400px" }}
      ></Player>
    </div>
  );
}

export default Loading;
