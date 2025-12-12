import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler, Legend)

export default function TempChart({ forecast }) {
  const labels = forecast.map((d) => d.dayShort || d.day)
  const data = {
    labels,
    datasets: [
      {
        label: 'High',
        data: forecast.map((d) => d.high),
        borderColor: '#FF8C42',
        backgroundColor: 'rgba(255,140,66,0.16)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
      },
      {
        label: 'Low',
        data: forecast.map((d) => d.low),
        borderColor: '#6EA8FE',
        backgroundColor: 'rgba(110,168,254,0.08)',
        tension: 0.4,
        fill: false,
        pointRadius: 3,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index' },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: 'rgba(200,200,200,0.06)' }, ticks: { precision: 0 } },
    },
  }

  return (
    <div className="temp-chart">
      <Line data={data} options={options} />
    </div>
  )
}
