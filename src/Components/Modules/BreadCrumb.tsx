import { FC } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface BreadCrumbProps {
  route: string;
}

const BreadCrumb: FC<BreadCrumbProps> = ({ route }) => {
  return (
    <div className="p-8 text-stone-800 text-2xl">
      <span className="h-px w-full block bg-orange-200"></span>
      <div className=" flex items-center gap-4 py-6 ">
        <Link to="/">خانه</Link>
        <FaAngleLeft className="text-3xl" />
        <p>{route}</p>
      </div>
      <span className="h-px w-full block bg-orange-200"></span>
    </div>
  );
};
export default BreadCrumb;
