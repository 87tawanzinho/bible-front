import React from "react";

function CompletedButton({ devocional }: { devocional?: boolean }) {
  return (
    <div className="flex flex-col">
      <div className=" mt-10 w-full flex justify-center lg:justify-start ">
        <button className="bg-green-200   text-gray-800  p-2 w-11/12 lg:w-96">
          Completado
        </button>
      </div>
      <p className="text-[12px] text-gray-400 mt-2 text-center sm:text-start ">
        Você ganhou uma conquista por completar{" "}
        {devocional ? "esse devocional" : "essa lição"}
      </p>
    </div>
  );
}

export default CompletedButton;
