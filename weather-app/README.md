# Weather App

A sleek, modern weather application web interface built with React, TypeScript, and Tailwind CSS.

## Features

- **Current Weather Display**: Shows real-time weather conditions with temperature, humidity, wind speed, and more
- **5-Day Forecast**: Displays upcoming weather predictions with icons and detailed metrics
- **Temperature Trend Chart**: Visualizes temperature changes throughout the day
- **City Search**: Easy-to-use search functionality to check weather for any city
- **Beautiful UI/UX**: Modern glassmorphism design with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Mock Weather API**: Uses mock data for demonstration, but supports real API integration

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Testing**: Vitest (Unit Tests) + Playwright (E2E Tests)
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Installation

```bash
# Navigate to project directory
cd weather-app

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:5173
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Testing

### Unit Tests

```bash
# Run unit tests
npm test

# Watch mode
npm run test:watch
```

### E2E Tests

```bash
# Run E2E tests
npm run e2e

# Run with UI
npm run e2e:ui
```

## Project Structure

```
weather-app/
├── src/
│   ├── components/          # React components
│   │   ├── CurrentWeather.tsx
│   │   ├── Forecast.tsx
│   │   ├── TemperatureChart.tsx
│   │   ├── CitySearch.tsx
│   │   ├── WeatherIcon.tsx
│   │   └── *.test.tsx       # Unit tests
│   ├── services/            # Business logic
│   │   ├── weatherService.ts
│   │   ├── mockWeatherData.ts
│   │   └── weatherService.test.ts
│   ├── types/               # TypeScript types
│   │   └── weather.ts
│   ├── test/                # Test setup
│   │   └── setup.ts
│   ├── e2e/                 # E2E tests
│   │   └── weather.spec.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── vitest.config.ts         # Vitest configuration
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.cjs       # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## Features Breakdown

### Current Weather Component
- Displays city name and weather description
- Shows current temperature and "feels like" temperature
- Displays humidity, wind speed, pressure, and cloud coverage
- Shows sunrise and sunset times

### Forecast Component
- Shows 5-day forecast with 3-hour intervals
- Displays temperature, weather condition, humidity, and wind speed
- Interactive cards with hover effects

### Temperature Chart
- Visualizes temperature trends throughout the day
- Compares actual temperature vs "feels like" temperature
- Color-coded bars for easy comparison

### City Search
- Real-time city filtering
- Dropdown suggestions
- Loading states

## Weather Data

The app comes with mock weather data for demonstration purposes. To use a real API:

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Create a `.env.local` file with: `VITE_WEATHER_API_KEY=your_key_here`
3. Restart the dev server
4. The app will automatically use the real API when a valid key is provided

## Performance

- Optimized component rendering with React best practices
- Lazy loading where applicable
- CSS animations for smooth interactions
- Minimal bundle size with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Feel free to submit issues and enhancement requests!
