import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../Components/Modules/BreadCrumb";
import SectionHeader from "../Components/Modules/SectionHeader";
import Service from "../Components/Modules/Service";
import { AppDispatch, RootState } from "../Redux/store";
import { getServicesFromServer } from "../Redux/store/services";
import { useEffect } from "react";

const Services = () => {
  const services = useSelector((state: RootState) => state.services.services);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getServicesFromServer("https://larin-corporation.vercel.app/api/services"));
  }, [dispatch]);

  return (
    <div className="container">
      <BreadCrumb route="خدمات" />
      <SectionHeader englishTitle="Services" persianTitle="خدمات ما" />
      <div className="my-32 grid grid-cols-12 gap-8">
        {services.map((service) => (
          <Service {...service} key={service.id} />
        ))}
      </div>
    </div>
  );
};
export default Services;
