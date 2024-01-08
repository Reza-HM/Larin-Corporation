import { Swiper, SwiperSlide } from "swiper/react";
import BreadCrumb from "../Components/Modules/BreadCrumb";
import SectionHeader from "../Components/Modules/SectionHeader";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <BreadCrumb route="جزئیات پروژه" />
      <SectionHeader
        englishTitle="Project Details"
        persianTitle="جزئیات پروژه"
      />
      <p className="text-center mt-14 text-2xl text-stone-700">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </p>
      <Swiper className="mt-40 mb-8" loop navigation modules={[Navigation]}>
        <SwiperSlide>
          <img
            src="/img/blog-1.jpg"
            className="mx-auto rounded-xl shadow-lg cursor-pointer hover:-translate-y-2 duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/blog-2.jpg"
            className="mx-auto rounded-xl shadow-lg cursor-pointer hover:-translate-y-2 duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/blog-4.jpg"
            className="mx-auto rounded-xl shadow-lg cursor-pointer hover:-translate-y-2 duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/blog-9.jpg"
            className="mx-auto rounded-xl shadow-lg cursor-pointer hover:-translate-y-2 duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/project-1.jpg"
            className="mx-auto rounded-xl shadow-lg cursor-pointer hover:-translate-y-2 duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/project-2.jpg"
            className="mx-auto rounded-xl shadow-lg cursor-pointer hover:-translate-y-2 duration-300"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className="grid grid-cols-12 gap-8 my-8"
        loop
        slidesPerView={4}
        spaceBetween={15}
      >
        <SwiperSlide>
          <img
            src="/img/blog-1.jpg"
            className="rounded-xl shadow-lg cursor-pointer hover:-translate-y-2 duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/blog-2.jpg"
            className="rounded-xl shadow-lg cursor-pointer hover:-translate-y-2 duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/blog-4.jpg"
            className="rounded-xl shadow-lg cursor-pointer hover:-translate-y-2 duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/blog-9.jpg"
            className="rounded-xl shadow-lg cursor-pointer hover:-translate-y-2 duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/project-1.jpg"
            className="rounded-xl shadow-lg cursor-pointer hover:-translate-y-2 duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/project-2.jpg"
            className="rounded-xl shadow-lg cursor-pointer hover:-translate-y-2 duration-300"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center items-center gap-8 my-20 ">
        <div className="text-2xl cursor-pointer font-bold bg-orange-200 w-60 rounded-full p-6 text-center shadow-md hover:bg-stone-900 hover:text-orange-200 duration-300">
          توضیحات
        </div>
        <div className="text-2xl font-bold cursor-pointer bg-stone-800 text-orange-200 w-60 rounded-full p-6 text-center shadow-md hover:text-stone-900 hover:bg-orange-200 duration-300">
          اطلاعات بیشتر
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 mb-32">
        <h2 className="font-IRANSans_Black text-4xl">توضیحات</h2>
        <p className="text-justify leading-loose text-xl">
          رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
          از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <div className="flex flex-col gap-12 mb-32">
        <div className="">
          <div className="bg-orange-200 text-stone-900 text-2xl rounded-full shadow-lg p-4 w-44 flex justify-center items-center">
            مقالات مشابه
          </div>
          <p className="text-2xl text-stone-700 mt-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-4">
          <div className="w-full sm:w-1/3 sm:flex-1">
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
          <div className="w-full sm:w-1/3 sm:flex-1">
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
          <div className="w-full sm:w-1/3 sm:flex-1">
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
                پروژه شماره سه
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 mb-40">
        <div className="">
          <div className="bg-orange-200 text-stone-900 text-2xl rounded-full shadow-lg p-4 w-44 flex justify-center items-center">
            نظرات{" "}
          </div>
          <p className="text-2xl text-stone-700 mt-4">
            شما با نام X وارد شده اید!!
          </p>
        </div>
        <form action="flex flex-col">
          <textarea
            placeholder="نظر خود را بنویسید"
            className="w-full p-4 rounded-3xl shadow-xl text-2xl text-stone-700 min-h-60 max-h-80 duration-300 focus:border-b-4 focus:border-stone-800"
          ></textarea>
          <button className="text-2xl font-bold bg-stone-800 text-orange-200 w-60 rounded-full p-6 text-center shadow-md hover:bg-orange-300 hover:text-stone-800 duration-300 mt-4">ارسال پیام</button>
        </form>
      </div>
    </div>
  );
};
export default ProjectDetails;
