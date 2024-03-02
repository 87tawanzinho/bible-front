"use client";
import { instanceWithAuthorization } from "@/app/instance";
import React, { createContext, useContext, useState } from "react";

interface CardsContextProps {
  cardsData: any;
  setCardsData: React.Dispatch<React.SetStateAction<any>>;
}

const CardsContext = createContext<CardsContextProps | undefined>(undefined);

export const useCardsContext = (): CardsContextProps => {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error("useCardsContext must be used within a CardsProvider");
  }
  return context;
};

function CardsDataProvider({ children }: { children: React.ReactNode }) {
  const [cardsData, setCardsData] = useState<any>();

  const AxiosTakeCards = async () => {
    const { cardsData, setCardsData } = useCardsContext();

    try {
      const response = await instanceWithAuthorization.get("take_cards/");

      setCardsData(response.data.allChapters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <CardsContext.Provider value={{ cardsData, setCardsData }}>
      {children}
    </CardsContext.Provider>
  );
}

export default CardsDataProvider;
