import { Link } from "react-router-dom";
const LogIn = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-slate-300">
        <div className="w-full max-w-xs">
          <form
            className="bg-white  rounded px-8 pt-6 pb-8 mb-4 z-40
            shadow-lg shadow-indigo-500/40
            "
            
          >
            <p className="text-end">
              <Link to="/">X</Link>
            </p>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
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
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
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
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-full focus:outline-none focus:shadow-outline text-md"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div>
              <p>
              Don't have an account? <Link to={"/SignUp"} className="text-blue-600"> Sign up here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
