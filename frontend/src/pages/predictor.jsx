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
        <div className="w-1/4 p-4 bg-black h-[712px]">
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
          <h2 className="text-lg font-semibold mb-4 text-white mt-4">Communities</h2>
          <ul>
            {/* List of communities */}
            <li className="mb- text-white">Community 1</li>
            <li className="mb-2 text-white">Community 2</li>
            <li className="mb-2 text-white">Community 3</li>
            {/* Add more communities */}
          </ul>
        </div>
        {/* Right panel */}
        <div className="w-3/4 p-4">
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              placeholder="Enter company name"
              className="border border-gray-300 rounded p-2 mr-2"
              value={companyName}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
          {/* Display prediction */}
          {prediction && (
            <div className="border border-gray-300 rounded p-4">
              <h2 className="text-lg font-semibold mb-2">Prediction</h2>
              <p>Current Stock Price: {prediction["Current Stock Price"]}</p>
              <p>
                Predicted Stock Price: {prediction["Predicted Stock Price"]}
              </p>
              {/* Display additional prediction data */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Predictor;
