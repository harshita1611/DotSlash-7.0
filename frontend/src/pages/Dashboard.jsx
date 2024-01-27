import React from "react";
import { useState,useEffect } from "react";
function Dashboard(){

    // fetch top gainers and loosers from backend
    const [userName, setUserName] = useState("");
    const [topGainerList, setTopGainerList] = useState([]);
    const [topLoserList, setTopLoserList] = useState([]);

    useEffect(() => {
    }, []);
    return(
        <>
            
        </>
    )
}

export default Dashboard;