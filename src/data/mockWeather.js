const mockWeather = {
  city: 'San Francisco',
  current: {
    temp: 21,
    condition: 'Sunny',
    summary: 'Clear skies with a gentle breeze',
    high: 24,
    low: 15,
    humidity: 62,
    wind: 12,
    feelsLike: 22,
  },
  forecast: [
    { day: 'Mon', dayShort: 'Mon', high: 24, low: 15, condition: 'Sunny' },
    { day: 'Tue', dayShort: 'Tue', high: 22, low: 14, condition: 'Partly Cloudy' },
    { day: 'Wed', dayShort: 'Wed', high: 20, low: 13, condition: 'Cloudy' },
    { day: 'Thu', dayShort: 'Thu', high: 19, low: 12, condition: 'Showers' },
    { day: 'Fri', dayShort: 'Fri', high: 21, low: 13, condition: 'Sunny' },
    { day: 'Sat', dayShort: 'Sat', high: 23, low: 14, condition: 'Sunny' },
    { day: 'Sun', dayShort: 'Sun', high: 22, low: 14, condition: 'Partly Cloudy' },
  ],
}

export default mockWeather
