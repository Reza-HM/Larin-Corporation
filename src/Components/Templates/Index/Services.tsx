import { useDispatch, useSelector } from "react-redux";
import Service from "../../Modules/Service";
import { useEffect } from "react";
import { getServicesFromServer } from "../../../Redux/store/services";
import { AppDispatch, RootState } from "../../../Redux/store";

const Services = () => {
  const services = useSelector((state: RootState) => state.services.services);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getServicesFromServer("http://localhost:3000/services"));
  }, [dispatch]);

  return (
    <div className="mt-20 rounded-3xl bg-gradient-to-t from-orange-100">
      <div className="container p-20 max-w-screen-2xl">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
          {services.slice(0, 4).map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
