import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="mt-10 w-screen">
      <div className="flex flex-col items-center justify-center px-6 pt-12 pb-4 mx-auto ">
        <div className="w-full bg-white rounded-lg border-slate-200 border md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign Up
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 outline-none"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 outline-none"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded cursor-pointer bg-gray-50 focus:ring-3 focus:ring-sky-300 outline-none"
                    required
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the{" "}
                    <Link
                      to={"#"}
                      className="font-medium text-sky-600 hover:underline "
                      
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-2 focus:outline-none focus:ring-sky-300 font-medium rounded text-sm px-5 py-2.5 text-center  "
              >
                
                Create account
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-sky-600 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
