import PageTitle from "../components/PageTitle";
import TeamCarousel from "../components/TeamCarousel";
import { TEAM_DATA } from "../constants/TeamConstant";
import TeamCard from "../components/Cards/TeamCard";

export default function Contact() {
  return (
    <section className="w-full min-h-screen">
      <div className="container">
        <PageTitle title="About Us" />
        <div className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="w-full h-100 overflow-hidden blend-y-end">
            <TeamCarousel />
          </div>
          <div>
            <h1 className="text-4xl font-bold">We Are CODEGRIN</h1>
            <p className="mt-5 text-secondary text-justify">
              Founded in 2020, Codegrin Technologies is a leading provider of
              advanced frontend development services and solutions. We
              specialize in harnessing the power of the React ecosystem to craft
              exceptional digital experiences for our clients. Our expertise
              spans ReactJS and related technologies, including Node.js,
              Next.js, and more. With a strong focus on user experience (UX) and
              user interface (UI) design, we build intuitive and visually
              appealing interfaces that prioritize usability and engagement.
            </p>
            <p className="mt-5 text-secondary text-justify">
              Whether you're looking to develop custom web and mobile
              applications from scratch or enhance your existing system with
              unique features and functionalities, Codegrin Technologies offers
              all the solutions you need under one roof.
            </p>
          </div>
        </div>
        <div className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl font-bold">Our Mission</h1>
            <p className="mt-5 text-secondary text-justify">
              Our mission is to empower businesses with innovative frontend
              solutions, transforming digital experiences. We aim to help our
              clients thrive in a dynamic digital landscape. Through
              cutting-edge technology, we drive success and growth. Together, we
              create lasting impact and build the future of digital interaction.
            </p>
            <h1 className="mt-10 text-4xl font-bold">Our Vission</h1>
            <p className="mt-5 text-secondary text-justify">
              Our vision is to lead transformative change in the frontend
              industry by merging creativity and technology. We aim to set new
              benchmarks and create remarkable digital experiences that leave a
              lasting impact on users and transform how businesses connect with
              their audiences.{" "}
            </p>
          </div>
          <div class="order-1 lg:order-2 animate-float-up relative w-60 h-52 md:w-[300px] md:h-[260px] flex items-center justify-center mx-auto">
            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 md:w-[150px] md:h-[150px] bg-blue-600 rotate-45 flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span class="-rotate-45 text-xs md:text-sm tracking-widest">
                OUR
              </span>
            </div>

            <div class="absolute top-0 right-0 w-32 h-32 md:w-[150px] md:h-[150px] bg-orange-500 rotate-45 flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span class="-rotate-45 text-xs md:text-sm tracking-widest">
                MISSION
              </span>
            </div>

            <div class="absolute bottom-0 right-0 w-32 h-32 md:w-[150px] md:h-[150px] bg-green-500 rotate-45 flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span class="-rotate-45 text-xs md:text-sm tracking-widest">
                VISION
              </span>
            </div>
          </div>
        </div>
        <div className="mt-40 flex items-center justify-center">
          <div className="w-full h-1 bg-primary blend-x" />
          <h1 className="text-4xl font-bold w-1/2 text-center">
            Meet Our Team
          </h1>
          <div className="w-full h-1 bg-primary blend-x" />
        </div>
        {/* Founder section - 2 items centered with gap-10 */}
        <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-6 sm:gap-10 my-10 sm:my-20">
          {TEAM_DATA.FOUNDER.map((item, index) => (
            <div key={index}>
              <TeamCard team={item} />
            </div>
          ))}
        </div>

        <div className="my-10 w-full h-0.5 bg-primary blend-x"/>

        {/* Employee section - responsive grid with gap-x for md and below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-6 gap-10 my-10 sm:my-20 w-full justify-items-center">
          {TEAM_DATA.EMPLOYEES.map((item, index) => (
            <div key={index}>
              <TeamCard team={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
