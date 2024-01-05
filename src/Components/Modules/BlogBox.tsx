import { GoTriangleLeft } from "react-icons/go";

const BlogBox = () => {
  return (
    <div className="flex flex-col gap-8 overflow-hidden bg-white rounded-3xl shadow-xl hover:-translate-y-2 duration-500 cursor-pointer">
      <div className="flex items-center gap-8 border-b px-8 py-6 pb-4">
        <img
          src="/img/avatar-1.jpg"
          className="w-32 h-32 rounded-[50%]"
          alt=""
        />
        <div className="flex flex-col gap-4">
          <h3 className="font-bold">شخص X</h3>
          <p className="text-xl text-stone-600">طراح گرافیک</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-6 py-4">
        <div className="flex items-center gap-2">
          <GoTriangleLeft className="text-5xl text-amber-700/60" />{" "}
          <h3 className="font-bold text-stone-900">پرفروش ترین مبل ایران</h3>
        </div>
        <p className="text-stone-600">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و ...
        </p>
      </div>
      <img src="/img/blog-9.jpg" alt="" />
    </div>
  );
};
export default BlogBox;
