import React from "react";

function page() {
  return (
    <div className="">
      <div className="flex overflow-x-auto  gap-2 md:gap-4  lg:gap-8  p-0 lg:p-2  text-center  ">
        <div>
          <p className="mb-2">Devocional</p>
          <div className="h-60 md:h-80  lg:h-96 w-28 md:w-40 lg:w-48 bg-[#98a8b8] rounded-xl scale"></div>
        </div>

        <div>
          <p className="mb-2">Devocional</p>
          <div className="h-60 md:h-80  lg:h-96 w-28 md:w-40 lg:w-48 bg-[#70886e] rounded-xl"></div>
        </div>

        <div>
          <p className="mb-2">Devocional</p>
          <div className="h-60 md:h-80  lg:h-96 w-28 md:w-40 lg:w-48 bg-[#81705c] rounded-xl"></div>
        </div>

        <div>
          <p className="mb-2">Devocional</p>
          <div className="h-60 md:h-80  lg:h-96 w-28 md:w-40 lg:w-48 bg-[#7a5a61] rounded-xl"></div>
        </div>
      </div>

      <div className="mt-10 text-xl">
        <h2>Anotações</h2>
      </div>
    </div>
  );
}

export default page;
