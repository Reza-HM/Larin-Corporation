import { FaPlus } from "react-icons/fa";
import BreadCrumb from "../Components/Modules/BreadCrumb";
import SectionHeader from "../Components/Modules/SectionHeader";

const Aboutus = () => {
  return (
    <div className="container max-w-screen-xl">
      <BreadCrumb route="درباره ما" />
      <SectionHeader
        englishTitle="About Us"
        persianTitle="درباره ما
      "
      />
      <div className="container my-40 flex items-center flex-wrap gap-12">
        <div className="w-full lg:w-1/2 lg:flex-1 flex flex-col items-center justify-center gap-12 border-r-2 pr-11 border-r-gray-300">
          <div className="flex flex-col gap-4 relative">
            <div className="absolute -right-20 top-0 w-16 h-16 flex justify-center items-center rounded-[50%] bg-white">
              <div className="w-10 h-10 flex justify-center items-center rounded-[50%] bg-black">
                <FaPlus className="text-2xl text-white" />
              </div>
            </div>
            <div className="flex items-center gap-4 text-stone-800 text-2xl">
              <p className="font-bold">ثبت شرکت</p>
              <div className="bg-white p-4 rounded-full border border-slate-300">
                3 اردیبهشت 1402
              </div>
            </div>
            <p className="text-justify max-w-3xl text-stone-800 text-2xl leading-loose">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className="flex flex-col gap-4 relative">
            <div className="absolute -right-20 top-0 w-16 h-16 flex justify-center items-center rounded-[50%] bg-white">
              <div className="w-10 h-10 flex justify-center items-center rounded-[50%] bg-black">
                <FaPlus className="text-2xl text-white" />
              </div>
            </div>
            <div className="flex items-center gap-4 text-stone-800 text-2xl">
              <p className="font-bold"> استخدام نیرو</p>
              <div className="bg-white p-4 rounded-full border border-slate-300">
                3 اردیبهشت 1402
              </div>
            </div>
            <p className="text-justify max-w-3xl text-stone-800 text-2xl leading-loose">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className="flex flex-col gap-4 relative">
            <div className="absolute -right-20 top-0 w-16 h-16 flex justify-center items-center rounded-[50%] bg-white">
              <div className="w-10 h-10 flex justify-center items-center rounded-[50%] bg-black">
                <FaPlus className="text-2xl text-white" />
              </div>
            </div>
            <div className="flex items-center gap-4 text-stone-800 text-2xl">
              <p className="font-bold">جذب هزار کاربر اولیه</p>
              <div className="bg-white p-4 rounded-full border border-slate-300">
                3 اردیبهشت 1402
              </div>
            </div>
            <p className="text-justify max-w-3xl text-stone-800 text-2xl leading-loose">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:flex-1 relative py-4 sm:mx-auto">
          <div className="absolute inset-0 bg-stone-900 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative bg-gradient-to-t from-orange-100 to-[#f5f1e4] sm:rounded-3xl">
            <div className="max-w-md mx-auto">
              <img src="/img/business-woman.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
