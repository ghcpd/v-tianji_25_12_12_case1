import React from 'react'

export default function CurrentWeather({ data, location }: { data: any; location: string }) {
  return (
    <div className="p-4 rounded-lg bg-gradient-to-br from-white to-slate-100 shadow">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{location}</h2>
          <p className="text-sm text-slate-600">{data.condition}</p>
        </div>
        <div className="text-right">
          <div className="text-4xl">{data.icon}</div>
          <div className="text-sm text-slate-500">Feels like {data.feels_like}°C</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-sm text-slate-600">
        <div className="col-span-2 text-3xl font-semibold">{data.temp}°C</div>
        <div className="flex flex-col gap-1">
          <div>Humidity: {data.humidity}%</div>
          <div>Wind: {data.wind_kph} kph</div>
        </div>
      </div>
    </div>
  )
}
