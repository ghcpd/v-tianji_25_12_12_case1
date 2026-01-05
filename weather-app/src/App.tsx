import React, { useEffect, useState } from 'react'
import { weatherService } from '@/services/weatherService'
import { mockCurrentWeather, mockForecast, mockTemperatureChart } from '@/services/mockWeatherData'
import { WeatherData, ForecastData, TemperatureChartData } from '@/types/weather'
import { CurrentWeather } from '@/components/CurrentWeather'
import { Forecast } from '@/components/Forecast'
import { TemperatureChart } from '@/components/TemperatureChart'
import { CitySearch } from '@/components/CitySearch'
import '@/index.css'

export const App: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData>(mockCurrentWeather)
  const [forecast, setForecast] = useState<ForecastData>(mockForecast)
  const [temperatureChart] = useState<TemperatureChartData[]>(mockTemperatureChart)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const defaultLat = 40.7128
  const defaultLon = -74.006

  useEffect(() => {
    loadWeatherData(defaultLat, defaultLon)
  }, [])

  const loadWeatherData = async (lat: number, lon: number) => {
    setIsLoading(true)
    setError(null)
    try {
      const weather = await weatherService.getCurrentWeather(lat, lon)
      const forecastData = await weatherService.getForecast(lat, lon)
      setCurrentWeather(weather)
      setForecast(forecastData)
    } catch (err) {
      setError('Failed to load weather data')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCitySelect = async (city: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const weather = await weatherService.getWeatherByCity(city)
      const forecastData = await weatherService.getForecast(weather.coord.lat, weather.coord.lon)
      setCurrentWeather(weather)
      setForecast(forecastData)
    } catch (err) {
      setError(`Failed to load weather for ${city}`)
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white fade-in">Weather Dashboard</h1>
          <CitySearch onCitySelect={handleCitySelect} isLoading={isLoading} />
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-400 rounded-2xl text-red-200">
            {error}
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin text-4xl mb-4">🌪️</div>
            <p className="text-blue-100 text-lg">Loading weather data...</p>
          </div>
        )}

        {/* Main Content */}
        {!isLoading && (
          <div className="space-y-6">
            {/* Current Weather */}
            <CurrentWeather data={currentWeather} />

            {/* Forecast and Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Forecast data={forecast} />
              <TemperatureChart data={temperatureChart} />
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-blue-100 text-sm">
          <p>Weather Dashboard • Built with React & Tailwind CSS</p>
          <p className="mt-2">Using mock weather data for demonstration</p>
        </footer>
      </div>
    </div>
  )
}

export default App
