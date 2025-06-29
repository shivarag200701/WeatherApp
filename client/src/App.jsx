import WeatherSearch from "./components/WeatherSearch";
// import ForecastSearch from "./components/ForecastSearch";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { InvalidEntry } from "./components/InvalidEntry";
import { useState } from "react";

function App() {
  let [weatherData, setWeatherData] = useState(null);
  let [error, setError] = useState(false);
  const handleWeatherData = (data) => {
    setWeatherData(data);
    setError(false);
  }
  const handleError = (error) => {
    setError(error);
    setWeatherData(null);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Weather Dashboard</h1>
        <p className="text-blue-200 mt-2 text-center">Get the latest weather updates for your city</p>
      </header>
      <main className="w-full max-w-2xl">
        <WeatherSearch onWeatherData={handleWeatherData} onError={handleError} />
        {weatherData && <WeatherDisplay weatherData={weatherData} />}
        {error && <InvalidEntry />}
      </main>
      <footer className="mt-12 text-blue-300 text-xs opacity-70">
        &copy; {new Date().getFullYear()} Shiva Ragahv Rajasekar
      </footer>
    </div>
  );
}

export default App;
