import { IMAGE_ASSETS } from "../constants/ImageContants";
import { usePreloader } from "../context/PreloaderContext";

export default function Preloader() {
  const { loading } = usePreloader();

  if (!loading) return null;

  return (
    <div
    className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-600`}
  >
    <img
      src={IMAGE_ASSETS.LOGO_SYMBOL}
      alt="loading"
      className="w-20 lg:w-60 animate-smooth-spin"
    />
  </div>
  );
}
