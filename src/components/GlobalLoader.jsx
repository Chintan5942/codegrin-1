import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IMAGE_ASSETS } from "../constants/ImageContants";

const GlobalPageLoader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const pathname = useLocation();

  useEffect(() => {
    setShowLoader(true);
    setFadeOut(false);

    const timeout = setTimeout(() => {
      setFadeOut(true); // start fade out
      setTimeout(() => {
        setShowLoader(false); // remove loader after fade
      }, 600); // match duration
    }, 1200);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!showLoader) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={IMAGE_ASSETS.LOGO_SYMBOL}
        alt="loading"
        className="w-20 lg:w-60 animate-smooth-spin"
      />
    </div>
  );
};

export default GlobalPageLoader;
