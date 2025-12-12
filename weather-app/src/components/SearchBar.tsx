import React, { useState } from 'react'

export default function SearchBar({ defaultQuery, onSearch }: { defaultQuery: string; onSearch: (q: string) => void }) {
  const [q, setQ] = useState(defaultQuery)
  return (
    <div className="flex items-center gap-2">
      <input
        aria-label="Search location"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="flex-1 rounded-lg p-3 border bg-white/60"
      />
      <button
        onClick={() => onSearch(q)}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Search
      </button>
    </div>
  )
}
