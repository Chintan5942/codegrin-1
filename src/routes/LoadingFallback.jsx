import React from "react";
import { IMAGE_ASSETS } from "../constants/ImageContants";

export default function LoadingFallback() {
  return (
    <div className="flex items-center justify-center bg-black h-screen">
      <img
        src={IMAGE_ASSETS.LOGO_SYMBOL}
        alt="loading"
        className="w-25 lg:w-1/6 animate-spin"
        style={{ animationDuration: "600ms" }}
      />
    </div>
  );
}
