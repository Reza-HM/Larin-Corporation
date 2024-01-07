import { Link } from "react-router-dom";
import BreadCrumb from "../Components/Modules/BreadCrumb";
import SectionHeader from "../Components/Modules/SectionHeader";

const Contactus = () => {
  return (
    <div className="container">
      <BreadCrumb route="ارتباط با ما" />
      <SectionHeader englishTitle="Contact Us" persianTitle="ارتباط با ما" />
      <div className="flex gap-8 my-40">
        <div className="flex-1 flex flex-col container animate-fade-up">
          <h2 className="font-IRANSans_Black text-2xl">
            پیغــام خــود را بـــا مـــا در میـــان بگذاریــــد...
          </h2>
          <p className="text-justify text-xl text-stone-800 mt-4 mb-12">
            جهت ارتباط با ما و ارسال نظرات و پیشنهادات خود می توانید از فرم زیر
            استفاده نمایید.
          </p>

          <form action="" className="flex flex-col gap-8">
            <input
              type="text"
              className="p-6 shadow-lg rounded-full text-stone-800 focus:border-b-2 focus:border-stone-800 duration-200"
              placeholder="موضوع پیام"
            />
            <input
              type="text"
              className="p-6 shadow-lg rounded-full text-stone-800 focus:border-b-2 focus:border-stone-800 duration-200"
              placeholder="پست الکترونیکی:"
            />
            <textarea
              className="p-6 shadow-lg rounded-[2rem] text-stone-800 min-h-40 max-h-60 focus:border-b-2 focus:border-stone-800 duration-200"
              placeholder="متن پیام را بنویسید..."
            ></textarea>
            <button
              type="submit"
              className="self-start bg-stone-800 text-white py-4 px-8 rounded-full cursor-pointer hover:bg-orange-200 hover:text-stone-800 duration-300"
            >
              ارسال پیام
            </button>
          </form>
        </div>
        <div className="flex-[2] relative overflow-hidden hidden md:flex animate-fade-up">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0 rounded-3xl"
            title="map"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="flex flex-wra items-center absolute bottom-24 right-0 left-0 bg-white py-6 mx-16 rounded-2xl">
            <div className="flex-1 px-6">
              <h3 className="font-IRANSans_Black">مکـــان:</h3>
              <p className="text-justify text-xl text-stone-700 mt-4">
                جهت ارتباط با ما و ارسال نظرات و پیشنهادات خود می توانید از فرم
                زیر استفاده نمایید.
              </p>
            </div>
            <div className="flex-1 px-6 space-y-4">
              <h3 className="font-IRANSans_Black">ایمیــل:</h3>
              <Link className="text-orange-400" to="">
                sitename@gmail.com
              </Link>
              <h3 className="font-IRANSans_Black">تمـاس:</h3>
              <Link to="">021-55442345 | 09135553366</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contactus;
