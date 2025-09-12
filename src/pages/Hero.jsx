import Particles from "../components/Particles";
import { IMAGE_ASSETS } from "../constants/ImageContants";

export default function Hero() {
  return (
    <section className="w-full h-auto blend-y-end ">
      <div className="absolute w-full h-[130vh] top-0">
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
      <div className="w-full lg:pt-60 md:pt-50 pt-50  text-center pointer-events-none">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white">
          Turning Ideas Into Impact
        </h1>
        <h1 className="text-2xl md:text-5xl lg:text-7xl lg:mt-3 font-bold inline-block pb-5 bg-gradient-to-b from-white from-20% to-primary to-55% bg-clip-text text-transparent">
          Through the Power of Code
        </h1>
      </div>

      <div className="relative flex w-full justify-center items-center pointer-events-none">
        <img
          src={IMAGE_ASSETS.HERO_SECTION_1}
          alt=""
          className="absolute  w-3/4 md:w-2/3 lg:w-1/2  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-spin drop-shadow-[0_0_20px_cyan]"
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
