import { GoTriangleLeft } from "react-icons/go";

const Service = () => {
  return (
    <div className="p-8 bg-white text-stone-800 rounded-2xl shadow-lg flex flex-col gap-6 hover:-translate-y-2 duration-500 cursor-pointer">
      <img src="/img/17.png" className="w-32" alt="" />
      <div className="flex items-center gap-2">
        <GoTriangleLeft className="text-5xl text-amber-700/60" />{" "}
        <h3 className="font-bold text-stone-900">شخصی سازی آسان</h3>
      </div>
      <p className="text-stone-900">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        طراحان گرافیک و...
      </p>
    </div>
  );
};
export default Service;
