import React from 'react'
import { WeatherIcon } from './WeatherIcon'
import { useState, useEffect } from 'react'

export const WeatherDisplay = ({weatherData}) => {
    const [day, setDay] = useState(false);
    useEffect(() => {
        if (weatherData) {
          const now = weatherData.dt;
          const sunrise = weatherData.sys.sunrise;
          const sunset = weatherData.sys.sunset;
          // It's day if now is between sunrise and sunset
          setDay(now >= sunrise && now < sunset);
        }
      }, [weatherData]);
      const nightGradient = "bg-gradient-to-br from-[#232b3b] via-[#2c3e50] to-[#3a6073]";
const dayGradient = "bg-gradient-to-br from-[#aee1f9] via-[#7fd8f5] to-[#e0ecfc]";
  return (
    <div className={`relative max-w-xl mx-auto mt-10 p-8 rounded-2xl shadow-2xl backdrop-blur-lg text-white overflow-hidden ${day ? `${dayGradient} text-slate-800` : `${nightGradient} text-white`}`}>
      <div className="absolute top-10 right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none">
        {/* Example: cloud SVG, replace with your own or use an image */}
        <svg width="120" height="120" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="15" rx="10" ry="6" />
        </svg>
      </div>
      <div className="flex items-center space-x-6 mb-8">
        <WeatherIcon icon={weatherData.weather[0].icon} size={128} description={weatherData.weather[0].description} />
        <div>
          <div className="text-6xl font-extrabold">{weatherData.main.temp}°C</div>
          <div className="text-xl font-light">{weatherData.weather[0].description}</div>
          <div className="text-md text-blue-200">{weatherData.name}, {weatherData.sys.country}</div>
          <div className="text-xs text-blue-100">{new Date(weatherData.dt * 1000).toLocaleString()}</div>
          <div className="text-xs text-blue-100">{weatherData.weather[0].icon}</div>
        </div>
      </div>
      <p>{weatherData.wind.speed}</p>
      <p>{weatherData.wind.deg}</p>
      <p>{weatherData.wind.gust}</p>
    </div>
  )
}
