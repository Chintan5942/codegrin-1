import React from "react";
import { IMAGE_ASSETS } from "../constants/ImageContants";

export default function LoadingFallback() {
  return (
    <div className="flex items-center justify-center bg-black h-screen">
      <img
        src={IMAGE_ASSETS.LOGO_SYMBOL}
        alt="loading"
        className="w-20 lg:w-60 animate-smooth-spin"
      />
    </div>
  );
}
