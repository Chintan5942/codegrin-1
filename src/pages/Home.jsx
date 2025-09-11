import React from "react";
import { Link } from "react-router-dom";
import Particles from "../components/Particles";
import { IMAGE_ASSETS } from "../constants/ImageContants";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero/>

      {/* Container-based section */}
      <div className="container">
        <section className="w-full h-screen bg-amber-300 flex items-center justify-center">
          {/* <h2 className="text-black text-3xl font-semibold">
            Container Section
          </h2> */}
        </section>
      </div>
    </div>
  );
}
