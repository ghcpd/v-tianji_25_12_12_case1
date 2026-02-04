import React from 'react'

export default function ForecastList({ items }: { items: any[] }) {
  return (
    <div className="mt-4 space-y-2">
      <h3 className="text-sm font-medium text-slate-700">5-day Forecast</h3>
      <div className="flex gap-2 overflow-x-auto p-2">
        {items.map((it, idx) => (
          <div key={idx} className="min-w-[100px] p-3 rounded-lg bg-white/60 shadow">
            <div className="text-sm text-slate-600">{it.day}</div>
            <div className="text-2xl">{it.icon}</div>
            <div className="text-sm text-slate-500">{it.high}° / {it.low}°</div>
          </div>
        ))}
      </div>
    </div>
  )
}
