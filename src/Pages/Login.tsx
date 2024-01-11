import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useState } from "react";
import { loginUser } from "../Redux/store/users";
import swal from "sweetalert";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.users.loading);
  const error = useSelector((state: RootState) => state.users.error);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    dispatch(loginUser(credentials));
    if (!error) {
      swal({
        title: "به سایت خوش آمدید.",
        icon: "success",
        buttons: ["بستن", "OK"],
      }).then(() => {
        navigate("/");
      });
    } else {
      swal({
        title: "چنین کاربری در سایت وجود ندارد.",
        icon: "error",
        buttons: ["بستن", "OK"],
      });
    }
  };

  return (
    <div className="container min-h-screen py-8 flex flex-col justify-center sm:py-20">
      <div className="relative py-3 w-full sm:max-w-2xl sm:mx-auto">
        <div className="absolute inset-0 bg-stone-900 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="flex flex-col gap-16 items-center relative px-4 py-10 bg-gradient-to-t from-orange-100 to-[#f5f1e4] sm:rounded-3xl sm:p-28">
          <h3 className="text-stone-800 text-4xl font-IRANSans_Black">ورود </h3>
          <form action="" className="flex flex-col gap-8 w-full">
            <input
              type="text"
              className="p-6 rounded-full text-stone-800 shadow-lg focus:border-b-4 focus:border-stone-800 duration-200"
              placeholder="نام کاربری"
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />

            <input
              type="password"
              className="p-6 rounded-full text-stone-800 shadow-lg focus:border-b-4 focus:border-stone-800 duration-200"
              placeholder="رمز عبور"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <button
              className="w-full bg-stone-800 text-white rounded-full p-4 hover:bg-orange-300 hover:text-stone-800 duration-300"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "در حال ورود..." : "ورود"}{" "}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
          <div className="flex flex-col gap-4 text-xl text-stone-700 font-bold">
            <p className="flex items-center gap-4">
              اگر اکانت ندارید:
              <Link
                className="underline underline-offset-4 text-stone-400"
                to="/signup"
              >
                ثبت نام کنید.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
