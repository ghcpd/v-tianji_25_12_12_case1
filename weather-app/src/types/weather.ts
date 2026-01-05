export interface WeatherCondition {
  id: number
  main: string
  description: string
  icon: string
}

export interface MainWeatherData {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export interface WindData {
  speed: number
  deg: number
}

export interface WeatherData {
  coord: { lon: number; lat: number }
  weather: WeatherCondition[]
  main: MainWeatherData
  wind: WindData
  clouds: { all: number }
  dt: number
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  name: string
  cod: number
}

export interface ForecastItem {
  dt: number
  main: MainWeatherData
  weather: WeatherCondition[]
  wind: WindData
  clouds: { all: number }
  visibility: number
  pop: number
  rain?: { '3h': number }
  sys: {
    pod: string
  }
}

export interface ForecastData {
  list: ForecastItem[]
  city: {
    id: number
    name: string
    coord: { lon: number; lat: number }
    country: string
    timezone: number
  }
}

export interface TemperatureChartData {
  time: string
  temp: number
  feelsLike: number
}
