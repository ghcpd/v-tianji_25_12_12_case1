import { describe, it, expect, vi, beforeEach } from 'vitest'
import { weatherService } from '@/services/weatherService'
import { mockCurrentWeather, mockForecast } from '@/services/mockWeatherData'

describe('Weather Service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getCurrentWeather', () => {
    it('should return weather data for valid coordinates', async () => {
      const data = await weatherService.getCurrentWeather(40.7128, -74.006)
      expect(data).toBeDefined()
      expect(data.name).toBeDefined()
      expect(data.main).toBeDefined()
      expect(data.main.temp).toBeDefined()
    })

    it('should return mock data with demo API key', async () => {
      const data = await weatherService.getCurrentWeather(40.7128, -74.006)
      expect(data.name).toBe(mockCurrentWeather.name)
    })

    it('should have weather array with at least one item', async () => {
      const data = await weatherService.getCurrentWeather(40.7128, -74.006)
      expect(data.weather).toBeDefined()
      expect(data.weather.length).toBeGreaterThan(0)
    })
  })

  describe('getForecast', () => {
    it('should return forecast data for valid coordinates', async () => {
      const data = await weatherService.getForecast(40.7128, -74.006)
      expect(data).toBeDefined()
      expect(data.list).toBeDefined()
      expect(Array.isArray(data.list)).toBe(true)
    })

    it('should return mock forecast data with demo API key', async () => {
      const data = await weatherService.getForecast(40.7128, -74.006)
      expect(data.city.name).toBe(mockForecast.city.name)
    })

    it('should have city information', async () => {
      const data = await weatherService.getForecast(40.7128, -74.006)
      expect(data.city).toBeDefined()
      expect(data.city.name).toBeDefined()
      expect(data.city.country).toBeDefined()
    })
  })

  describe('getWeatherByCity', () => {
    it('should return weather data for valid city name', async () => {
      const data = await weatherService.getWeatherByCity('New York')
      expect(data).toBeDefined()
      expect(data.name).toBeDefined()
      expect(data.main).toBeDefined()
    })

    it('should return mock data with demo API key', async () => {
      const data = await weatherService.getWeatherByCity('London')
      expect(data.name).toBe(mockCurrentWeather.name)
    })
  })
})
