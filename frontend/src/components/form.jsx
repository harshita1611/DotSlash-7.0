import React from "react";
import { FaEye } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


function SignupForm() {
  return (
    <form className="flex flex-col self-stretch items-stretch text-l font-medium mx-6 w-1/2">
      <header className="text-slate-950 text-3xl italic font-semibold">
        ForeCost
      </header>
      <div className="shadow-slate-800">
      <div className="text-black text-opacity-50 mt-14 text-xl ">
        Username
      </div>
      <div className="bg-indigo-600 shrink-0 h-[3px] mt-8" />
      <div className="text-black text-opacity-60 mt-12 ">
        Email Id
      </div>
      <div className="bg-blue-700 shrink-0 h-[3px] mt-11 " />
      <div className="text-black text-opacity-60 mt-14 ">
        Password
      </div>
     <div className="aspect-[1.37] object-contain object-center w-[26px] fill-slate-950 mt-3.5 self-end">
        <FaEye/>
     </div>
      <div className="bg-blue-700 shrink-0 h-[3px] mt-2" />
      <button
        type="submit"
        className="text-white text-2xl font-medium whitespace-nowrap bg-slate-950 justify-center items-center mt-16 px-16 py-4 rounded-[30px] border-[3px] border-solid border-white"
      >
        Sign Up
      </button>
      <div className="text-black text-center text-2xl font-semibold self-center mt-7">
        OR
      </div>
      <div className="bg-white border flex flex-col justify-center items-center mt-6 px-16 py-4 rounded-[200px] border-solid border-black max-md:px-5">
        <div className="flex items-stretch justify-between gap-5">
        <div className="aspect-[1.37] object-contain object-center w-[26px] fill-slate-950 mt-3.5 self-end">
        <FaGoogle />
     </div>
          <div className="text-black text-center text-xl font-semibold grow shrink basis-auto mt-3.5 self-start">
            Sign in with Google
          </div>
        </div>
      </div>
      </div>
    </form>
  );
}

export default SignupForm;