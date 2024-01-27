import React from "react";

function Navbar() {
  return (
    <header className="bg-white px-16 py-8 max-md:px-5">
      <nav className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[74%] max-md:w-full max-md:ml-0 -mr-96">
          <div className="flex items-center justify-center gap-8 text-3xl text-black font-medium tracking-tighter my-auto max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Predict
            </a>
            <a href="#" className="nav-link">
              Contact Us
            </a>
            <a href="#" className="nav-link">
              Resources
            </a>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-max ml-5 max-md:w-full max-md:ml-0 ">
          <button
            className="text-white text-2xl font-bold whitespace-nowrap bg-black grow justify-center items-stretch w-max px-7 py-5 rounded-[30px] max-md:mt-10 max-md:px-5 ml-96"
            aria-label="Get Started Button"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
