import React, { useState, useEffect } from "react";
import Graph from '../components/Graph'

function Dashboard() {
    const [topGainers, setTopGainers] = useState([]);
    const [topLosers, setTopLosers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/user/dashboard")
            .then(response => response.json())
            .then(data => {
                setTopGainers(data.topGainers);
                setTopLosers(data.topLosers);
            })
            .catch(error => console.error("Error fetching dashboard data:", error));
    }, []);

    return (
        <div>
            <Graph/>
            <h2>Top Gainers</h2>
            <ul>
                {topGainers.map((gainer, index) => (
                    <li key={index}>{gainer.ticker}: [{gainer.price}, {gainer.change_percentage}] </li>
                ))}
            </ul>
            <h2>Top Losers</h2>
            <ul>
                {topLosers.map((loser, index) => (
                    <li key={index}>{loser.ticker}: {loser.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
