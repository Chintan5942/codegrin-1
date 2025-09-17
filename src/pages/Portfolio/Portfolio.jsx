import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { PORTFOLIO } from "../../constants/PortfolioConstants";
import { ROUTES } from "../../constants/RoutesContants";

export default function Portfolio() {
  const navigate = useNavigate();

  const handleCardClick = (portfolio, index) => {
    navigate(ROUTES.PROJECT_DETAILS, { 
      state: { portfolio, currentIndex: index} 
    });
  };

  return (
    <section className="w-full min-h-screen">
      <div className="container">
        <PageTitle title="Our Portfolio" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-20 gap-8 md:gap-7 lg:gap-10">
          {PORTFOLIO.map((portfolio, index) => (
            <div
              key={index}
              className="w-full relative border border-primary-border rounded-xl cursor-pointer group"
              onClick={() => handleCardClick(portfolio, index)}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={portfolio.image_path+"header.png"}
                  className="rounded-lg group-hover:scale-110 transition-all duration-300 object-cover origin-center"
                  alt={portfolio.title}
                />
              </div>
              <div className="absolute -bottom-4 left-5">
                <h2 className="lg:text-2xl text-sm w-fit bg-primary-card-light text-white py-2 px-5 font-bold mt-5">
                  {portfolio.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
