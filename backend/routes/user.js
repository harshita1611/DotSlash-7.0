const express = require("express");
const supabase = require("../supabase");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { z } = require("zod");

const app = Router();
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const { data, error } = await supabase
      .from("Users")
      .insert([{ username, email, password }]);
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
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/dashboard", (req, res) => {
    res.send("Dashboard");
    const topGainerList=[{"ticker": "CRBP", "price": "29.49", "change_amount": "21.05", "change_percentage": "249.4076%", "volume": "33042606"}, {"ticker": "SMXWW", "price": "0.0075", "change_amount": "0.0048", "change_percentage": "177.7778%", "volume": "126873"}, {"ticker": "MYPSW", "price": "0.18", "change_amount": "0.103", "change_percentage": "133.7662%", "volume": "1"}, {"ticker": "GOVXW", "price": "0.0693", "change_amount": "0.039", "change_percentage": "128.7129%", "volume": "30"}, {"ticker": "DRMAW", "price": "0.0239", "change_amount": "0.0114", "change_percentage": "91.2%", "volume": "200"}, {"ticker": "SMX", "price": "0.43", "change_amount": "0.1945", "change_percentage": "82.5902%", "volume": "9223636"}, {"ticker": "TNONW", "price": "0.06", "change_amount": "0.0254", "change_percentage": "73.4104%", "volume": "500"}, {"ticker": "GMBLZ", "price": "0.0034", "change_amount": "0.0014", "change_percentage": "70.0%", "volume": "26575"}, {"ticker": "BTOG", "price": "4.74", "change_amount": "1.95", "change_percentage": "69.8925%", "volume": "446573"}, {"ticker": "COCHW", "price": "0.0189", "change_amount": "0.0077", "change_percentage": "68.75%", "volume": "27549"}, {"ticker": "AISPW", "price": "0.05", "change_amount": "0.02", "change_percentage": "66.6667%", "volume": "51373"}, {"ticker": "MRDB+", "price": "0.031", "change_amount": "0.0121", "change_percentage": "64.0212%", "volume": "9575"}, {"ticker": "ALSAR", "price": "0.133", "change_amount": "0.051", "change_percentage": "62.1951%", "volume": "12369"}, {"ticker": "IMCC", "price": "0.3281", "change_amount": "0.1224", "change_percentage": "59.5041%", "volume": "2458892"}, {"ticker": "CDROW", "price": "0.17", "change_amount": "0.06", "change_percentage": "54.5455%", "volume": "21600"}, {"ticker": "PAVMZ", "price": "0.1", "change_amount": "0.035", "change_percentage": "53.8462%", "volume": "197"}, {"ticker": "PLMIW", "price": "0.1776", "change_amount": "0.0621", "change_percentage": "53.7662%", "volume": "4700"}, {"ticker": "VLD+", "price": "0.0275", "change_amount": "0.0095", "change_percentage": "52.7778%", "volume": "13173"}, {"ticker": "EMCGW", "price": "0.0198", "change_amount": "0.0068", "change_percentage": "52.3077%", "volume": "4826"}, {"ticker": "ACON", "price": "2.84", "change_amount": "0.975", "change_percentage": "52.2788%", "volume": "33361934"}]
    const topLoserList=[{"ticker": "PEPLW", "price": "0.0041", "change_amount": "-0.0111", "change_percentage": "-73.0263%", "volume": "240959"}, {"ticker": "DATSW", "price": "0.0502", "change_amount": "-0.0992", "change_percentage": "-66.3989%", "volume": "50"}, {"ticker": "RR", "price": "3.47", "change_amount": "-6.43", "change_percentage": "-64.9495%", "volume": "7334033"}, {"ticker": "TKLF", "price": "0.307", "change_amount": "-0.478", "change_percentage": "-60.8917%", "volume": "6031487"}, {"ticker": "HOLOW", "price": "0.0242", "change_amount": "-0.0357", "change_percentage": "-59.5993%", "volume": "520"}, {"ticker": "GMBLW", "price": "0.0126", "change_amount": "-0.0124", "change_percentage": "-49.6%", "volume": "4701"}, {"ticker": "BUJAW", "price": "0.04", "change_amount": "-0.0385", "change_percentage": "-49.0446%", "volume": "2931"}, {"ticker": "LANV+", "price": "0.0699", "change_amount": "-0.0574", "change_percentage": "-45.0903%", "volume": "300"}, {"ticker": "REVBW", "price": "0.0071", "change_amount": "-0.0058", "change_percentage": "-44.9612%", "volume": "134579"}, {"ticker": "SNAXW", "price": "0.0054", "change_amount": "-0.0036", "change_percentage": "-40.0%", "volume": "25000"}, {"ticker": "MCACW", "price": "0.0101", "change_amount": "-0.0064", "change_percentage": "-38.7879%", "volume": "21013"}, {"ticker": "AREBW", "price": "0.006", "change_amount": "-0.0037", "change_percentage": "-38.1443%", "volume": "2000"}, {"ticker": "IVDAW", "price": "0.1", "change_amount": "-0.06", "change_percentage": "-37.5%", "volume": "1013"}, {"ticker": "NVVEW", "price": "0.0312", "change_amount": "-0.0187", "change_percentage": "-37.4749%", "volume": "7459"}, {"ticker": "OXUSW", "price": "0.0939", "change_amount": "-0.056", "change_percentage": "-37.3582%", "volume": "451"}, {"ticker": "NVVE", "price": "3.18", "change_amount": "-1.8", "change_percentage": "-36.1446%", "volume": "327113"}, {"ticker": "LGST", "price": "7.14", "change_amount": "-3.94", "change_percentage": "-35.5596%", "volume": "40995"}, {"ticker": "ZJYL", "price": "178.0", "change_amount": "-98.11", "change_percentage": "-35.5329%", "volume": "34662"}, {"ticker": "LMND+", "price": "0.0151", "change_amount": "-0.0083", "change_percentage": "-35.4701%", "volume": "45394"}, {"ticker": "QDROW", "price": "0.051", "change_amount": "-0.028", "change_percentage": "-35.443%", "volume": "124"}]

    // send top gainers and loosers to frontend
    res.status(200).json({topGainerList: topGainerList, topLoserList: topLoserList});
})
module.exports = app;
