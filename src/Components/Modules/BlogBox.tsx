import { FC } from "react";
import { GoTriangleLeft } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

interface BlogBoxProps {
  title: string;
  description: string;
  img: string;
  author: string;
}

const BlogBox: FC<BlogBoxProps> = ({ description, img, title, author }) => {
  const location = useLocation();

  return (
    <div
      className={`${
        location.pathname === "/blog" ? "col-span-12 md:col-span-3" : ""
      } flex flex-col gap-8 overflow-hidden bg-white rounded-3xl shadow-xl hover:-translate-y-2 duration-500 cursor-pointer`}
    >
      <div className="flex items-center gap-8 border-b px-8 py-6 pb-4">
        <img
          src="/img/avatar-1.jpg"
          className="w-32 h-32 rounded-[50%]"
          alt=""
        />
        <div className="flex flex-col gap-4">
          <h3 className="font-bold">{author}</h3>
          <p className="text-xl text-stone-600">طراح گرافیک</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-6 py-4">
        <div className="flex items-center gap-2">
          <GoTriangleLeft className="text-5xl text-amber-700/60" />{" "}
          <Link to="/article-details/1" className="font-bold text-stone-900">
            {title}{" "}
          </Link>
        </div>
        <p className="text-stone-600">{description}</p>
      </div>
      <img src={img} className="h-full" alt="" />
    </div>
  );
};
export default BlogBox;
