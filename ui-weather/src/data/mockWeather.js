const mockData = {
  current: {
    temp: 22.7,
    feels_like: 22,
    description: 'Partly Cloudy',
    humidity: 60,
    wind_speed: 12,
    icon: 'cloudy',
  },
  dayForecast: [
    { time: '08:00', temp: 18, icon: 'cloudy' },
    { time: '09:00', temp: 19, icon: 'cloudy' },
    { time: '10:00', temp: 21, icon: 'sunny' },
    { time: '11:00', temp: 23, icon: 'sunny' },
    { time: '12:00', temp: 24, icon: 'sunny' },
    { time: '13:00', temp: 24, icon: 'sunny' },
    { time: '14:00', temp: 23, icon: 'cloudy' },
    { time: '15:00', temp: 22, icon: 'cloudy' },
  ],
}

export default mockData
