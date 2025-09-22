import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { ROUTES } from "../../constants/RoutesContants";
import BorderButton from "../../components/Buttons/BorderButton";
const ServiceDetails = () => {
  const location = useLocation();
  const service = location.state?.service;

  if (!service) {
    return <Navigate to={ROUTES.SERVICES} replace />;
  }
  return (
    <div className="container">
      <PageTitle title={service.title} showBreadcrumb={true} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-20 mb-5 lg:mb-10">
        <div className="w-full text-justify lg:order-1 order-2">
          {service?.description?.map((desc, i) => (
            <li className="list-none mt-3 text-sm md:text-base text-secondary" key={i}>
              {desc}
            </li>
          ))}
          <BorderButton
            title="Inquiry Now"
            link={ROUTES.CONTACT}
            className="mt-10"
          />
        </div>
        <div className="w-full flex justify-center lg:order-2 order-1">
          <img
            src={service.img}
            alt={service.title}
            className="w-1/2 h-fit md:animate-float-down"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
