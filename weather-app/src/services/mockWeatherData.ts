import { WeatherData, ForecastData, TemperatureChartData } from '@/types/weather'

// Mock current weather data
export const mockCurrentWeather: WeatherData = {
  coord: { lon: -74.006, lat: 40.7128 },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  main: {
    temp: 72,
    feels_like: 70,
    temp_min: 68,
    temp_max: 75,
    pressure: 1013,
    humidity: 65,
  },
  wind: {
    speed: 8,
    deg: 240,
  },
  clouds: { all: 10 },
  dt: Date.now() / 1000,
  sys: {
    country: 'US',
    sunrise: 1702377600,
    sunset: 1702411200,
  },
  name: 'New York',
  cod: 200,
}

// Mock forecast data
export const mockForecast: ForecastData = {
  list: [
    {
      dt: Math.floor(Date.now() / 1000) + 3600,
      main: { temp: 71, feels_like: 69, temp_min: 68, temp_max: 74, pressure: 1013, humidity: 66 },
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
      wind: { speed: 9, deg: 245 },
      clouds: { all: 15 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
    },
    {
      dt: Math.floor(Date.now() / 1000) + 7200,
      main: { temp: 70, feels_like: 68, temp_min: 67, temp_max: 73, pressure: 1012, humidity: 68 },
      weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
      wind: { speed: 10, deg: 250 },
      clouds: { all: 25 },
      visibility: 10000,
      pop: 0.1,
      sys: { pod: 'd' },
    },
    {
      dt: Math.floor(Date.now() / 1000) + 10800,
      main: { temp: 68, feels_like: 66, temp_min: 65, temp_max: 71, pressure: 1011, humidity: 70 },
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
      wind: { speed: 11, deg: 255 },
      clouds: { all: 50 },
      visibility: 8000,
      pop: 0.2,
      sys: { pod: 'd' },
    },
    {
      dt: Math.floor(Date.now() / 1000) + 14400,
      main: { temp: 66, feels_like: 64, temp_min: 63, temp_max: 69, pressure: 1010, humidity: 72 },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      wind: { speed: 12, deg: 260 },
      clouds: { all: 70 },
      visibility: 6000,
      pop: 0.5,
      rain: { '3h': 2 },
      sys: { pod: 'd' },
    },
    {
      dt: Math.floor(Date.now() / 1000) + 18000,
      main: { temp: 65, feels_like: 63, temp_min: 62, temp_max: 68, pressure: 1009, humidity: 75 },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      wind: { speed: 13, deg: 265 },
      clouds: { all: 80 },
      visibility: 5000,
      pop: 0.6,
      rain: { '3h': 3 },
      sys: { pod: 'd' },
    },
    {
      dt: Math.floor(Date.now() / 1000) + 21600,
      main: { temp: 64, feels_like: 62, temp_min: 61, temp_max: 67, pressure: 1008, humidity: 77 },
      weather: [{ id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' }],
      wind: { speed: 14, deg: 270 },
      clouds: { all: 90 },
      visibility: 4000,
      pop: 0.8,
      rain: { '3h': 5 },
      sys: { pod: 'd' },
    },
  ],
  city: {
    id: 5128581,
    name: 'New York',
    coord: { lon: -74.006, lat: 40.7128 },
    country: 'US',
    timezone: -18000,
  },
}

export const mockTemperatureChart: TemperatureChartData[] = [
  { time: '12:00 AM', temp: 62, feelsLike: 60 },
  { time: '3:00 AM', temp: 60, feelsLike: 58 },
  { time: '6:00 AM', temp: 59, feelsLike: 57 },
  { time: '9:00 AM', temp: 65, feelsLike: 63 },
  { time: '12:00 PM', temp: 72, feelsLike: 70 },
  { time: '3:00 PM', temp: 75, feelsLike: 73 },
  { time: '6:00 PM', temp: 70, feelsLike: 68 },
  { time: '9:00 PM', temp: 65, feelsLike: 63 },
]

// List of cities for the dropdown
export const cityList = [
  { name: 'New York', lat: 40.7128, lon: -74.006 },
  { name: 'Los Angeles', lat: 34.0522, lon: -118.2437 },
  { name: 'Chicago', lat: 41.8781, lon: -87.6298 },
  { name: 'Houston', lat: 29.7604, lon: -95.3698 },
  { name: 'Phoenix', lat: 33.4484, lon: -112.074 },
  { name: 'London', lat: 51.5074, lon: -0.1278 },
  { name: 'Paris', lat: 48.8566, lon: 2.3522 },
  { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
]
