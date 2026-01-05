import React from 'react'
import { TemperatureChartData } from '@/types/weather'

interface TemperatureChartProps {
  data: TemperatureChartData[]
}

export const TemperatureChart: React.FC<TemperatureChartProps> = ({ data }) => {
  const minTemp = Math.min(...data.map((d) => d.feelsLike)) - 5
  const maxTemp = Math.max(...data.map((d) => d.temp)) + 5
  const range = maxTemp - minTemp

  const getPercentage = (temp: number): number => {
    return ((temp - minTemp) / range) * 100
  }

  return (
    <div className="glass-effect p-8 rounded-3xl slide-in w-full">
      <h2 className="text-3xl font-bold mb-6">Temperature Trend</h2>

      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-20 text-sm text-blue-100 font-medium">{item.time}</div>
            <div className="flex-1 flex items-end gap-2 h-20">
              {/* Feels Like */}
              <div className="relative w-full">
                <div className="absolute bottom-0 left-0 right-0 bg-blue-400/30 rounded-t-lg" style={{ height: `${getPercentage(item.feelsLike)}%` }}>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-blue-100 whitespace-nowrap">
                    {item.feelsLike}°
                  </div>
                </div>
              </div>
              {/* Actual Temp */}
              <div className="relative w-full">
                <div className="absolute bottom-0 left-0 right-0 bg-orange-400/50 rounded-t-lg" style={{ height: `${getPercentage(item.temp)}%` }}>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-orange-200 whitespace-nowrap">
                    {item.temp}°
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-400/30 rounded"></div>
          <span className="text-blue-100">Feels Like</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-400/50 rounded"></div>
          <span className="text-blue-100">Actual Temperature</span>
        </div>
      </div>
    </div>
  )
}
