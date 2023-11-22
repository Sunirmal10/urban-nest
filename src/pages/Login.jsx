import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div class=" mt-8">
    <div class="flex flex-col items-center justify-center px-6 py-10 mx-auto h-full">
                <div class="w-full bg-white rounded border-slate-200 border  md:mt-0 sm:max-w-md xl:p-0  ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded  outline-none focus:ring-green-700 focus:border-green-700 block w-full p-2.5" placeholder="name@example.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-green-700  outline-none focus:border-green-700 block w-full p-2.5" required />
                    </div>
                    <div class="flex items-center justify-start">
                        {/* <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-700" required />
                            </div>
                            <div class="ml-3 text-sm">
                              <label htmlFor="remember" class="text-gray-500 ">Remember me</label>
                            </div>
                        </div> */}
                        <a href="#" class="text-sm font-medium text-green-700 hover:underline ">Forgot password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-700 font-medium rounded text-sm px-5 py-2.5 text-center">Sign in</button>
                    <p class="text-sm font-light text-gray-500 ">
                        Don’t have an account yet? <Link to={"/register"} class="font-medium text-green-700 hover:underline ">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Login
