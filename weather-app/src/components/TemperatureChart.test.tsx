import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TemperatureChart } from '@/components/TemperatureChart'
import { mockTemperatureChart } from '@/services/mockWeatherData'

describe('TemperatureChart Component', () => {
  it('should render chart title', () => {
    render(<TemperatureChart data={mockTemperatureChart} />)
    expect(screen.getByText('Temperature Trend')).toBeInTheDocument()
  })

  it('should display all time labels', () => {
    render(<TemperatureChart data={mockTemperatureChart} />)
    mockTemperatureChart.forEach((item) => {
      expect(screen.getByText(item.time)).toBeInTheDocument()
    })
  })

  it('should display temperature values', () => {
    render(<TemperatureChart data={mockTemperatureChart} />)
    // Check for at least one temperature display
    const tempElements = screen.getAllByText(/^\d+°/)
    expect(tempElements.length).toBeGreaterThan(0)
  })

  it('should have legend for temperature types', () => {
    render(<TemperatureChart data={mockTemperatureChart} />)
    expect(screen.getByText('Feels Like')).toBeInTheDocument()
    expect(screen.getByText('Actual Temperature')).toBeInTheDocument()
  })

  it('should display color indicators in legend', () => {
    const { container } = render(<TemperatureChart data={mockTemperatureChart} />)
    const colorDivs = container.querySelectorAll('.bg-blue-400\\/30, .bg-orange-400\\/50')
    expect(colorDivs.length).toBeGreaterThan(0)
  })

  it('should have proper styling classes', () => {
    const { container } = render(<TemperatureChart data={mockTemperatureChart} />)
    expect(container.querySelector('.glass-effect')).toBeInTheDocument()
  })

  it('should handle empty data gracefully', () => {
    const { container } = render(<TemperatureChart data={[]} />)
    expect(container.querySelector('.glass-effect')).toBeInTheDocument()
  })
})
