import React from 'react'
import { WeatherData } from '@/types/weather'
import { WeatherIcon } from './WeatherIcon'

interface CurrentWeatherProps {
  data: WeatherData
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  const { main, weather, wind, sys, name } = data
  const weatherDescription = weather[0]?.description || 'N/A'
  const weatherIcon = weather[0]?.icon || '01d'

  return (
    <div className="glass-effect p-8 rounded-3xl slide-in w-full">
      <h1 className="text-5xl font-bold mb-2">{name}</h1>
      <p className="text-blue-100 text-lg mb-8">{weatherDescription}</p>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <WeatherIcon iconCode={weatherIcon} size="xl" />
          <span className="text-7xl font-bold ml-4">{Math.round(main.temp)}°</span>
        </div>
        <div className="text-right">
          <p className="text-blue-100">Feels like</p>
          <p className="text-4xl font-semibold">{Math.round(main.feels_like)}°</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/5 rounded-2xl p-4">
          <p className="text-blue-100 text-sm mb-2">Humidity</p>
          <p className="text-2xl font-semibold">{main.humidity}%</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-4">
          <p className="text-blue-100 text-sm mb-2">Wind Speed</p>
          <p className="text-2xl font-semibold">{Math.round(wind.speed)} m/s</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-4">
          <p className="text-blue-100 text-sm mb-2">Pressure</p>
          <p className="text-2xl font-semibold">{main.pressure} hPa</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-4">
          <p className="text-blue-100 text-sm mb-2">Cloud Coverage</p>
          <p className="text-2xl font-semibold">-</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-blue-100 text-sm mb-1">Sunrise</p>
          <p className="text-lg font-semibold">{new Date(sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        <div>
          <p className="text-blue-100 text-sm mb-1">Sunset</p>
          <p className="text-lg font-semibold">{new Date(sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </div>
    </div>
  )
}
