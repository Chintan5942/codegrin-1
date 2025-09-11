import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_ASSETS } from "../constants/ImageContants";
import { ROUTES } from "../constants/RoutesContants";

export default function NotFound() {
  return (
    <section className="flex  bg-white flex-col items-center h-screen">
      <img src={IMAGE_ASSETS.NOT_FOUND} alt=""/>
      <h2 className="text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center text-black font-bold">404 — Not Found</h2>
      <Link to={ROUTES.HOME} className=" text-primary font-medium">Go to Home</Link>
    </section>
  );
}
