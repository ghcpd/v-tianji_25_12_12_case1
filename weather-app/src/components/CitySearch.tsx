import React from 'react'
import { cityList } from '@/services/mockWeatherData'

interface CitySearchProps {
  onCitySelect: (city: string) => void
  isLoading: boolean
}

export const CitySearch: React.FC<CitySearchProps> = ({ onCitySelect, isLoading }) => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)

  const filteredCities = cityList.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelect = (city: string) => {
    setSearchQuery('')
    setIsOpen(false)
    onCitySelect(city)
  }

  return (
    <div className="relative w-full md:w-96">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          disabled={isLoading}
          className="w-full px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:border-white/40 disabled:opacity-50"
        />
        <button
          onClick={() => handleSelect(searchQuery)}
          disabled={!searchQuery || isLoading}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? '⏳' : '🔍'}
        </button>
      </div>

      {isOpen && filteredCities.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-slate-900 border border-white/20 rounded-2xl shadow-2xl z-50">
          {filteredCities.map((city) => (
            <button
              key={city.name}
              onClick={() => handleSelect(city.name)}
              disabled={isLoading}
              className="w-full px-4 py-3 text-left text-white hover:bg-white/10 first:rounded-t-2xl last:rounded-b-2xl transition-colors disabled:opacity-50"
            >
              <span className="font-semibold">{city.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
