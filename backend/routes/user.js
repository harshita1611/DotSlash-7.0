const express = require("express");
const supabase = require("../supabase");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { z } = require("zod");

const app = Router();
app.use(express.json());

// app.post("/register", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const { data, error } = await supabase
//       .from("Users")
//       .insert([{ username, email, password }]);
//     if (error) {
//       console.error("Error saving user data to Supabase:", error.message);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }

//     console.log("User data saved to Supabase:", data);
//     res.status(200).json({ msg: "User registration successful" });
//   } catch (error) {
//     console.error("Exception during user registration:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


app.post("/register", async (req, res) => {
  try {
    const { username, email, password, contact, address, age } = req.body;
    const { data, error } = await supabase
      .from("Users")
      .insert([{ username, email, password, contact, address, age }]);
    if (error) {
      console.error("Error saving user data to Supabase:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    console.log("User data saved to Supabase:", data);
    res.status(200).json({ msg: "User registration successful" });
  } catch (error) {
    console.error("Exception during user registration:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/dashboard", (req, res) => {
    // Assuming you have fetched the top gainers and losers from somewhere
    const topGainerList = [{"ticker": "CRBP", "price": "29.49", "change_amount": "21.05", "change_percentage": "249.4076%", "volume": "33042606"},
    {"ticker": "SMXWW", "price": "0.0075", "change_amount": "0.0048", "change_percentage": "177.7778%", "volume": "126873"}, 
    {"ticker": "MYPSW", "price": "0.18", "change_amount": "0.103", "change_percentage": "133.7662%", "volume": "1"}, 
    {"ticker": "GOVXW", "price": "0.0693", "change_amount": "0.039", "change_percentage": "128.7129%", "volume": "30"},]

    const topLoserList = [{"ticker": "PEPLW", "price": "0.0041", "change_amount": "-0.0111", "change_percentage": "-73.0263%", "volume": "240959"}, 
    {"ticker": "DATSW", "price": "0.0502", "change_amount": "-0.0992", "change_percentage": "-66.3989%", "volume": "50"}, 
    {"ticker": "RR", "price": "3.47", "change_amount": "-6.43", "change_percentage": "-64.9495%", "volume": "7334033"}, 
    {"ticker": "TKLF", "price": "0.307", "change_amount": "-0.478", "change_percentage": "-60.8917%", "volume": "6031487"}, 
    // {"ticker": "HOLOW", "price": "0.0242", "change_amount": "-0.0357", "change_percentage": "-59.5993%", "volume": "520"}
    ]
    // send top gainers and losers to frontend
    res.status(200).json({ topGainers: topGainerList, topLosers: topLoserList });
})


module.exports = app;
