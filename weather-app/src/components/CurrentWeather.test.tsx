import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CurrentWeather } from '@/components/CurrentWeather'
import { mockCurrentWeather } from '@/services/mockWeatherData'

describe('CurrentWeather Component', () => {
  it('should render city name', () => {
    render(<CurrentWeather data={mockCurrentWeather} />)
    expect(screen.getByText('New York')).toBeInTheDocument()
  })

  it('should display weather description', () => {
    render(<CurrentWeather data={mockCurrentWeather} />)
    expect(screen.getByText('clear sky')).toBeInTheDocument()
  })

  it('should display current temperature', () => {
    render(<CurrentWeather data={mockCurrentWeather} />)
    expect(screen.getByText('72°')).toBeInTheDocument()
  })

  it('should display feels like temperature', () => {
    render(<CurrentWeather data={mockCurrentWeather} />)
    expect(screen.getByText('70°')).toBeInTheDocument()
  })

  it('should display humidity', () => {
    render(<CurrentWeather data={mockCurrentWeather} />)
    expect(screen.getByText('65%')).toBeInTheDocument()
  })

  it('should display wind speed', () => {
    render(<CurrentWeather data={mockCurrentWeather} />)
    expect(screen.getByText('8 m/s')).toBeInTheDocument()
  })

  it('should display pressure', () => {
    render(<CurrentWeather data={mockCurrentWeather} />)
    expect(screen.getByText('1013 hPa')).toBeInTheDocument()
  })

  it('should display sunrise and sunset times', () => {
    render(<CurrentWeather data={mockCurrentWeather} />)
    expect(screen.getByText('Sunrise')).toBeInTheDocument()
    expect(screen.getByText('Sunset')).toBeInTheDocument()
  })

  it('should have glass-effect class', () => {
    const { container } = render(<CurrentWeather data={mockCurrentWeather} />)
    expect(container.querySelector('.glass-effect')).toBeInTheDocument()
  })
})
