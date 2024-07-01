import { Link, NavLink, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Loader from "../../utils/Loader";
import Aos from "aos";

const LogIn = () => {
  const { loginUser, message, loginloading } = useGlobalContext();
  const navigate = useNavigate();
  const [LogedIn, setLogedIn] = useState();
  const [showpassword, setshowpassword] = useState(false);

  useEffect(() => {
    Aos.init({
        duration: "1500",
        delay: 500,
    });
}, []);


  if (message) {
    navigate("/");
  }

  const passwordshow = () => {
    setshowpassword(!showpassword);
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setLogedIn({
      ...LogedIn,
      [name]: val,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    loginUser(LogedIn);
  };

  return (
    <div className="flex flex-col lg:flex-row p-5 paramain">
      <div className="hidden lg:flex flex-col gap-2 w-2/5  pt-10 pl-16"
      data-aos="fade-right"
      >
        <h1 className="text-5xl font-semibold text-blue-500">Welcome Back to Money Tracker</h1>
        <p className="text-lg font-medium text-[#75838f]">Sign up to your personalized financial dashboard to track expenses, manage your budget, and gain insights into your spending. now to start taking control of your finances.</p>
        <img src="login.avif" alt="" width={320} />
      </div>

      <div className="md:w-full lg:w-3/5 px-4 md:px-0 pt-10" data-aos="fade-left">
        <form className="max-w-sm mx-auto" onSubmit={handlesubmit}>
          <h1 className="text-3xl font-semibold pb-8">Sign in to Expense Tracker</h1>
          
          <div className="mb-4">
            <label className="block text-md font-medium mb-2 ml-2" htmlFor="email">
              Username or Email
            </label>
            <input
              className="appearance-none border rounded-3xl w-full py-3 px-5"
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>

          <div className="mb-6 relative">
            <label className="block text-gray-700 text-md font-medium  mb-1 ml-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded-3xl w-full py-3 px-5"
              id="password"
              type={showpassword ? "text" : "password"}
              placeholder="6+ Characters"
              name="password"
              onChange={handleChange}
              autoComplete="current-password"
            />
            <span
              className="cursor-pointer absolute right-5 bottom-10"
              onClick={passwordshow}
            >
              {" "}
              {showpassword ? <VisibilityIcon className="text-slate-500" /> : <VisibilityOffIcon className="text-slate-500" />}
            </span>
            <p className="text-sm text-end m-2">
              <NavLink to="/Forgetpassword" className="text-blue-700 underline">
                Forgot your password?
              </NavLink>
            </p>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 w-full rounded-full focus:outline-none focus:shadow-outline text-md mt-1"
              type="submit"
            >
              {loginloading ? <Loader /> : "Sign In "}
            </button>
          </div>
          <div className=" text-blue-700">
            <p className="text-center mt-5 text-sm">Don&apos;t have an account?
              <Link to="/SignUp" className="underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
