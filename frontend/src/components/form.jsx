import React from "react";
import { FaEye } from "react-icons/fa";


function SignupForm() {
  return (
    <form className="flex flex-col self-stretch items-stretch text-l font-medium my-auto md:w-1/2 mx-6">
      <header className="text-slate-950 text-2xl italic font-semibold max-md:max-w-full">
        ForeCost
      </header>
      <div className="text-black text-opacity-50 mt-14 max-md:max-w-full max-md:mt-10">
        Username
      </div>
      <div className="bg-indigo-600 shrink-0 h-[3px] mt-8 max-md:max-w-1/2" />
      <div className="text-black text-opacity-60 mt-12 max-md:max-w-full max-md:mt-10">
        Email Id
      </div>
      <div className="bg-blue-700 shrink-0 h-[3px] mt-11 max-md:max-w-full max-md:mt-10" />
      <div className="text-black text-opacity-60 mt-14 max-md:max-w-full max-md:mt-10">
        Password
      </div>
     <div className="aspect-[1.37] object-contain object-center w-[26px] fill-slate-950 mt-3.5 self-end">
        <FaEye/>
     </div>
      <div className="bg-blue-700 shrink-0 h-[3px] mt-2 max-md:max-w-full" />
      <button
        type="submit"
        className="text-white text-2xl font-medium whitespace-nowrap bg-slate-950 justify-center items-center mt-16 px-16 py-4 rounded-[30px] border-[3px] border-solid border-white max-md:max-w-full max-md:mt-10 max-md:px-5"
      >
        Sign Up
      </button>
      <div className="text-black text-center text-2xl font-semibold self-center mt-7">
        OR
      </div>
      <div className="bg-white border flex flex-col justify-center items-center mt-6 px-16 py-4 rounded-[200px] border-solid border-black max-md:max-w-full max-md:px-5">
        <div className="flex items-stretch justify-between gap-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4a1ab9307bec6df9159991c5cd0b57b95b66a334ba9b6d89e6b26b27f066237c?apiKey=dac0baeece5a4c59991915a9e059443c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a1ab9307bec6df9159991c5cd0b57b95b66a334ba9b6d89e6b26b27f066237c?apiKey=dac0baeece5a4c59991915a9e059443c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a1ab9307bec6df9159991c5cd0b57b95b66a334ba9b6d89e6b26b27f066237c?apiKey=dac0baeece5a4c59991915a9e059443c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a1ab9307bec6df9159991c5cd0b57b95b66a334ba9b6d89e6b26b27f066237c?apiKey=dac0baeece5a4c59991915a9e059443c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a1ab9307bec6df9159991c5cd0b57b95b66a334ba9b6d89e6b26b27f066237c?apiKey=dac0baeece5a4c59991915a9e059443c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a1ab9307bec6df9159991c5cd0b57b95b66a334ba9b6d89e6b26b27f066237c?apiKey=dac0baeece5a4c59991915a9e059443c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a1ab9307bec6df9159991c5cd0b57b95b66a334ba9b6d89e6b26b27f066237c?apiKey=dac0baeece5a4c59991915a9e059443c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a1ab9307bec6df9159991c5cd0b57b95b66a334ba9b6d89e6b26b27f066237c?apiKey=dac0baeece5a4c59991915a9e059443c&"className="aspect-[0.94] object-contain object-center w-8 shrink-0"
            alt="Google Logo"
          />
          <div className="text-black text-center text-xl font-semibold grow shrink basis-auto mt-3.5 self-start">
            Sign in with Google
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;