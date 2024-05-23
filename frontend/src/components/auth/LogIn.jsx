import { Link, NavLink, useNavigate} from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { toast } from "react-toastify";
// import Loader from "./assets/Loader"
const LogIn = () => {
  const navigate = useNavigate();
  const [LogedIn, setLogedIn] = useState();
  const [showpassword, setshowpassword] = useState(false);
  const [loader , setloader] = useState(false)

  const passwordshow = () => {
    if (showpassword === false) {
      setshowpassword(true);
    } else {
      setshowpassword(false);
    }
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
    const responce = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(LogedIn),
      headers: {
        "content-type": "application/json",
      },
    });
    
    let data = await responce.json();
    console.log(data);
    console.log("responce", responce)
    if (responce.status === 201) {
      setloader(true)
      // toast.success(data.message);
      toast.success("You are LogedIn");
      navigate("/");
    } else if (responce.status === 401) {
      toast.error(data.error);
    } else if (responce.status === 400) {
      toast.info(data.error);
    } else if (responce.status === 501) {
      toast.error(data.error);
    } else if (responce.status === 502) {
      toast.error(data.error);
    }
  };
 
  return (
    <div>
      <div className="h-screen flex justify-center items-center signup">
        <div className="w-full max-w-xs mr-10">
          <form
            className=" rounded px-8 pt-6 pb-8 mb-4 z-40
            shadow-lg shadow-indigo-500/40 bg-slate-200 w-[25rem]
            "
            onSubmit={handlesubmit}
          >
            <div className="text-end">
              <Link to={"/"}>
                <CloseIcon />
              </Link>
            </div>
            <div className="mb-3">
              <h1 className="text-[2.1rem] font-semibold">
                Existing Customers
              </h1>
              <h3 className="text-[1.3rem] font-medium">Login Into FinTrack</h3>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className=" appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-700"
                id="email"
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-gray-700 text-md font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className=" appearance-none border  r w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-700"
                id="password"
                type={showpassword ? "text" : "password"}
                placeholder="********"
                name="password"
                onChange={handleChange}
              />
              <span
                className="cursor-pointer absolute right-1 bottom-3  p-[0.39rem]"
                onClick={passwordshow}
              >
                {" "}
                {showpassword ? (
                  <VisibilityIcon className="text-slate-500"/>
                ) : (
                  <VisibilityOffIcon className="text-slate-500"/>
                )}{" "}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded-full focus:outline-none focus:shadow-outline text-md"
                type="submit">
                  {loader ? <Loader/> : ''}
                Login
              </button>
            </div>
            <div className="flex justify-between ">
              <p className="text-center mt-5 text-sm">
                <NavLink to="/SignUp" className="text-blue-700 hover:underline">
                  Create Account
                </NavLink>
              </p>
              <p className="text-sm mt-5">
                <NavLink to="" className="text-blue-700 hover:underline">
                  Forgot your password?
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
