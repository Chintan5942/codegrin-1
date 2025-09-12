import HeadingTitle from "../components/HeadingTItle";
import Orbit from "../components/Orbit";
import Particles from "../components/Particles";
import { IMAGE_ASSETS } from "../constants/ImageContants";

export default function Hero() {
  return (
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
          disableRotation={true}
        />
      </div>
  
      <HeadingTitle word1={"Turning Ideas Into Impact"} word2={"Through the Power of Code"} className="lg:pt-50 md:pt-50 pt-50 pb-20"/>

      <Orbit planetCount={10} radius={{ base: "40%", md: "35%", lg: "27%"}} duration={45000} className="translate-y-45 md:translate-y-65 lg:translate-y-115" />
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
          className="relative mt-50 w-5/6 md:w-5/6 lg:max-w-300 z-10 animate-float"
        />
      </div>
    </section>
  );
}
