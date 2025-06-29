import { useState } from "react";
import axios from "axios";

const WeatherSearch = ({onWeatherData, onError}) => {
  let [city, Setcity] = useState("");
  async function handleSearch(e) {
    e.preventDefault();
    if (!city.trim()) {
      console.log("Please enter a city name");
      return;
    }
    
    try {
      const response = await axios.get(
        `http://localhost:5000/api/weather?city=${encodeURIComponent(city)}`
      );
      console.log(`${response.data}Hello`);
      onWeatherData(response.data);
    } catch (err) {
      console.log("error happened", err.message);
      onError(true);
    }
  }
  
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          value={city}
          onChange={(e) => {
            Setcity(e.target.value);
          }}
          placeholder="Enter city name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default WeatherSearch;
