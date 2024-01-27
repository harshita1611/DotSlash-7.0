const express = require("express");
const supabase = require('../supabase');
const jwt = require('jsonwebtoken');
const { Router } = require('express');
const {z} =require('zod');


const app = Router();
app.use(express.json());


app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const { data, error } = await supabase.from('UserLogin').insert([{ username, email, password }])
        if (error) {
            console.error('Error saving user data to Supabase:', error.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log('User data saved to Supabase:', data);
        res.status(200).json({ msg: 'User registration successful' });
    } catch (error) {
        console.error('Exception during user registration:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get("/", (req, res) => {
    res.send("Hello World!");
});


module.exports = app;