const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weather");
const { connectDB, disconnectDb } = require("./utils/db");

//Create app
const app = express();
app.use(cors());
app.use(express.json());

//mongodb Connection
connectDB();

//registering route
app.use("/api", weatherRoutes);

module.exports = app;
