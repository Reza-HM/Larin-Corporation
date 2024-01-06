import BreadCrumb from "../Components/Modules/BreadCrumb";
import SectionHeader from "../Components/Modules/SectionHeader";
import Service from "../Components/Modules/Service";

const Services = () => {
  return (
    <div className="container">
      <BreadCrumb route="خدمات" />
      <SectionHeader englishTitle="Services" persianTitle="خدمات ما" />
      <div className="my-32 grid grid-cols-12 gap-8">
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
};
export default Services;
