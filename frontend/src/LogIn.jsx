import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
// import axios, {isCancel, AxiosError} from 'axios'/;
const LogIn = () => {
  const navigate = useNavigate()
  const [LogedIn, setLogedIn] = useState();
  // const [res , setres] = useState();
  const [error , seterror]= useState("")

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
    const responce =  await fetch("http://localhost:3000/login", {
      method : "POST",
      body : JSON.stringify(LogedIn),
      headers : {
        "content-type" : "application/json"
      },
    })
    let data = await  responce.json()
    console.log(data)
    if(data.success == false){
      console.log("just for cheking ")
      seterror(data.message)
     navigate('/LogIn');
    }
    else{
      navigate('/');
    }
  }
  
  return (
    <div>
      <div className="h-screen flex justify-center items-center signup">
        <div className="w-full max-w-xs">
          <form
            className=" rounded px-8 pt-6 pb-8 mb-4 z-40
            shadow-lg shadow-indigo-500/40 bg-slate-200 w-[23rem]
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-700"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              {/* <p>{res}</p> */}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-md font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-700"
                id="password"
                type="password"
                placeholder="******************"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-28 rounded-full focus:outline-none focus:shadow-outline text-md"
                type="submit"
              >
                Log In
              </button>
              {error && <div>{error}</div>}
            </div>
            <div>
              <p className="text-center mt-2">
                Don&#39;t have an account?{" "}
                <Link to={"/SignUp"} className="text-blue-600">
                  SignIn here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
