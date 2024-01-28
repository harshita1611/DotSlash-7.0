import React, { useState } from "react";
import Navbar from "../components/navbar";


function Predictor() {
  const [companyName, setCompanyName] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/api/model/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file: `./${companyName}.csv` }), // Correct format for file name
      });

      if (response.ok) {
        console.log("File name submitted successfully");
        const data = await response.json();
        setPrediction(data.prediction);
      } else {
        console.error("Failed to submit file name");
        setError("Failed to submit file name");
      }
    } catch (error) {
      console.error("Error submitting file name:", error);
      setError("Error submitting file name");
    }
  };

  const handleChange = (e) => {
    setCompanyName(e.target.value);
  };
  const handleChatbotClick = () => {
    window.location.href = "/news";
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        {/* Left panel */}
        <div className="w-1/4 p-4 bg-gray-500 h-[712px]">
          <h2 className="text-white">
            "Lost the ticker? AI chatbot's got you covered! Ask away, we'll find
            it for you."
            <br/>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-6 "
              onClick={handleChatbotClick}
            >
              Chatbot
            </button>
          </h2>
          <hr className="border-white my-5 w-full mt-8" />
          <h2 className="text-lg font-regular mb-4 text-white mt-4">Communities</h2>
          <ul className="opacity-70">
            <li className="mb-2 text-white">
                <a href="https://www.reddit.com/r/stocks/">r/stocks</a>
            </li>
            <li className="mb-2 text-white mt-3">
            <a href="https://www.reddit.com/r/StockMarket/">r/StockMarket</a>
            </li>
            <li className="mb-2 text-white mt-3">
            <a href="https://www.reddit.com/r/Stock_Picks/">r/Stock_Picks</a>
            </li>
            <li className="mb-2 text-white mt-3">
            <a href="https://www.reddit.com/r/StocksAndTrading/">r/StocksAndTrading</a>
            </li>
          </ul>
          <hr className="border-white my-5 w-full mt-8" />
        </div>
        {/* Right panel */}

        <div className="w-3/4 p-4 relative bg-black">
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              placeholder="Enter company name"
              className=" border-black border-2 rounded absolute inset-x-0 bottom-3 w-[80%] h-10 ml-14"
              value={companyName}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded absolute bottom-3 right-4 w-24 border-blue-500 border-2"
            >
              Submit
            </button>
          </form>
          {prediction && (
            <div className="border border-gray-300 rounded p-4 text-white">
              <h2 className="text-lg font-semibold mb-2">Prediction</h2>
              <p>Current Stock Price: {prediction["Current Stock Price"]}</p>
              <p>
                Predicted Stock Price: {prediction["Predicted Stock Price"]}
              </p>
              <p>Action: {prediction.Action}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Predictor;
