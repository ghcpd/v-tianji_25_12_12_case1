import React from 'react'

function Icon({ condition }) {
  // Simple inline icons for a refined look
  if (/sun/i.test(condition)) {
    return (
      <svg className="icon sun" viewBox="0 0 24 24" width="72" height="72" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="4" fill="#FFD166" />
        <g stroke="#FFD166" strokeWidth="1.2">
          <path d="M12 1v3" />
          <path d="M12 20v3" />
          <path d="M4.2 4.2l2.1 2.1" />
          <path d="M17.7 17.7l2.1 2.1" />
          <path d="M1 12h3" />
          <path d="M20 12h3" />
          <path d="M4.2 19.8l2.1-2.1" />
          <path d="M17.7 6.3l2.1-2.1" />
        </g>
      </svg>
    )
  }

  if (/cloud|overcast/i.test(condition)) {
    return (
      <svg className="icon cloud" viewBox="0 0 24 24" width="72" height="72" fill="none" aria-hidden>
        <path d="M20 17.5A4.5 4.5 0 0 0 15.5 13H8a4 4 0 0 0 0 8h11z" fill="#D3E3F8" />
        <path d="M16 11a3.5 3.5 0 0 0-6.9-1A4 4 0 0 0 6 14h10" stroke="#9FBCE6" strokeWidth=".8" fill="none" />
      </svg>
    )
  }

  if (/rain|showers/i.test(condition)) {
    return (
      <svg className="icon rain" viewBox="0 0 24 24" width="72" height="72" fill="none" aria-hidden>
        <path d="M7 13a4 4 0 0 1 0-8 5 5 0 0 1 9 2h1" stroke="#9FBCE6" strokeWidth="1" fill="#D3E3F8" />
        <g stroke="#5DA6E5" strokeWidth="1.2" strokeLinecap="round">
          <path d="M8.5 18l-.8 1.6" />
          <path d="M12 18l-.8 2" />
          <path d="M15.5 18l-.8 1.4" />
        </g>
      </svg>
    )
  }

  // default / unknown: partly-cloudy icon
  return (
    <svg className="icon default" viewBox="0 0 24 24" width="72" height="72" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="3" fill="#FFD166" />
      <path d="M20 17.5A4.5 4.5 0 0 0 15.5 13H9a4 4 0 0 0 0 8h9z" fill="#D3E3F8" />
    </svg>
  )
}

export default function WeatherCard({ city, current }) {
  return (
    <div className="weather-card" role="region" aria-label="current-weather">
      <div className="left">
        <Icon condition={current.condition} />
      </div>

      <div className="middle">
        <h2 className="city">{city}</h2>
        <div className="current">
          <span className="temp">{current.temp}°C</span>
          <span className="cond">{current.condition}</span>
        </div>
        <p className="summary">{current.summary}</p>
      </div>

      <div className="right">
        <div className="meta">
          <div>
            <div className="meta-val">{current.high}°</div>
            <div className="meta-label">High</div>
          </div>
          <div>
            <div className="meta-val">{current.low}°</div>
            <div className="meta-label">Low</div>
          </div>
        </div>
      </div>
    </div>
  )
}
