import React from "react";

function CardsHome() {
  return (
    <div className="flex overflow-x-auto  gap-2 md:gap-4  lg:gap-8  p-0 lg:p-2  text-center  ">
      <OneCard bg="bg-blue-100" />
      <OneCard bg="bg-orange-100" />
      <OneCard bg="bg-red-100" />
      <OneCard bg="bg-green-100" />
    </div>
  );
}

function OneCard({ bg }: { bg: string }) {
  return (
    <div className="lg:overflow-hidden  ">
      <p className="mb-2">Devocional</p>
      <div
        className={`h-60 md:h-80  lg:h-96 w-28 md:w-40 lg:w-48 ${bg} rounded-xl scale`}
      >
        <img
          src="https://w7.pngwing.com/pngs/439/754/png-transparent-bird-cartoon-drawing-cartoon-birdcage-comics-animals-photography.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default CardsHome;
