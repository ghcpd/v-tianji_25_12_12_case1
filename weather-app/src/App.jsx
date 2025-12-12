import React from 'react';
import { motion } from 'framer-motion';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import TemperatureChart from './components/TemperatureChart';
import { mockWeatherData } from './data';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Weather App
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CurrentWeather data={mockWeatherData.current} />
          <Forecast data={mockWeatherData.forecast} />
        </motion.div>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TemperatureChart data={mockWeatherData.hourly} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
