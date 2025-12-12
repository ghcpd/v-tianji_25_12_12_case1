import React from 'react'
import { render, screen } from '@testing-library/react'
import WeatherCard from '../components/WeatherCard'

describe('WeatherCard', () => {
  it('renders temperature and description', () => {
    render(
      <WeatherCard
        data={{
          temp: 20.4,
          feels_like: 20,
          description: 'Clear sky',
          humidity: 50,
          wind_speed: 6,
          icon: 'sunny',
        }}
      />,
    )

    expect(screen.getByText(/20°C/)).toBeInTheDocument()
    expect(screen.getByText(/Clear sky/)).toBeInTheDocument()
  })
})
