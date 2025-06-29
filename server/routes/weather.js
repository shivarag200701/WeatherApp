const express = require("express");
const router = express.Router();
const { getWeather, getForecast } = require("../utils/weatherApi");

router.get("/weather", async (req, res) => {
  try {
    const city = req.query.city;
    console.log(city);

    const weatherData = await getWeather(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }

});

router.get("/forecast", async (req, res) => {
  try {
    const city = req.query.city;
    console.log(city);
    const forecastData = await getForecast(city);
    res.json(forecastData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch forecast data" });
  }
});

module.exports = router;
