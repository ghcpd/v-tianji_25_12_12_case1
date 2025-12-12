const mock = {
  current: {
    temp: 17,
    feels_like: 16,
    condition: 'Partly Cloudy',
    icon: '⛅',
    humidity: 68,
    wind_kph: 10
  },
  hourly: Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    temp: 12 + Math.round(Math.sin(i / 24 * Math.PI * 2) * 8)
  })),
  daily: Array.from({ length: 5 }, (_, i) => ({
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][i % 5],
    high: 18 + i,
    low: 11 + i,
    icon: ['☀️', '🌤️', '🌧️', '⛅', '⛈️'][i % 5]
  }))
}

export default mock
