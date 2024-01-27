const express = require("express");
const supabase = require("./supabase");
const { z } = require("zod");
const app = express();
const jwt = require("jsonwebtoken");
const validateUsers = require("./middleware/validateUser");
require("dotenv").config();
app.use(express.json());

// Define body schema to validate incoming request data
const bodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(3).max(20),
});

const JWT_SECRET = process.env.JWT_SECRET;
let checkedInUser = {};

setInterval(() => {
    checkedInUser = {};
}, 60000);

app.post("/sign-up", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const validation = bodySchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(403).json({ msg: "Invalid Input" });
        }

        // Insert user data into the database
        const { data, error } = await supabase.from("Auth").insert({ email, hash: password });
        if (error) {
            console.error("Error during user registration:", error.message);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // Handle successful user registration
        console.log("User data saved to Supabase:", data);
        res.status(201).json({ msg: "User created!" });
    } catch (error) {
        console.error("Exception during user registration:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/sign-in", (req, res) => {
    const { email, password } = req.body;
    if (!checkedInUser[email]) {
        checkedInUser[email] = 1;
    } else {
        checkedInUser[email]++;
    }
    if (checkedInUser[email] > 3) {
        res.status(302).json({
            msg: "Rate Limited Exceeded, try again after 60 seconds",
        });
        return;
    }
    supabase
        .from("Auth")
        .select()
        .eq("email", email)
        .then((data) => {
            // console.log(data);
            if (!data.data) {
                res.status(403).json({ msg: "User don't exists" });
            } else {
                if (data.data[0].hash == password) {
                    supabase
                        .from("Users")
                        .select()
                        .eq("UUID", data.data[0].id)
                        .then((data) => {
                            const token = jwt.sign(data.data[0], JWT_SECRET);
                            res.status(200).json({
                                msg: "Succesful login",
                                token: token,
                            });
                        });
                } else {
                    res.status(401).json({ msg: "Invalid password" });
                }
            }
        });
});

// Protected Route
app.use(validateUsers);
app.post("/dashboard", (req, res) => {
    res.json({ msg: "Accessing Protected Route" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});