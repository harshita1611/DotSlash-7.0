const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function validateUsers(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        jwt.verify(token, JWT_SECRET);
        next();
    } catch (err) {
        res.json({ msg: "Dhongi hai tu" });
    }
}

module.exports = validateUsers;