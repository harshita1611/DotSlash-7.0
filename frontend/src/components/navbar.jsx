import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="20">
        <div className="flex justify-between pr-10 text-xl items-center h-28">
          <div>
            <Link to="/">
            <img src="./src/assets/navbar-logo.png" alt="logo" className="mt-9 -ml-10"/>
            </Link>
          </div>

          <div className="flex gap-10">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/predictor">Predict</Link>
            <Link to="/news">News</Link>
            <Link to="/news">Chatbot</Link>
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

