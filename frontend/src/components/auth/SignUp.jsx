import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useGlobalContext } from "../context/GlobalContext";
import Loader from "../../utils/Loader"
import Aos from "aos";

const SignUp = () => {
  let [Formdata, setFormdata] = useState({});
  const [show, setshow] = useState(false);
  const { SignUpUser, message, signuploading } = useGlobalContext();
  const navigate = useNavigate()

  useEffect(() => {
    Aos.init({
        duration: "1500",
        delay: 500,
    });
}, []);
  if (message) {
    navigate("/")
  }

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

    if (name === "avatar") {
      val = e.target.files[0];
    }

    setFormdata({
      ...Formdata,
      [name]: val,
    });
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let key in Formdata) {
      formData.append(key, Formdata[key]);
    }
    SignUpUser(formData)
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row px-5 pt-5 paramain">

        <div className="hidden lg:flex flex-col gap-2 w-2/5  pt-10 pl-16" data-aos="fade-right">
          <h1 className="text-5xl font-semibold text-blue-500">Create  Account with Money Tracker
          </h1>
          <p className="text-lg font-medium text-[#75838f]">Join and gain access to your personalized financial dashboard. Start tracking your expenses, managing your budget, and uncovering insights into your spending habits. </p>
          <img src="signup.avif" alt="" width={320} />
        </div>

        <div className="md:w-full lg:w-3/5 px-4 md:px-0 pt-2" data-aos="fade-left">
          <form
            className="max-w-sm mx-auto"
            onSubmit={SubmitForm}
            encType="multipart/form-data"
          >
            <h1 className="text-3xl font-semibold pb-2">Sign up to Expense Tracker</h1>
            <div className="mb-2">
              <label
                className="block text-md font-medium mb-2 ml-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="appearance-none border rounded-3xl w-full py-3 px-5"
                id="username"
                type="text"
                onChange={HandleForm}
                name="username"
              />
            </div>

            <div className="mb-2">
              <label
                className="block text-md font-medium mb-2 ml-2"
                htmlFor="avatar"
              >
                Upload Profile
              </label>
              <input
                className="appearance-none border rounded-3xl w-full py-3 px-5"
                id="avatar"
                type="file"
                placeholder="Profile"
                onChange={HandleForm}
                name="avatar"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-md font-medium mb-2 ml-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded-3xl w-full py-3 px-5"
                id="email"
                type="email"
                onChange={HandleForm}
                name="email"
              />
            </div>

            <div className="mb-2 relative">
              <label
                className="block text-gray-700 text-md font-medium mb-1
                ml-2"
                htmlFor="password"
              >
                Your Password
              </label>
              <input
                className="appearance-none border rounded-3xl w-full py-3 px-5"
                id="password"
                type={show ? "text" : "password"}
                placeholder="6+ Characters"
                onChange={HandleForm}
                name="password"
                autoComplete="current-password"
              />
              <span
                className="cursor-pointer absolute right-5 bottom-10"
                onClick={passwordshow}
              >
                {show ? (
                  <VisibilityIcon className="text-slate-500" />
                ) : (
                  <VisibilityOffIcon className="text-slate-500" />
                )}
              </span>
              <p className="text-sm text-end m-2">
                <Link to="/Forgetpassword" className="text-blue-700 underline">
                  Forgot your password?{" "}
                </Link>
              </p>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 w-full rounded-full focus:outline-none focus:shadow-outline text-md mt-4"
                type="submit"
              >
                {signuploading ? <Loader /> : "Create Account"}
              </button>
            </div>
            <div className="text-blue-700">
              <p className="text-center mt-5 text-sm"> Already have an account?
                <Link
                  to={"/LogIn"}
                  className="underline">
                  Sign In
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




