import React from 'react'
import { ForecastData } from '@/types/weather'
import { WeatherIcon } from './WeatherIcon'

interface ForecastProps {
  data: ForecastData
}

export const Forecast: React.FC<ForecastProps> = ({ data }) => {
  // Group forecast by day
  const forecastByDay = data.list.slice(0, 6).map((item) => ({
    ...item,
    date: new Date(item.dt * 1000),
  }))

  return (
    <div className="glass-effect p-8 rounded-3xl slide-in w-full">
      <h2 className="text-3xl font-bold mb-6">5-Day Forecast</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {forecastByDay.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 hover:bg-white/10 rounded-2xl p-4 text-center cursor-pointer transform hover:scale-105"
          >
            <p className="text-blue-100 text-sm mb-2">
              {item.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </p>
            <div className="flex justify-center mb-2">
              <WeatherIcon iconCode={item.weather[0]?.icon || '01d'} size="md" />
            </div>
            <p className="text-2xl font-semibold mb-2">{Math.round(item.main.temp)}°</p>
            <p className="text-blue-100 text-xs capitalize">{item.weather[0]?.main}</p>
            <p className="text-blue-100 text-xs mt-2">
              💧 {item.main.humidity}% | 💨 {Math.round(item.wind.speed)}m/s
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
