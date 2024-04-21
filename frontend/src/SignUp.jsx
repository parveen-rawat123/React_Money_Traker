import { useState } from "react";
import { Link } from "react-router-dom";
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

  const SubmitForm =  async (e) => {
    e.preventDefault();
  const responce = await fetch('http://localhost:3000/demo', {
    method : 'POST',
    body :JSON.stringify(Formdata),
    headers :{
      'content-type' : 'application/json'
    }
  })
  let data =  await responce.json()
  console.log(data)
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-slate-500">
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 z-40"
            onSubmit={SubmitForm}
          >
            <p className="text-end">
              <Link to="/">X</Link>
            </p>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
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
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
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
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
