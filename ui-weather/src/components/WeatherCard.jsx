import React from 'react'

export default function WeatherCard({ data }) {
  const temp = Math.round(data?.temp ?? 0)
  return (
    <section className="card">
      <div className="card-left">
        <div className="temperature">{temp}°C</div>
        <div className="description">{data?.description}</div>
        <div className="meta">
          <span>Feels {Math.round(data?.feels_like ?? 0)}°</span>
          <span>Humidity {data?.humidity ?? 0}%</span>
          <span>Wind {data?.wind_speed ?? 0} km/h</span>
        </div>
      </div>
      <div className="card-right">
        <div className="icon" aria-hidden>
          {renderIcon(data?.icon)}
        </div>
      </div>
    </section>
  )
}

function renderIcon(name) {
  const icons = {
    sunny: '☀️',
    cloudy: '☁️',
    rain: '🌧️',
    snow: '❄️',
    storm: '⛈️',
  }
  return icons[name] ?? '🌤️'
}
