import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import DrawerMenu from "./DrawerMenu";

const Navbar = () => {
  const [isDrawerMenuOpened, setIsDrawerMenuOpened] = useState(false);
  return (
    <>
      <div className="flex justify-center xl:justify-between gap-4 flex-wrap items-center p-20">
        <div className="flex items-cente justify-center lg:justify-between flex-wrap gap-4 lg:gap-20">
          <div
            className="lg:hidden"
            onClick={() => setIsDrawerMenuOpened(true)}
          >
            <FaBars className="text-5xl cursor-pointer" />
          </div>
          <Link to="/">
            <img src="/img/logo.png" className="w-72" alt="" />
          </Link>
          <ul className="hidden lg:flex items-center gap-16 text-stone-900">
            <li className="hover:border-b hover:border-orange-300 pb-1 duration-200">
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li className="hover:border-b hover:border-orange-300 duration-200">
              <Link to="/services">خدمات</Link>
            </li>

            <li className="flex items-center gap-4 hover:border-b hover:border-orange-300 pb-1 duration-200">
              <Link to="/projects">پروژه ها</Link>
              <FaAngleDown className="text-3xl" />
            </li>

            <li className="hover:border-b hover:border-orange-300 pb-1 duration-200">
              <Link to="/questions">سوالات متداول</Link>
            </li>

            <li className="hover:border-b hover:border-orange-300 pb-1 duration-200">
              <Link to="/blog">وبلاگ</Link>
            </li>

            <li className="hover:border-b hover:border-orange-300 pb-1 duration-200">
              <Link to="/aboutus">درباره ما</Link>
            </li>

            <li className="hover:border-b hover:border-orange-300 pb-1 duration-200">
              <Link to="/contactus">تماس با ما</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/signup"
          className="flex justify-center items-center w-40 bg-stone-900 text-orange-200 hover:bg-orange-200 hover:text-stone-900 duration-300 rounded-full py-2 px-8 cursor-pointer font-bold"
        >
          ورود | ثبت نام
        </Link>
      </div>
      {isDrawerMenuOpened && <DrawerMenu onClose={setIsDrawerMenuOpened} />}
    </>
  );
};
export default Navbar;
