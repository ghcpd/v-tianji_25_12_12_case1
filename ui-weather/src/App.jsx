import React from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import ForecastList from './components/ForecastList'
import mockData from './data/mockWeather'

export default function App() {
  const { current, dayForecast } = mockData

  return (
    <div className="app-root">
      <header className="header">
        <h1>CloudVista</h1>
        <p className="subtitle">Sleek weather UI — React + Vite</p>
      </header>
      <main className="main">
        <WeatherCard data={current} />
        <ForecastList forecasts={dayForecast} />
      </main>
      <footer className="footer">Built with style — Mock data</footer>
    </div>
  )
}
