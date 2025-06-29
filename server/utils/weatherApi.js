//General file for making OpenWeather API calls

const axios = require("axios");
const { baseUrl, weatherApiKey } = require("../config");

async function getWeather(city) {
  try {
    console.log("getWeather called");

    const response = await axios.get(`${baseUrl}/weather`, {
      params: {
        q: city,
        units: "metric",
        appid: weatherApiKey,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Failed to make request", err.message);
    throw err; // Re-throw the error so the route can handle it
  }
}

async function getForecast(city) {
  try {
    const response = await axios.get(`${baseUrl}/forecast`, {
      params: {
        q: city,
        units: "metric",
        appid: weatherApiKey,
      },
    });
    return response.data;
  } catch (err) {
    console.log("Failed to make request", err.message);
    throw err; // Re-throw the error so the route can handle it
  }
}

module.exports = { getWeather, getForecast };
