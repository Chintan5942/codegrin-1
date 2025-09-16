import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingFallback from "../routes/LoadingFallback";

export default function RouteLoader({ children }) {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);   // fade state
  const [isVisible, setIsVisible] = useState(true);   // mount/unmount

  useEffect(() => {
    let minTimePassed = false;
    let assetsLoaded = false;

    setIsVisible(true);
    setIsLoading(true); // show loader

    // ✨ Force fade-in by delaying opacity change
    const fadeInTimer = setTimeout(() => {
      setIsLoading(true); 
    }, 50);

    // ⏳ Minimum 2 seconds
    const timer = setTimeout(() => {
      minTimePassed = true;
      if (assetsLoaded) {
        setIsLoading(false); // triggers fade out
        setTimeout(() => setIsVisible(false), 500); // after fade out
      }
    }, 1000);

    // 🖼️ Wait for assets
    const handleLoad = () => {
      assetsLoaded = true;
      if (minTimePassed) {
        setIsLoading(false); // fade out
        setTimeout(() => setIsVisible(false), 500);
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeInTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, [pathname]);

  return (
    <>
      {isVisible && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black 
            transition-opacity duration-500 
            ${isLoading ? "opacity-100" : "opacity-0"}`}
        >
          <LoadingFallback />
        </div>
      )}
      {children}
    </>
  );
}
