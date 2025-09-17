import React from "react";
import { ROUTES } from "../constants/RoutesContants";
import Particles from "../components/Particles";
import { IMAGE_ASSETS } from "../constants/ImageContants";
import HeadingTitle from "../components/HeadingTItle";
import Orbit from "../components/Orbit";
import AchivementCard from "../components/Cards/AchivementCard";
import ServiceCard from "../components/Cards/ServiceCard";
import { SERVICES } from "../constants/ServicesConstants";
import BorderButton from "../components/Buttons/BorderButton";
import ToolsAnimation from "../components/ToolsAnimation";
import PortfolioCarousel from "./Portfolio/PortfolioCarousel";
import BlogSection from "./Blogs/BlogSection";
import ClientFeedbackAnimation from "../components/ClientFeedback";
import TeamCarousel from "../components/TeamCarousel";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="w-full h-auto blend-y-end overflow-x-clip">
        <div className="absolute w-full h-[130vh] top-0 -z-2">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={2000}
            particleSpread={20}
            speed={0.05}
            particleBaseSize={60}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <HeadingTitle
          word1={"Turning Ideas Into Impact"}
          word2={"Through the Power of Code"}
          className="lg:pt-50 md:pt-50 pt-50 pb-20"
          direction="col"
        />
        <Orbit
          planetCount={10}
          radius={{ base: "40%", md: "35%", lg: "27%" }}
          duration={45000}
          className="translate-y-45 md:translate-y-65 lg:translate-y-115"
        />
        <div className="relative flex w-full justify-center items-center pointer-events-none">
          <img
            src={IMAGE_ASSETS.HERO_SECTION_1}
            alt=""
            className="absolute  w-3/4 md:w-2/3 lg:w-1/2  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-spin drop-shadow-[0_0_15px_cyan]  lg:drop-shadow-[0_0_20px_cyan]"
            style={{ animationDuration: "120s" }}
          />

          <img
            src={IMAGE_ASSETS.HERO_SECTION_2}
            alt=""
            className="relative mt-50 w-5/6 md:w-5/6 lg:max-w-300 z-10 animate-float-down"
          />
        </div>
      </section>

      {/* Contents */}
      <div className="container">
        {/* Achivements */}
        <section className="w-fullflex items-center justify-center">
          <HeadingTitle
            word1={"Our"}
            word2={"Achivements"}
            direction="row"
            className="mt-10 mb-5 lg:mb-10"
          />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 xl:gap-8 items-center justify-items-center">
            <AchivementCard
              className="animate-float-left lg:animate-float-left xl:animate-float-up"
              count={5}
              title={"Year of trust"}
            />
            <AchivementCard
              className="animate-float-right lg:animate-float-right xl:animate-float-down"
              count={29}
              title={"Clients"}
            />
            <AchivementCard
              className="animate-float-left lg:animate-float-right xl:animate-float-up"
              count={30}
              title={"Projects Completed"}
            />
            <AchivementCard
              className="animate-float-right lg:animate-float-left xl:animate-float-down"
              count={10}
              title={"Countries Served"}
            />
          </div>
        </section>

        {/* Services */}
        <section className="w-full flex flex-col items-center justify-center">
          <HeadingTitle
            word1={"Our"}
            word2={"Services"}
            direction="row"
            className="mt-20 mb-5 lg:mb-10"
          />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
            {SERVICES.slice(0, 8).map((service, index) => (
              <div key={index} className="w-full">
                <ServiceCard service={service}/>
              </div>
            ))}
          </div>
          <BorderButton
            title="View More"
            link={ROUTES.SERVICES}
            className="mt-10"
          />
        </section>

        {/* Tools */}
        <section>
          <HeadingTitle
            word1={"Integrating with"}
            word2={"Top Tools"}
            direction="col"
            className="mt-20 mb-5 lg:mb-10"
          />
          <ToolsAnimation pauseOnHover={false} />
        </section>

        {/* Work */}
        <section className="w-full flex flex-col items-center justify-center">
          <HeadingTitle
            word1={"Our"}
            word2={"Work"}
            direction="row"
            className="mt-20 mb-5 lg:mb-10"
          />
          <PortfolioCarousel />
          <BorderButton
            title="View More"
            link={ROUTES.PORTFOLIO}
            className="mt-10"
          />
        </section>

        {/* Blogs */}
        <section className="w-full flex flex-col items-center justify-center">
          <HeadingTitle
            word1={"Latest"}
            word2={"Blog"}
            direction="row"
            className="mt-20 mb-5 lg:mb-10"
          />
          <BlogSection bloglimit={4} />
          <BorderButton
            title="View More"
            link={ROUTES.BLOG}
            className="mt-10"
          />
        </section>

        {/* Client Feedback */}
        <section>
          <HeadingTitle
            word1={"What Client Say's About"}
            word2={"Our Services"}
            direction="col"
            className="mt-30 mb-5 lg:mb-10"
          />
          <ClientFeedbackAnimation />
        </section>

        {/* Team */}
        <section>
          <HeadingTitle
            word1={"Meet"}
            word2={"Our Team"}
            direction="row"
            className="mt-30 mb-5 lg:mb-10"
          />
          <TeamCarousel />
        </section>

        {/* Why to choose us */}
        <section>
          <HeadingTitle
            word1={"Why Choose"}
            word2={"Codegrin"}
            direction="col"
            className="mt-30 mb-5 lg:mb-20"
          />
          <div className="text-justify text-base xl:text-lg text-gray-400">
            <p className="mb-5">
              At <strong>Codegrin Technologies</strong>, we believe in
              delivering more than just software—we create digital experiences
              that make an impact. Since our founding in 2020, we’ve been
              committed to helping businesses transform ideas into powerful,
              scalable, and future-ready solutions. Our expertise spans the
              entire React ecosystem, including
              <strong>ReactJS, Next.js, Node.js</strong>, and beyond. Whether
              it’s building custom applications, optimizing existing systems, or
              integrating cutting-edge features, we provide complete solutions
              under one roof.
            </p>

            <p className="mb-5">
              What sets us apart is our user-first approach. Every design and
              development decision is made with usability in mind—ensuring
              seamless navigation, engaging interfaces, and an overall
              experience that delights end users. We combine creative UI/UX
              design with robust technology to deliver products that are both
              visually appealing and functionally strong. From eCommerce
              platforms to inventory management systems and even blockchain
              solutions, our portfolio reflects our ability to adapt and deliver
              across industries.
            </p>

            <p className="mb-5">
              Beyond technology, we also help businesses grow faster with
              advanced
              <strong>Google</strong> and <strong>Meta</strong> advertising
              services—driving traffic, generating leads, and maximizing ROI.
            </p>

            <p className="mb-5">
              Above all, we are more than just a vendor—we are a strategic
              partner. Our team is dedicated to innovation, quality, and
              long-term success, ensuring every project is delivered on time,
              within budget, and beyond expectations.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
