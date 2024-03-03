import React from "react";
import AuthCheck from "../components/AuthCheck";
import Navbar from "./navbar/navbar";
import CardsDataProvider from "./context/cardsData";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthCheck>
      <CardsDataProvider>
        <Navbar />

        <div className="px-2 md:px-8 lg:px-60 pt-2 lg:pt-10  bg-gradient-to-r from-[#f7fffe] to-[#f4fcff] h-screen ">
          {children}
        </div>
      </CardsDataProvider>
    </AuthCheck>
  );
}

export default layout;
