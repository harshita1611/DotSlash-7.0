const express = require("express");
const supabase = require("./supabase");
const { z } = require("zod");
const app = express();
const jwt = require("jsonwebtoken");
const validateUsers = require("./middleware/validateUser");
require("dotenv").config();
app.use(express.json());

const bodySchema = z.object({
    name: z.string(),
    age: z.number().max(100),
    address: z.string(),
    aadhar: z.number().min(12),
    email: z.string().email(),
    password: z.string().min(3).max(20),
});

const JWT_SECRET = process.env.JWT_SECRET;
let checkedInUser = {};

setInterval(() => {
    checkedInUser = {};
}, 60000);

app.post("/sign-up", (req, res) => {
    const { name, age, address, aadhar, email, password } = req.body;
    const validation = bodySchema.safeParse(req.body);
    if (validation.success) {
        supabase
            .from("Auth")
            .insert({ email: email, hash: password })
            .select()
            .then((data) => {
                const uniqueID = data.data[0].id;
                if (data.status == 201) {
                    supabase
                        .from("Users")
                        .insert({
                            UUID: uniqueID,
                            Name: name,
                            Age: age,
                            Address: address,
                            aadhar: aadhar,
                        })
                        .select()
                        .then((data) => {
                            console.log(data);
                            if (data.status == 201) {
                                res.status(201).json({ msg: "User created!" });
                            } else {
                                res.status(403).json({ msg: "Error!" });
                            }
                        });
                }
            });
    } else {
        res.status(403).json({ msg: "Invalid Input" });
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
app.post("/create-book", (req, res) => {
    res.json({ msg: "Accessing Protected Route" });
});

app.listen(3000, () => {
    console.log("Meow MEow");
});
