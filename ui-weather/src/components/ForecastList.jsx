import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

export default function ForecastList({ forecasts = [] }) {
  const labels = forecasts.map((f) => f.time)
  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecasts.map((f) => f.temp),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59,130,246,0.2)',
        tension: 0.4,
      },
    ],
  }

  return (
    <aside className="forecast">
      <h2>Hourly Forecast</h2>
      <div className="forecast-grid">
        {forecasts.map((f) => (
          <div key={f.time} className="forecast-item">
            <div className="time">{f.time}</div>
            <div className="icon">{iconFor(f.icon)}</div>
            <div className="temp">{Math.round(f.temp)}°</div>
          </div>
        ))}
      </div>
      <div className="chart">
        <Line data={data} />
      </div>
    </aside>
  )
}

function iconFor(name) {
  return ({
    sunny: '☀️',
    cloudy: '☁️',
    rain: '🌧️',
    snow: '❄️',
    storm: '⛈️',
  }[name] ?? '🌤️')
}
