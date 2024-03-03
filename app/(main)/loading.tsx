"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import gif from "@/public/bird-loading.json";
function Loading() {
  return (
    <div className="leap-frog mt-4 ml-4">
      <div className="leap-frog__dot"></div>
      <div className="leap-frog__dot"></div>
      <div className="leap-frog__dot"></div>
    </div>
  );
}

export default Loading;
