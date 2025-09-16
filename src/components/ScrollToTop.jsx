import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.lenis) {
      // ✅ smooth scroll to top
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      // fallback if lenis not initialized
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
