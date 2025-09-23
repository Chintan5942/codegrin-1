import React, { useEffect, useRef } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/RoutesContants";
import { PORTFOLIO } from "../../constants/PortfolioConstants";
import BorderButton from "../../components/Buttons/BorderButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const portfolio = location.state?.portfolio;
  const currentIndex = location.state?.currentIndex;
  const clipperRefs = useRef([]);
  const titleFillRef = useRef(null);
  const nextProjectRef = useRef(null);
  const nextBgRef = useRef(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.state]);

  // Get next project data
  const getNextProject = () => {
    if (currentIndex !== undefined && PORTFOLIO.length > 0) {
      const nextIndex = (currentIndex + 1) % PORTFOLIO.length;
      return PORTFOLIO[nextIndex];
    }
    return null;
  };

  const nextProject = getNextProject();

  useEffect(() => {
    if (!portfolio?.project_images) return;

    // Wait for all images to load before initializing animations
    const imagePromises = portfolio?.project_images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve;
        img.src = portfolio?.image_path + image;
      });
    });

    Promise.all(imagePromises).then(() => {
      setTimeout(() => {
        // GSAP ScrollTrigger animation for clip-path
        clipperRefs.current.forEach((clip) => {
          if (clip) {
            gsap.fromTo(
              clip,
              { clipPath: "inset(25% round 50px)" },
              {
                clipPath: "inset(0% round 0px)",
                ease: "none",
                scrollTrigger: {
                  trigger: clip,
                  start: "top 100%",
                  end: "bottom 100%",
                  scrub: true,
                  markers: false,
                },
              }
            );
          }
        });

        // Next project title fill animation
        if (nextProjectRef.current) {
          gsap.to(titleFillRef.current, {
            scrollTrigger: {
              trigger: nextProjectRef.current,
              start: "top 100%",
              end: "bottom 100%",
              scrub: true,
              onLeave: () => {
                // Navigate to next project when animation is done
                if (nextProject) {
                  const nextIndex = (currentIndex + 1) % PORTFOLIO.length;
                  
                  // Kill all ScrollTrigger instances before navigation
                  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
                  
                  // Navigate immediately - preloader will handle loading state
                  navigate(ROUTES.PROJECT_DETAILS, {
                    state: {
                      portfolio: nextProject,
                      currentIndex: nextIndex
                    }
                  });
                  
                  window.lenis?.scrollTo(0, { immediate: true });
                }
              }
            }
          });
        }

        // Next project background parallax animation
        if (nextBgRef.current && nextProjectRef.current) {
          gsap.to(nextBgRef.current, {
            y: "-20%",
            ease: "none",
            scrollTrigger: {
              trigger: nextProjectRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }
        ScrollTrigger.refresh();
      }, 0);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [portfolio, currentIndex, nextProject, navigate]);

  if (!portfolio) {
    return <Navigate to={ROUTES.PORTFOLIO} replace />;
  }

  return (
    <>
      {/* Header */}
      <div className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute bg-black/50 w-full h-screen z-10 flex items-center justify-center text-shadow-lg/25 text-white font-bold text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
          {portfolio?.title}
        </div>  
        <img
          src={portfolio?.image_path + "header.png"}
          className="absolute top-1/2 left-0 -translate-y-1/2 min-h-full min-w-none object-cover z-0"
        />  
      </div>

      {/* Details */}
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
        <div className="lg:col-span-1">
          <h1 className="text-2xl font-bold mb-5">PROJECT DETAILS</h1>
          <ul className="pl-2 md:pl-5">
            <li className="mb-1 text-lg text-secondary">
              <strong className="mr-2 text-white">Tech Stack:</strong>
              {portfolio?.tech_stack}
            </li>
            <li className="mb-1 text-lg text-secondary">
              <strong className="mr-2 text-white">Project Type:</strong>
              {portfolio?.project_type}
            </li>
            <li className="mb-1 text-lg text-secondary">
              <strong className="mr-2 text-white">Publisher Name:</strong>
              {portfolio?.publisher_name}
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-5">INFO</h1>
          {portfolio?.description.map((item, index) => (
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
            link={portfolio?.project_link}
            className="mt-5 ml-5"
          />
        </div>
      </div>

      {/* Images */}
      <div className="mt-20">
        {portfolio?.project_images.map((image, index) => (
          <div key={index} className="w-full relative tt-clipper">
            <div
              ref={(el) => (clipperRefs.current[index] = el)}
              className="container relative flex justify-center items-center w-full min-h-screen overflow-hidden bg-primary-card-light tt-clipper-inner"
              style={{ clipPath: "inset(25% round 45px)" }}
            >
              <div className="absolute inset-0 -z-1 tt-clipper-bg">
                <img
                  src={portfolio?.image_path + image}
                  alt={portfolio?.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next Project Section */}
      {nextProject && (
        <section 
          ref={nextProjectRef}
          className="next-project relative min-h-screen overflow-hidden"
        >
          <div className="bg absolute inset-0">
            <img 
              ref={nextBgRef}
              src={nextProject.image_path + "header.png"} 
              alt="Next Project Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="next-project-inner relative z-10 flex items-center justify-center min-h-screen bg-black/50">
            <div className="text-center">
              <h2 ref={titleFillRef} className="text-2xl md:text-3xl lg:text-5xl font-bold">
                  Next: {nextProject.title}
              </h2>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProjectDetails;
