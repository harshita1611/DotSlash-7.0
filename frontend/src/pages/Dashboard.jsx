import React, { useState, useEffect } from "react";
import Graph from "../components/Graph";
import Navbar from "../components/navbar";
import Typist from "react-typist";

function Dashboard() {
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);
  const [selectedCSV, setSelectedCSV] = useState("");

  useEffect(() => {
    fetchTopGainersAndLosers();
  }, []);

  const fetchTopGainersAndLosers = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/user/dashboard?csv=${selectedCSV}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setTopGainers(data.topGainers || []);
      setTopLosers(data.topLosers || []);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  const handleCSVSelect = (csv) => {
    setSelectedCSV(csv);
  };

  const handleButtonClick = () => {
    window.location.href = "/news";
  }

  return (
    <div>
      <Navbar />
      <div className="flex gap-10 p-5">
        <div style={{ flex: "60%" }}>
          <div>
            <h2 className="text-5xl">Select Your Choice Of Stock </h2>
            <Typist>
              <p className="text-lg font-light opacity-80">
                We are here for you! Here are your choice of stocks:
              </p>
            </Typist>

            <div>
              <button
                onClick={() => handleCSVSelect("AAPL")}
                className="p-2 rounded-md mr-2  border-solid border-2 border-black transform transition-transform hover:-translate-y-1 active:-translate-y-2 "
              >
                Apple
              </button>
              <button
                onClick={() => handleCSVSelect("ADANIGREEN")}
                className="p-2 rounded-md mr-2 border-solid border-2 border-black ml-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2 "
              >
                Adani Green
              </button>
              <button
                onClick={() => handleCSVSelect("ADANIPOWER")}
                className="p-2 rounded-md mr-2 border-solid border-2 border-black ml-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                Adani Power
              </button>
              <button
                onClick={() => handleCSVSelect("APOLLOHOSP")}
                className="p-2 rounded-md mr-2 border-solid border-2 border-black ml-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                Apollo Hospitals
              </button>
              <button
                onClick={() => handleCSVSelect("HDFCBANK")}
                className="p-2 rounded-md mr-2 border-solid border-2 border-black ml-5 mt-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                HDFC bank
              </button>
              <button
                onClick={() => handleCSVSelect("HINDUNILVR")}
                className="p-2 rounded-md mr-2 border-solid border-2 border-black ml-5 mt-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                Hindustan Uniliver
              </button>
              <button
                onClick={() => handleCSVSelect("INFOSYS")}
                className="p-2 rounded-md mr-2 border-solid border-2 border-black ml-5 mt-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                Infosys
              </button>
              <button
                onClick={() => handleCSVSelect("IRCTC")}
                className="p-2 rounded-md mr-2 border-solid border-2 border-black ml-5 mt-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                IRCTC
              </button>
              <button
                onClick={() => handleCSVSelect("MSFT")}
                className="p-2 rounded-md mr-2 border-solid border-2 border-black mt-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                Microsoft
              </button>
              <button
                onClick={() => handleCSVSelect("NFLX")}
                className="p-2 rounded-md mr-2 border-solid border-2 border-black ml-5 mt-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                Netflix
              </button>
              <button
                onClick={() => handleCSVSelect("ONGC")}
                className="p-2 rounded-md mr-2 border-solid border-2 border-black ml-5 mt-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                ONGC
              </button>
              <button
                onClick={() => handleCSVSelect("RELIANCE")}
                className="p-2 rounded-md mr-2 border-solid border-2 border-black ml-5 mt-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                RELIANCE
              </button>
              <button
                onClick={() => handleCSVSelect("SBIN")}
                className="p-2 rounded-md  border-solid border-2 border-black ml-5 mt-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                SBI
              </button>
              <button
                onClick={() => handleCSVSelect("TCS")}
                className="p-2 rounded-md  border-solid border-2 border-black ml-5 mt-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                TCS
              </button>
              <button
                onClick={() => handleCSVSelect("TECHM")}
                className="p-2 rounded-md  border-solid border-2 border-black ml-5 mt-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                Tech Mahindra
              </button>
              <button
                onClick={() => handleCSVSelect("ZYDUSLIFE")}
                className="p-2 rounded-md  border-solid border-2 border-black ml-5 mt-5 transform transition-transform hover:-translate-y-1 active:-translate-y-2"
              >
                Zydus Life
              </button>
            </div>
          </div>
          <Graph selectedTicker={selectedCSV || "AAPL"} />
        </div>
        <div style={{ flex: "1" }}>
        <h2 className="text-2xl font-semibold mb-4">Top Gainers</h2>
          <div className="flex gap-4">
            {topGainers.slice(0, 2).map((gainer, index) => (
              <div key={index} className="bg-green-200 p-4 rounded-md w-32">
                <p className="font-semibold">{gainer.ticker}</p>
                <p>Price: {gainer.price}</p>
                <p className="font-light">Change: {gainer.change_percentage}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-semibold mb-4 mt-5">Top Losers</h2>
          <div className="flex gap-4">
            {topLosers.slice(0, 2).map((loser, index) => (
              <div key={index} className="bg-red-200 p-4 rounded-md w-32">
                <p className="font-semibold">{loser.ticker}</p>
                <p>Price: {loser.price}</p>
                <p className="font-light">Change: {loser.change_percentage}</p>
              </div>
            ))}
          </div>
          <h2 className="mt-4 text-2xl font-semibold mb-4">Want news upadtes?</h2>
          <div className="flex gap-4">
            <div>
              <p className="opacity-90 font-regular">
               Nearly 30 companies have already received a green signal from the regulator, aimed at raising over Rs 30,000 crore. Meanwhile, about 40 other companies have submitted their DRHPs for approval.
              </p>

              <button className="bg-blue-200 p-4 rounded-2xl mt-5" onClick={handleButtonClick}>
                {" "}
                Check all upadtes

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default Dashboard;
