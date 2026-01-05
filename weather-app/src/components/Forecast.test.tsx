import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Forecast } from '@/components/Forecast'
import { mockForecast } from '@/services/mockWeatherData'

describe('Forecast Component', () => {
  it('should render forecast title', () => {
    render(<Forecast data={mockForecast} />)
    expect(screen.getByText('5-Day Forecast')).toBeInTheDocument()
  })

  it('should display forecast items', () => {
    const { container } = render(<Forecast data={mockForecast} />)
    const forecastCards = container.querySelectorAll('.bg-white\\/5')
    expect(forecastCards.length).toBeGreaterThan(0)
  })

  it('should render temperature values', () => {
    render(<Forecast data={mockForecast} />)
    // Should have at least one temperature value
    const temps = screen.getAllByText(/°/)
    expect(temps.length).toBeGreaterThan(0)
  })

  it('should display weather conditions', () => {
    render(<Forecast data={mockForecast} />)
    // Should display at least one weather condition
    const weatherElements = screen.getAllByText(/Clear|Clouds|Rain/i)
    expect(weatherElements.length).toBeGreaterThan(0)
  })

  it('should display humidity and wind info', () => {
    const { container } = render(<Forecast data={mockForecast} />)
    // Should have humidity and wind indicators
    expect(container.textContent).toMatch(/💧|💨/)
  })

  it('should have proper styling classes', () => {
    const { container } = render(<Forecast data={mockForecast} />)
    expect(container.querySelector('.glass-effect')).toBeInTheDocument()
  })

  it('should display only first 6 forecast items', () => {
    const { container } = render(<Forecast data={mockForecast} />)
    const forecastCards = container.querySelectorAll('.bg-white\\/5')
    expect(forecastCards.length).toBeLessThanOrEqual(6)
  })
})
