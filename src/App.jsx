import React from 'react'
import { motion } from 'framer-motion'
import WeatherCard from './components/WeatherCard'
import Forecast from './components/Forecast'
import TempChart from './components/TempChart'
import mockWeather from './data/mockWeather'

export default function App() {
  const { city, current, forecast } = mockWeather

  return (
    <div className="app-root">
      <div className="container">
        <header className="header">
          <div className="brand">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs />
              <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="#00A6FB" />
            </svg>
            <div>
              <h1 className="title">Weatherly</h1>
              <p className="subtitle">Beautiful weather UI — frontend only</p>
            </div>
          </div>
          <div className="search">
            <input aria-label="search" placeholder="Search city (mock)" defaultValue={city} />
          </div>
        </header>

        <main>
          <motion.section
            className="hero"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WeatherCard city={city} current={current} />

            <div className="right-panel">
              <div className="chart-wrap">
                <h3 className="section-title">Temperature</h3>
                <TempChart forecast={forecast} />
              </div>

              <div className="details">
                <h3 className="section-title">Details</h3>
                <ul>
                  <li>Humidity: {current.humidity}%</li>
                  <li>Wind: {current.wind} km/h</li>
                  <li>Feels like: {current.feelsLike}°C</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <section className="forecast-section">
            <h3 className="section-title">7‑Day Forecast</h3>
            <Forecast forecast={forecast} />
          </section>
        </main>

        <footer className="footer">Made with care — mock data • Demo UI</footer>
      </div>
    </div>
  )
}
