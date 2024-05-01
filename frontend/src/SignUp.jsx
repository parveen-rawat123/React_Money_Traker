import { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
const SignUp = () => {
  let [Formdata, setFormdata] = useState({});
  const HandleForm = (e) => {
    let val = e.target.value;
    let name = e.target.name;
    setFormdata({
      ...Formdata,
      [name]: val,
    });
  };

  const SubmitForm = async (e) => {
    //     const {username , email , password} = Formdata
    //     if(username === ""){
    //  alert("please enter your name")
    //     }else if(email === ""){
    //       alert("plese enter email")
    //     }

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
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center signup">
        <div className="w-full max-w-xs">
          <form
            className="rounded px-8 pt-6 pb-8 mb-4 z-40
            shadow-lg shadow-indigo-500/40 bg-slate-200 w-[23rem]
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-700"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-700"
                id="email"
                type="email"
                placeholder="Email"
                onChange={HandleForm}
                name="email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-md font-medium mb-1"
                htmlFor="password"
              >
                Your Password
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-700"
                id="password"
                type="password"
                placeholder="******************"
                onChange={HandleForm}
                name="password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-28 rounded-full focus:outline-none focus:shadow-outline text-md"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div>
              <p className="text-center mt-2">
                Already have an account?
                <Link to={"/LogIn"} className="text-blue-600">
                  {" "}
                  Login here
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
