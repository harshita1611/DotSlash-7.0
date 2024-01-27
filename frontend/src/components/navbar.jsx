import React from "react";

function Navbar() {
  return (
    <>
      <div>
        <div className="flex justify-between p-7 pl-10 pr-10 text-xl">
          <div className="mt-2">Logo</div>

          <div className="flex gap-10 mt-2">
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
  )
}

export default Navbar;
