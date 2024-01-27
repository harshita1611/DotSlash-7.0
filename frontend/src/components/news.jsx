import React from "react";
import Navbar from "../components/navbar";

function News() {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
      <>
      <Navbar/>
      <div className="bg-black flex flex-col items-stretch px-8 py-5 rounded max-md:max-w-full max-md:px-5 w-1/2">
      <header className="header self-center flex w-[477px] max-w-full flex-col items-stretch px-px">
        <button
          className="text-black text-opacity-60 text-lg font-bold bg-zinc-300 justify-center pl-6 pr-16 py-3.5 rounded-3xl items-start max-md:max-w-full max-md:px-5"
          onClick={handleButtonClick}
          >
          Sensex
        </button>
      </header>
    </div>
</>
  );
}

export default News;