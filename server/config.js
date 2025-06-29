const dotenv = require("dotenv");

//load env variables
dotenv.config();

const config = {
  port: process.env.PORT,
  mongodb: process.env.MONGODB_URI,
  weatherApiKey: process.env.WEATHER_API_KEY,
  baseUrl: process.env.WEATHER_BASE_URL,
};

module.exports = config;
