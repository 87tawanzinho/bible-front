"use client";
import { instanceWithAuthorization } from "@/app/instance";
import React, { createContext, useContext, useState } from "react";

interface CardsContextProps {
  profileData: any;
  setProfileData: any;
  cardsData: any;
  setCardsData: React.Dispatch<React.SetStateAction<any>>;
  AxiosTakeCards: any;
  fetchProfile: any;
  changeDevotional: any;
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
  const [profileData, setProfileData] = useState<any>();

  const AxiosTakeCards = async () => {
    try {
      const response = await instanceWithAuthorization.get("take_cards/");

      setCardsData(response.data.allChapters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchProfile = async () => {
    try {
      const response = await instanceWithAuthorization.get("take_user_data/");

      setProfileData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const changeDevotional = async () => {
    try {
      const response = await instanceWithAuthorization.get("change_warn");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardsContext.Provider
      value={{
        profileData,
        setProfileData,
        cardsData,
        setCardsData,
        AxiosTakeCards,
        fetchProfile,
        changeDevotional,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
}

export default CardsDataProvider;
