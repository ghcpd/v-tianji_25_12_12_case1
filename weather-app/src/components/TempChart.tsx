import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function TempChart({ hourly }: { hourly: any[] }) {
  const labels = hourly.map((h) => h.time)
  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature °C',
        data: hourly.map((h) => h.temp),
        borderColor: 'rgba(99,102,241,1)',
        backgroundColor: 'rgba(99,102,241,0.1)'
      }
    ]
  }

  return (
    <div className="p-4 rounded-lg bg-white/60 shadow">
      <h3 className="text-sm font-medium text-slate-700 mb-2">24-hour Temperature</h3>
      <Line data={data} />
    </div>
  )
}
