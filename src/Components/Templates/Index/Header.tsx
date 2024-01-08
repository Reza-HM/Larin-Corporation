import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Header = () => {
  return (
    <div className="container mt-20 max-w-screen-2xl">
      <div className="container flex justify-center items-center flex-wrap gap-8 relative">
        <div className="bg-stone-900 hidden md:block absolute -top-15 left-0 h-[500px] w-[200px] lg:w-[400px] rounded-b-3xl"></div>

        <div className="md:flex-1">
          <div className="flex flex-col gap-16 items-center md:items-stretch">
            <div className="text-2xl font-bold bg-orange-200 w-60 rounded-full p-4 text-center shadow-md cursor-text">
              شرکت صندلی لارین
            </div>
            <h1 className="text-6xl font-IRANSans_Black text-center md:text-start">
              دنیـــــای صنـــدلــــی هـــای مینیمــــال
            </h1>
            <p className="text-justify max-w-2xl leading-loose text-stone-600">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است.
            </p>
            <div className="flex justify-between items-center max-w-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="68"
                fill="none"
                viewBox="0 0 109 78"
              >
                <path
                  fill="#1E1E1E"
                  d="M36.027 66.768c4.312 8.836 15.968 14.546 24.865 8.826 6.66-4.345 9.556-13.258 7.202-20.764-2.856-8.787-11.694-14.419-20.616-15.269a29.984 29.984 0 00-9.32.682l.12-.42c.373-1.344.864-2.984 1.367-4.298a49.705 49.705 0 013.84-8.172C50.752 14.666 63.6 5.65 78.073 3.416a50.747 50.747 0 0128.543 3.485 1.165 1.165 0 001.572-1.475 1.167 1.167 0 00-.611-.652A53.003 53.003 0 0092.917.556a54.705 54.705 0 00-5.723-.451c-10.87-.336-21.85 2.72-30.9 8.795-11.084 7.558-19.158 19.417-22.123 32.515a41.738 41.738 0 00-9.452 4.85c-7.452 5.073-13.142 12.047-18.461 19.122l-1.933-9.843c-.112-.575-.284-1.04-.738-1.427a2.134 2.134 0 00-1.528-.485c-1.024.135-2.134 1.117-1.907 2.27L3.467 72.78c.132.675.37 1.187.962 1.57.505.327 1.28.516 1.852.22a33.8 33.8 0 017.87-2.908.186.186 0 01.029-.003l.015-.001.425-.09a33.234 33.234 0 014.207-.57c1.094-.078 2.054-1.15 1.907-2.266a2.138 2.138 0 00-2.265-1.912c-2.41.177-4.796.598-7.121 1.256 6.007-8.182 12.79-16.309 21.804-20.601-.709 6.549-.152 13.364 2.875 19.293zm1.05-20.874a31.343 31.343 0 013.237-.878c4.442-.925 9.025-.65 13.203 1.119 4.037 1.65 7.688 4.695 9.547 8.66 3.763 7.547-1.303 19.05-10.406 18.823-4.32-.043-8.563-2.531-11.26-5.892-2.125-2.67-3.434-5.96-4.11-9.308-.81-4.092-.775-8.368-.21-12.524z"
                ></path>
              </svg>
              <Link
                to="/aboutus"
                className="text-2xl font-bold bg-orange-200 w-60 rounded-full p-6 text-center shadow-md hover:bg-stone-900 hover:text-orange-200 duration-300"
              >
                بیشتر بخوانید...
              </Link>
            </div>
          </div>
        </div>
        <Swiper
          className="md:!flex-[2] rounded-3xl lg:ml-20"
          loop={true}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <img src="/img/slider-1.jpg" className="" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/slider-2.jpg" className="" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Header;
