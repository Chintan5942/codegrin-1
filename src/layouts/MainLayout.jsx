import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import ScrollRotatorButton from "../components/ScrollRotatorButton";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import GlobalPageLoader from "../components/GlobalLoader";
import { useEffect, useState } from "react";

export default function MainLayout({ children }) {
  const { pathname } = useLocation();
  const [showLoader, setShowLoader] = useState(true);
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setShowLoader(true);

    const timer = setTimeout(() => {
      setShowLoader(false);
      setCurrentPath(pathname); // show new page only after loader
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (showLoader) {
    return <GlobalPageLoader />;
  }

  return (
    <div className="bg-black text-white font-primary min-h-screen flex flex-col">
      <Header overlay />
      <CustomCursor />
      <main className="flex-1 w-full">
        {pathname === currentPath && children}
      </main>
      <Footer />
      <ScrollRotatorButton />
    </div>
  );
}
