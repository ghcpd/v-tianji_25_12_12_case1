import React from 'react'

function DayIcon({ condition }) {
  if (/sun/i.test(condition)) return <span className="day-ico">☀️</span>
  if (/cloud/i.test(condition)) return <span className="day-ico">☁️</span>
  if (/rain/i.test(condition)) return <span className="day-ico">🌧️</span>
  return <span className="day-ico">⛅</span>
}

export default function Forecast({ forecast }) {
  return (
    <ul className="forecast" role="list">
      {forecast.map((d) => (
        <li key={d.day} className="forecast-item" role="listitem">
          <div className="f-day">{d.day}</div>
          <DayIcon condition={d.condition} />
          <div className="f-temps">
            <span className="high">{d.high}°</span>
            <span className="low">{d.low}°</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
