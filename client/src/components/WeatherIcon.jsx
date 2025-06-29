import React from 'react'

export const WeatherIcon = ({icon, size=64, description="weather icon"}) => {
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
  return (
    <img 
    src={iconUrl}
    alt={description}
    width={size}
    height={size}
    className="inline-block"
    />
  )
}
