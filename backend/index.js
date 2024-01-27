const express = require("express");
const supabase = require("./supabase");
const jwt = require("jsonwebtoken");
const userRouter = require("./routes/user");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

supabase
  .from("Users")
  .select("*")
  .then((response) => {
    console.log(response);
    console.log("Success");
  })
  .catch((error) => {
    console.log(error);
    console.log("Error");
  });

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
