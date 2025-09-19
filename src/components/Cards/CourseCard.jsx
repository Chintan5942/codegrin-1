import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/RoutesContants";

export default function ServiceCard(props) {
  const navigate = useNavigate();

  const handleRedirect = (service) => {
    navigate(ROUTES.SERVICE_DETAILS, { state: { service } });
  };
  return (
    <div
    className={`cursor-pointer relative group h-full flex flex-col text-white border-t md:border-t-0 md:border-l border-primary-border hover:border-primary-border transition-all duration-500 ease-in-out`}
    onClick={() => handleRedirect(props.service)}
  >
  
   
    </div>
  );
}
