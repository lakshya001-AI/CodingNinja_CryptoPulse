const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectMongoDB = require("./Database/connectDB");
const userModel = require("./Database/userSchema");
dotenv.config();
connectMongoDB();

app.use(express.json());
app.use(cors());


app.get("/", (req, res)=>{
    res.send("Hello this Backend");
});

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`);
});