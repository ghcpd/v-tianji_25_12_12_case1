export const mockWeatherData = {
  current: {
    location: "New York, NY",
    temperature: 22,
    condition: "Sunny",
    humidity: 65,
    windSpeed: 10,
    icon: "sunny"
  },
  forecast: [
    { day: "Today", high: 25, low: 18, condition: "Sunny", icon: "sunny" },
    { day: "Tomorrow", high: 23, low: 16, condition: "Cloudy", icon: "cloudy" },
    { day: "Wednesday", high: 20, low: 14, condition: "Rainy", icon: "rainy" },
    { day: "Thursday", high: 18, low: 12, condition: "Partly Cloudy", icon: "partly-cloudy" },
    { day: "Friday", high: 24, low: 17, condition: "Sunny", icon: "sunny" }
  ],
  hourly: [
    { time: "12:00", temp: 22 },
    { time: "13:00", temp: 24 },
    { time: "14:00", temp: 25 },
    { time: "15:00", temp: 23 },
    { time: "16:00", temp: 21 },
    { time: "17:00", temp: 20 },
    { time: "18:00", temp: 19 },
    { time: "19:00", temp: 18 }
  ]
};