import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen py-8 flex flex-col justify-center sm:py-20">
      <div className="relative py-3 w-full sm:max-w-2xl sm:mx-auto">
        <div className="absolute inset-0 bg-stone-900 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="flex flex-col gap-16 items-center relative px-4 py-10 bg-gradient-to-t from-orange-100 to-[#f5f1e4] sm:rounded-3xl sm:p-28">
          <h3 className="text-stone-800 text-4xl font-IRANSans_Black">
            ثبت نام
          </h3>
          <form action="" className="flex flex-col gap-8 w-full">
            <input
              type="text"
              className="p-6 rounded-full text-stone-800 shadow-lg focus:border-b-4 focus:border-stone-800 duration-200"
              placeholder="نام کاربری"
            />
            <input
              type="text"
              className="p-6 rounded-full text-stone-800 shadow-lg focus:border-b-4 focus:border-stone-800 duration-200"
              placeholder="ایمیل"
            />
            <input
              type="password"
              className="p-6 rounded-full text-stone-800 shadow-lg focus:border-b-4 focus:border-stone-800 duration-200"
              placeholder="رمز عبور"
            />
            <button className="w-full bg-stone-800 text-white rounded-full p-4 hover:bg-orange-300 hover:text-stone-800 duration-300">
              ثبت نام
            </button> 
          </form>
          <div className="flex flex-col gap-4 text-xl text-stone-700 font-bold">
            <p className="flex items-center gap-4">
              قبلا حساب کاربری ساخته اید؟
              <Link
                className="underline underline-offset-4 text-stone-400"
                to="/signin"
              >
                {" "}
                وارد شوید.{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
