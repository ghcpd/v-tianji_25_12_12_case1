import axios from 'axios'
import { WeatherData, ForecastData } from '@/types/weather'
import { mockCurrentWeather, mockForecast } from './mockWeatherData'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'demo'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const weatherService = {
  getCurrentWeather: async (lat: number, lon: number): Promise<WeatherData> => {
    try {
      if (API_KEY === 'demo') {
        return mockCurrentWeather
      }
      const response = await axios.get<WeatherData>(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
      return response.data
    } catch {
      return mockCurrentWeather
    }
  },

  getForecast: async (lat: number, lon: number): Promise<ForecastData> => {
    try {
      if (API_KEY === 'demo') {
        return mockForecast
      }
      const response = await axios.get<ForecastData>(
        `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
      return response.data
    } catch {
      return mockForecast
    }
  },

  getWeatherByCity: async (city: string): Promise<WeatherData> => {
    try {
      if (API_KEY === 'demo') {
        return mockCurrentWeather
      }
      const response = await axios.get<WeatherData>(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      return response.data
    } catch {
      return mockCurrentWeather
    }
  },
}
