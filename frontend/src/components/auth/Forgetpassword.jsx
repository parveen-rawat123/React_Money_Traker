import { useState } from "react";
import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Loader from "../../utils/Loader"
 const Forgetpassword = () => {
  const { ForgetPassword, changepassLoading } = useGlobalContext()
  const [LogedIn, setLogedIn] = useState();
  const [showpassword, setshowpassword] = useState(false);


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
    console.log(LogedIn)
    e.preventDefault();
    ForgetPassword(LogedIn)
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row p-5 paramain">
        <div className="hidden lg:flex flex-col gap-2 w-2/5 pt-10 pl-16">
          <h1 className="text-5xl font-semibold text-blue-500">Enhance Your Account Security
          </h1>
          <p className="text-lg font-medium text-[#75838f]">Regularly updating your password helps protect your financial information. Ensure your account remains secure by changing your password now.
          </p>
          <img src="change pass.avif" alt="" width={320} />
        </div>

        <div className="md:w-full lg:w-3/5 px-4 md:px-0 pt-10">
          <form className="max-w-sm mx-auto" onSubmit={handlesubmit}>
            <h1 className="text-3xl font-semibold pb-8">Change Password</h1>

            <div className="mb-4">
              <label className="block text-md font-medium mb-2 ml-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none border rounded-3xl w-full py-3 px-5"
                id="email"
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={handleChange}
                autoComplete="current-password"
              />
            </div>

            <div className="relative mb-4">
              <label className="block text-md font-medium mb-2 ml-2" htmlFor="new-password">
                New Password
              </label>
              <input
                className="appearance-none border rounded-3xl w-full py-3 px-5"
                id="new-password"
                type={showpassword ? "text" : "password"}
                placeholder="6+ Characters"
                name="newPassword"
                onChange={handleChange}
                autoComplete="current-password"
              />
              <span
                className="cursor-pointer absolute right-5 bottom-4"
                onClick={passwordshow}
              >
                {showpassword ? <VisibilityIcon className="text-slate-500" /> : <VisibilityOffIcon className="text-slate-500" />}
              </span>
            </div>

            <div className="relative mb-4">
              <label className="block text-md font-medium mb-2 ml-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                className="appearance-none border rounded-3xl w-full py-3 px-5"
                id="confirm-password"
                type={showpassword ? "text" : "password"}
                placeholder="6+ Characters"
                name="confirmPassword"
                onChange={handleChange}
                autoComplete="current-password"
              />
              <span
                className="cursor-pointer absolute right-5 bottom-4"
                onClick={passwordshow}
              >
                {showpassword ? <VisibilityIcon className="text-slate-500" /> : <VisibilityOffIcon className="text-slate-500" />}
              </span>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 w-full rounded-full focus:outline-none focus:shadow-outline text-md mt-1"
                type="submit"
              >
                {changepassLoading ? <Loader/> : "Submit"}
              </button>
            </div>

            <div className="text-center mt-5 text-sm">
              <Link to="/LogIn" className="text-blue-700 underline">
                Sign in with your account
              </Link>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Forgetpassword
