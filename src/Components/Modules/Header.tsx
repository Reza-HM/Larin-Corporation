import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-20">
      <div className="flex items-center gap-20">
        <img src="logo.png" className="w-72" alt="" />
        <ul className="flex items-center gap-16 text-stone-900  ">
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
      <div className="flex justify-center items-center bg-stone-900 text-orange-200 hover:bg-orange-200 hover:text-stone-900 duration-300 rounded-full py-4 px-16 cursor-pointer font-bold">
        ورود | ثبت نام
      </div>
    </div>
  );
};
export default Header;
