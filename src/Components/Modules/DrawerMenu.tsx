import { Dispatch, FC, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface DrawerMenuProps {
  onClose: Dispatch<SetStateAction<boolean>>;
}

const DrawerMenu: FC<DrawerMenuProps> = ({ onClose }) => {
  return (
    <div className="fixed right-0 top-0 w-80 p-4 bg-orange-200 z-10 animate-fade-left text-stone-800 min-h-screen">
      <ul className="flex flex-col gap-8 mt-16">
        <div className="text-left" onClick={() => onClose(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-12 h-12 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <li onClick={() => onClose(false)}>
          <Link
            to="/"
            className="hover:border-b hover:border-orange-200 pb-1 duration-300"
          >
            صفحه اصلی
          </Link>
        </li>
        <li onClick={() => onClose(false)}>
          <Link
            className="hover:border-b hover:border-orange-200 pb-1 duration-300"
            to="/services"
          >
            خدمات
          </Link>
        </li>
        <li onClick={() => onClose(false)}>
          <Link
            className="hover:border-b hover:border-orange-200 pb-1 duration-300"
            to="/projects"
          >
            پروژه ها
          </Link>
        </li>
        <li onClick={() => onClose(false)}>
          <Link
            className="hover:border-b hover:border-orange-200 pb-1 duration-300"
            to="/questions"
          >
            سوالات متداول
          </Link>
        </li>
        <li onClick={() => onClose(false)}>
          <Link
            className="hover:border-b hover:border-orange-200 pb-1 duration-300"
            to="/blog"
          >
            وبلاگ
          </Link>
        </li>
        <li onClick={() => onClose(false)}>
          <Link
            className="hover:border-b hover:border-orange-200 pb-1 duration-300"
            to="/aboutus"
          >
            درباره ما
          </Link>
        </li>
        <li onClick={() => onClose(false)}>
          <Link
            className="hover:border-b hover:border-orange-200 pb-1 duration-300"
            to="/contactus"
          >
            تماس با ما
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default DrawerMenu;
