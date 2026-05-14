const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const studentsRoutes = require("./routes/students.routes");
dotenv.config();

const app = express()

app.use(express.json())
app.use(morgan('dev'))

const port = process.env.PORT;

app.use("/api/students", studentsRoutes);

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});
