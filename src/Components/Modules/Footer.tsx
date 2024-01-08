import { IoArrowUp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-stone-800 text-white">
      <div
        className="fixed flex justify-center items-center z-50 bottom-10 right-10 p-4 shadow-sm shadow-white border-0 rounded-full cursor-pointer bg-stone-900 hover:bg-orange-300 text-orange-200 hover:text-stone-900 duration-300"
        onClick={goToTop}
      >
        <IoArrowUp className="text-4xl" />
      </div>
      <div className="container max-w-screen-2xl p-10">
        <div className="flex items-center flex-wrap mt-8 gap-8 leading-8">
          <div className="w-full lg:w-5/12 lg:flex-[3]">
            <img src="/img/logo-footer.png" loading="lazy" alt="" />
            <p className="text-justify mt-16 text-2xl leading-loose">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده است.
            </p>
          </div>

          <div className="w-full lg:w-2/12 lg:flex-1 text-center lg:text-right md:text-center flex flex-col items-center gap-12">
            {" "}
            <h3>دسترسی سریع</h3>
            <ul className="flex flex-col gap-6">
              <li className="text-2xl">
                <Link to="/">صفحه اصلی</Link>
              </li>
              <li className="text-2xl">
                <Link to="/aboutus">درباره ما</Link>
              </li>
              <li className="text-2xl">
                <Link to="/contactus">تماس با ما</Link>
              </li>
              <li className="text-2xl">
                <Link to="/projects">پروژه ها</Link>
              </li>
              <li className="text-2xl">
                <Link to="/services">خدمات ما</Link>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-2/12 lg:flex-1 text-center lg:text-right md:text-center flex flex-col items-center gap-12">
            <h3 className="text-3xl">خدمات شرکت</h3>
            <ul className="flex flex-col gap-6">
              <li className="text-2xl">
                <Link to="">جزئیات وبلاگ</Link>
              </li>
              <li className="text-2xl">
                <Link to="">جزئیات پروژه</Link>
              </li>
              <li className="text-2xl">
                <Link to="">مدیران</Link>
              </li>
              <li className="text-2xl">
                <Link to="">سوالات متداول</Link>
              </li>
              <li className="text-2xl">
                <Link to="">404</Link>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-3/12 lg:flex-[2] flex flex-col gap-8">
            <h3 className="text-3xl">عضویت در خبرنامه</h3>
            <div className="flex relative bg-white py-2 px-8 rounded-lg shadow-lg text-stone-900">
              <button className="absolute right-0 top-1 py-2 px-2 bg-orange-300 font-bold rounded-lg">
                عضویت
              </button>
              <input type="text" className="bg-unset w-full h-full pr-20" />
            </div>
            <div className="flex items-center flex-wrap justify-center gap-8 mt-2">
              <img src="/img/enamad_logo.png" loading="lazy" alt="" />
              <img src="/img/samandehi_logo.png" loading="lazy" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-700 text-white p-8 text-center">
        <p className="font-bold">Copyright © 2023 - تمامی حقوق محفوظ می باشد</p>
      </div>
    </div>
  );
};
export default Footer;
