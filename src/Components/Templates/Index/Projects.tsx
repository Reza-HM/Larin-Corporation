import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="container mt-20">
      <div className="flex items-center gap-8">
        <div className="flex-1">
          <Link
            to="/project-details/1"
            className="group relative flex justify-center h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-lg md:h-96"
          >
            <img
              src="/img/project-1.jpg"
              loading="lazy"
              className="w-full h-full absolute inset-0 object-cover object-center transition duration-300 group-hover:scale-110"
              alt=""
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative mb-8 flex justify-center text-3xl text-center text-white">
              پروژه شماره یک
            </span>
          </Link>
        </div>
        <div className="flex-[2]">
          <Link
            to="/project-details/1"
            className="group relative flex justify-center h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-lg md:h-96"
          >
            <img
              src="/img/project-2.jpg"
              loading="lazy"
              className="w-full h-full absolute inset-0 object-cover object-center transition duration-300 group-hover:scale-110"
              alt=""
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative mb-8 flex justify-center text-3xl text-center text-white">
              پروژه شماره دو
            </span>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-8 mt-8">
        <div className="flex-[2]">
          <Link
            to="/project-details/1"
            className="group relative flex justify-center h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-lg md:h-96"
          >
            <img
              src="/img/project-3.jpg"
              loading="lazy"
              className="w-full h-full absolute inset-0 object-cover object-center transition duration-300 group-hover:scale-110"
              alt=""
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative mb-8 flex justify-center text-3xl text-center text-white">
              پروژه شماره سه
            </span>
          </Link>
        </div>
        <div className="flex-1">
          <Link
            to="/project-details/1"
            className="group relative flex justify-center h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-lg md:h-96"
          >
            <img
              src="/img/project-4.jpg"
              loading="lazy"
              className="w-full h-full absolute inset-0 object-cover object-center transition duration-300 group-hover:scale-110"
              alt=""
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative mb-8 flex justify-center text-3xl text-center text-white">
              پروژه شماره چهار
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Projects;
