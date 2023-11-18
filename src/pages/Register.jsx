import React from "react";

const Register = () => {
  return (
    <div class="mt-8">
      <div class="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg border-slate-200 border md:mt-0 sm:max-w-md xl:p-0  ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign Up
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 outline-none"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 outline-none"
                  required
                />
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-sky-300 outline-none"
                    required
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label htmlhtmlFor="terms" class="font-light text-gray-500 ">
                    I accept the{" "}
                    <a
                      class="font-medium text-sky-600 hover:underline "
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-2 focus:outline-none focus:ring-sky-300 font-medium rounded text-sm px-5 py-2.5 text-center  "
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 ">
                Already have an account?{" "}
                <a
                  href="#"
                  class="font-medium text-sky-600 hover:underline"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
