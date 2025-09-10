import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollRotatorButton from "../components/ScrollRotatorButton";
import { IMAGE_ASSETS } from "../constants/ImageContants";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="bg-black text-white font-primary min-h-screen flex flex-col">
      {/* Content: responsive container with adaptive horizontal padding */}
        <Header overlay />
      <main className="w-full">
          <Outlet />
      </main>

      {/* Footer */}
     <Footer/>
      <ScrollRotatorButton />
    </div>
  );
}
