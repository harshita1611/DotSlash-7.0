import React from "react";

function Navbar() {
  return (
    <>
      <div className="20">
        <div className="flex justify-between pr-10 text-xl items-center h-28">
          <div>
            <img src="./src/assets/navbar-logo.png" alt="logo" className="mt-9 -ml-10"/>
          </div>

          <div className="flex gap-10">
            <div>Home</div>
            <div>Predict</div>
            <div>Contact Us</div>
            <div>Resources</div>
          </div>
          
          <div className="bg-black text-white p-2 pl-3 pr-4 rounded-3xl">
            Get Started
          </div>
        </div>
        <hr className="border-black opacity-25"></hr>
      </div>
    </>
  );
}

export default Navbar;

