import React, { useEffect, useState } from "react";
import { IMAGE_ASSETS } from "../constants/ImageContants";

const GlobalPageLoader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Reset loader state when component mounts
    setShowLoader(true);
    setFadeOut(false);

    const handleLoad = () => {
      // Start fade out when DOM and all resources are loaded
      setFadeOut(true);
      setTimeout(() => {
        setShowLoader(false); // Remove loader after fade
      }, 600); // Match duration with CSS transition
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Add event listener for when page finishes loading
      window.addEventListener('load', handleLoad);
    }

    // Cleanup event listener
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []); // Empty dependency array - only run once on mount

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
