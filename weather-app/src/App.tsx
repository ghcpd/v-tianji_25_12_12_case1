import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import ForecastList from './components/ForecastList'
import TempChart from './components/TempChart'
import mockData from './mock/mockWeather'

export type WeatherData = typeof mockData

export default function App() {
  const [data, setData] = useState<WeatherData | null>(null)
  const [query, setQuery] = useState('San Francisco')

  useEffect(() => {
    // for the demo we use mock data, but it looks like fetching from API is easy to plug in
    setData(mockData)
  }, [])

  const handleSearch = (q: string) => {
    setQuery(q)
    // In a real app we'd fetch here; keep mock
    setData(mockData)
  }

  if (!data) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur rounded-3xl shadow-xl p-6">
        <SearchBar defaultQuery={query} onSearch={handleSearch} />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <CurrentWeather data={data.current} location={query} />
            <ForecastList items={data.daily} />
          </div>
          <div className="md:col-span-2">
            <TempChart hourly={data.hourly} />
          </div>
        </div>
      </div>
    </div>
  )
}
