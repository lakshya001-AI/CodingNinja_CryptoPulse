const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectMongoDB = require("./Database/connectDB");
const userModel = require("./Database/userSchema");
const bcrypt = require("bcrypt");
dotenv.config();
connectMongoDB();

app.use(express.json());
app.use(cors());


app.get("/", (req, res)=>{
    res.send("Hello this Backend");
});


app.post("/createAccount", async (req, res) => {
    try {
        const { firstName, lastName, emailAddress, password } = req.body;
        const userExists = await userModel.findOne({ emailAddress });

        if (userExists) {
            return res.status(400).send({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            firstName,
            lastName,
            emailAddress,
            password: hashedPassword
        });

        console.log(newUser);
        res.status(201).send({ message: "Account created successfully" });
    } catch (error) {
        console.error("Error creating account:", error);
        return res.status(500).send({ message: "Internal server error" });
    }
});


app.post("/loginUser", async (req, res) => {
    try {
        const { emailAddress, password } = req.body;

        // Check if user exists
        const user = await userModel.findOne({ emailAddress });
        if (!user) {
            return res.status(401).send({ message: "User not found!" });
        }

        // Verify password
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return res.status(401).send({ message: "Invalid credentials!" });
        }

        // Successful login
        res.status(200).send({ message: "Logged in successfully!" });
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).send({ message: "An error occurred" });
    }
});


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`);
});