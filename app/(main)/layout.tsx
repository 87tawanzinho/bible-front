import React from "react";
import AuthCheck from "../components/AuthCheck";
import Navbar from "./navbar/navbar";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthCheck>
      <Navbar />
      <div className="px-2 md:px-8 lg:px-60 mt-10 lg:mt-20">{children}</div>
    </AuthCheck>
  );
}

export default layout;
