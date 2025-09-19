import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { ROUTES } from "./constants/RoutesContants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import Courses from "./pages/Courses/Courses";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs/Blogs";
import ProjectDetails from "./pages/Portfolio/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";
import BlogDetails from "./pages/Blogs/BlogDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ServiceDetails from "./pages/Services/ServiceDetails";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
    });

    window.lenis = lenis;

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length) lenis.scrollTo(value, { immediate: true });
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.documentElement.style.transform ? "transform" : "fixed",
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const onRefresh = () => {
      requestAnimationFrame((t) => {
        lenis.raf(t);
        ScrollTrigger.update();
      });
    };
    ScrollTrigger.addEventListener("refresh", onRefresh);

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      ScrollTrigger.killAll();
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* All pages wrapped in MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path={ROUTES.SERVICES}
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />
        <Route
          path={ROUTES.SERVICE_DETAILS}
          element={
            <MainLayout>
              <ServiceDetails />
            </MainLayout>
          }
        />
        <Route
          path={ROUTES.PORTFOLIO}
          element={
            <MainLayout>
              <Portfolio />
            </MainLayout>
          }
        />
        <Route
          path={ROUTES.COURSES}
          element={
            <MainLayout>
              <Courses />
            </MainLayout>
          }
        />
        <Route
          path={ROUTES.BLOG}
          element={
            <MainLayout>
              <Blogs />
            </MainLayout>
          }
        />
        <Route
          path={ROUTES.BLOG_DETAILS}
          element={
            <MainLayout>
              <BlogDetails />
            </MainLayout>
          }
        />
        <Route
          path={ROUTES.ABOUT}
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          }
        />
        <Route
          path={ROUTES.CONTACT}
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path={ROUTES.PROJECT_DETAILS}
          element={
            <MainLayout>
              <ProjectDetails />
            </MainLayout>
          }
        />

        {/* NotFound outside MainLayout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
