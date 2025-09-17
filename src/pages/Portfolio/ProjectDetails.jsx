import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/RoutesContants";
import BorderButton from "../../components/Buttons/BorderButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const portfolio = location.state?.portfolio;
  const clipperRefs = useRef([]);

  useEffect(() => {
    // GSAP ScrollTrigger animation for clip-path
    clipperRefs.current.forEach((clip) => {
      if (clip) {
        gsap.fromTo(clip,
          { clipPath: "inset(25% round 45px)" }, // start state
          {
            clipPath: "inset(0% round 0px)",    // end state
            ease: "none",
            scrollTrigger: {
              trigger: clip,
              start: "top 100%",   // when image enters viewport
              end: "bottom 100%",  // until it passes
              scrub: true,
              markers: false      // set to true to debug
            }
          }
        );
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [portfolio]);

  if (!portfolio) {
    return (
      <div className="p-10 text-center text-red-500">
        No portfolio data provided
        <button
          onClick={() => navigate(-1)}
          className="block mt-4 px-4 py-2 bg-primary-light rounded-lg hover:bg-primary-dark transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="min-h-screen w-full relative overflow-hidden">
        <div className="absolute bg-black/50 w-full h-screen z-10 flex items-center justify-center text-shadow-lg/25 text-white font-bold text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
          {portfolio.title}
        </div>
        <img
          src={portfolio.image_path + "header.png"}
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Details */}
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
        <div className="lg:col-span-1">
          <h1 className="text-2xl font-bold mb-5">PROJECT DETAILS</h1>
          <ul className="pl-2 md:pl-5">
            <li className="mb-1 text-lg text-secondary">
              <strong className="mr-2 text-white">Tech Stack:</strong>
              {portfolio.tech_stack}
            </li>
            <li className="mb-1 text-lg text-secondary">
              <strong className="mr-2 text-white">Project Type:</strong>
              {portfolio.project_type}
            </li>
            <li className="mb-1 text-lg text-secondary">
              <strong className="mr-2 text-white">Publisher Name:</strong>
              {portfolio.publisher_name}
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-5">INFO</h1>
          {portfolio.description.map((item, index) => (
            <p
              key={index}
              className="mb-5 pl-2 md:pl-5 text-sm lg:text-base text-justify text-secondary"
            >
              {item}
            </p>
          ))}
          <BorderButton
            title="Visit Link"
            target="_blank"
            link={portfolio.project_link}
            className="mt-5 ml-5"
          />
        </div>
      </div>

      {/* Images */}
      <div className="mt-20">
        {portfolio.project_images.map((image, index) => (
          <div key={index} className="w-full relative tt-clipper">
            <div 
              ref={(el) => clipperRefs.current[index] = el}
              className="container relative flex justify-center items-center w-full min-h-screen overflow-hidden bg-primary-card-light tt-clipper-inner"
              style={{ clipPath: "inset(25% round 45px)" }}
            >
              <div className="absolute inset-0 -z-1 tt-clipper-bg">
                <img
                  src={portfolio.image_path + image}
                  alt={portfolio.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectDetails;
