const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./src/routes/User/index");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())
app.use(express.json());

mongoose.connect("mongodb+srv://zubairshayan70:KBW123@cluster0.unwex.mongodb.net/")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error);
    });

app.use("/", userRouter);




app.listen(5000, () => {
    console.log("Server running on http://localhost:3000");
});
