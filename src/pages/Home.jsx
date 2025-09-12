import React from "react";
import { Link } from "react-router-dom";
import Particles from "../components/Particles";
import { IMAGE_ASSETS } from "../constants/ImageContants";
import Hero from "./Hero";
import HeadingTitle from "../components/HeadingTItle";
import Orbit from "../components/Orbit";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Achivements */}
      <div className="container">
        <section className="w-fullflex items-center justify-center">
          <HeadingTitle word1={"Our"} word2={"Achivement"} direction="row"/>
        </section>
      </div>
    </div>
  );
}
