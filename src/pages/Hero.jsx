import Particles from "../components/Particles";
import { IMAGE_ASSETS } from "../constants/ImageContants";

export default function Hero() {
    return (
        <section className="w-full lg:h-[120vh] h-[90vh] bg-black blend-y-end">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={2000}
          particleSpread={20}
          speed={0.05}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
        >
          <div className="absolute top-1/5 transform text-center">
            <h1 className="text-xl lg:text-7xl font-bold text-white">
              Turning Ideas Into Impact
            </h1>
            <h1 className="text-xl lg:text-7xl mt-2 lg:mt-3 font-bold inline-block pb-5 bg-gradient-to-b from-white from-20% to-primary to-55% bg-clip-text text-transparent">
              Through the Power of Code
            </h1>
          </div>
          <img
            src={IMAGE_ASSETS.HERO_SECTION_1}
            alt=""
            className="self-end -translate-y-20 w-3/4 md:w-3/4 md:translate-y-30 lg:max-w-1/2 lg:translate-y-80 animate-spin drop-shadow-[0_0_30px_cyan] "
            style={{ animationDuration: "60s" }}
          />
          <img
            src={IMAGE_ASSETS.HERO_SECTION_2}
            alt=""
            className="absolute w-100 self-end -translate-y-10 md:w-5/6 md:translate-y-10 lg:max-w-1/2 lg:translate-y-20 animate-float "
          />
        </Particles>
      </section>
    );}