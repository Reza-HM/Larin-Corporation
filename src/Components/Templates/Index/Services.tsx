import Service from "../../Modules/Service";

const Services = () => {
  return (
    <div className="mt-20 rounded-3xl bg-gradient-to-t from-orange-100">
      <div className="container p-20 max-w-screen-2xl">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </div>
    </div>
  );
};
export default Services;
