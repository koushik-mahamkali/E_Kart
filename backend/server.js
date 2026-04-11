const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");
const app = express();
const cors = require("cors");
app.use(cors({
    origin: "http://localhost:3000", // your frontend
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Server is running");
});
app.post("/login",async(req, res)=>{
    const {username, password} = req.body;
    try{
        const user = await User.findOne({ username });
        if(!user){
            return res.status(401).json({ message: "User not found!" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }
        res.json({
            message: "login successful",
            user: {
                id : user._id,
                username : user.username
            }
        });
    }
    catch(err){
        res.status(500).json({message:"server error"});
    }
});
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.send("User already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            password: hashedPassword
        });
        await user.save();
        res.send("Signup successful");
    } catch (err) {
        console.log(err);
        res.send("Error");
    }
});
mongoose.connect("mongodb://127.0.0.1:27017/albatross")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
