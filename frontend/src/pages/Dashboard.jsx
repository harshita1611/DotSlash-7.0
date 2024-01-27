import React, { useState, useEffect } from "react";
import Graph from '../components/Graph'
import Navbar from "../components/navbar";

function Dashboard() {
   
    const [topGainers, setTopGainers] = useState([]);
    const [topLosers, setTopLosers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/user/dashboard")
            .then(response => response.json())
            .then(data => {
                if (data && data.topGainersList && data.topLosersList) {
                    setTopGainers(data.topGainersList);
                    setTopLosers(data.topLosersList);
                }
            })
            .catch(error => console.error("Error fetching dashboard data:", error));
    }, []);

    return (
        <div>
            <Navbar/>
            <div className="flex gap-10 p-5">
                <div style={{ flex: '60%' }}>
                    <Graph/>
                </div>
                <div style={{ flex: '1' }}>
                    <h2>Top Gainers</h2>
                    <ul>
                        {topGainers && topGainers.map((gainer, index) => (
                            <li key={index}>{gainer.ticker}: [{gainer.price}, {gainer.change_percentage}] </li>
                        ))}
                    </ul>
                    <h2>Top Losers</h2>
                    <ul>
                        {topLosers && topLosers.map((loser, index) => (
                            <li key={index}>{loser.ticker}: {loser.price}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
