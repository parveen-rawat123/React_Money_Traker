import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const SignUp = () => {
  let [Formdata, setFormdata] = useState({});
  const navigate = useNavigate();
  const [show, setshow] = useState(false);

  const passwordshow = () => {
    if (show === false) {
      setshow(true);
    } else {
      setshow(false);
    }
  };

  const HandleForm = (e) => {
    let val = e.target.value;
    let name = e.target.name;
    setFormdata({
      ...Formdata,
      [name]: val,
    });
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    const responce = await fetch("http://localhost:3000/signUp", {
      method: "POST",
      body: JSON.stringify(Formdata),
      headers: {
        "content-type": "application/json",
      },
    });
    let data = await responce.json();
    console.log(data);
    if (responce.status === 201) {
      navigate("/");
      toast.success("you are successfully registered");
    } else if (responce.status === 400) {
      toast.info(data.error);
    } else if (responce.status === 409) {
      toast.info(data.error);
      navigate("/LogIn");
    } else if (responce.status === 500) {
      toast.error(data.error);
    } else {
      toast.error("Unexpected error occurred");
    }
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center signup">
        <div className="w-full max-w-xs">
          <form
            className="rounded px-8 pt-6 pb-8 mb-4 z-40 
            shadow-lg shadow-indigo-500/40 bg-slate-200 w-[25rem]
            "
            onSubmit={SubmitForm}
          >
            <div className="text-end">
              <Link to="/">
                <CloseIcon />
              </Link>
            </div>
            <div className="mb-3">
              <h1 className="text-[2.1rem] font-semibold">New Customers</h1>
              <h3 className="text-[1.3rem] font-medium">Sign Into FinTrack</h3>
              {/* {data && <p> you are resiter</p>} */}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-medium mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className=" appearance-none border   w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-black"
                id="username"
                type="text"
                placeholder="Username"
                onChange={HandleForm}
                name="username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-medium mb-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="appearance-none border  w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-blue-500 focus:border-black"
                id="email"
                type="email"
                placeholder="Email"
                onChange={HandleForm}
                name="email"
              />
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-gray-700 text-md font-medium mb-1"
                htmlFor="password"
              >
                Your Password
              </label>
              <input
                className=" appearance-none border w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:ring-blue-500 focus:border-black"
                id="password"
                type={show ? "text" : "password"}
                placeholder="******************"
                onChange={HandleForm}
                name="password"
              />
              <span
                className="cursor-pointer absolute right-1 bottom-3  p-[0.39rem]" 
                onClick={passwordshow}
              >
                {" "}
                {show ? (
                  <VisibilityIcon className="text-slate-500" />
                ) : (
                  <VisibilityOffIcon className="text-slate-500" />
                )}{" "}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded-full focus:outline-none focus:shadow-outline text-md"
                type="submit"
              >
                Sign up
              </button>
            </div>
            <div className="flex justify-between">
              <p className="text-center mt-5">
                <Link
                  to={"/LogIn"}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Sign in with your account
                </Link>
              </p>
              <p className="mt-5">
                <Link to="" className="text-sm  hover:underline text-blue-600">
                  Forgot your password?{" "}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
