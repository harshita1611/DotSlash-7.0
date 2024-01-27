const express = require("express");
const supabase = require('../supabase');
const jwt = require('jsonwebtoken');
const { Router } = require('express');
const {z} =require('zod');


const app = Router();
app.use(express.json());


