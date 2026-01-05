import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { WeatherIcon } from '@/components/WeatherIcon'

describe('WeatherIcon Component', () => {
  it('should render with default size', () => {
    const { container } = render(<WeatherIcon iconCode="01d" />)
    const icon = container.querySelector('span')
    expect(icon).toHaveClass('w-12')
    expect(icon).toHaveClass('h-12')
  })

  it('should render with custom size', () => {
    const { container } = render(<WeatherIcon iconCode="01d" size="lg" />)
    const icon = container.querySelector('span')
    expect(icon).toHaveClass('w-24')
    expect(icon).toHaveClass('h-24')
  })

  it('should display sun icon for clear day', () => {
    const { container } = render(<WeatherIcon iconCode="01d" />)
    expect(container.textContent).toBe('☀️')
  })

  it('should display moon icon for clear night', () => {
    const { container } = render(<WeatherIcon iconCode="01n" />)
    expect(container.textContent).toBe('🌙')
  })

  it('should display cloud icon for cloudy', () => {
    const { container } = render(<WeatherIcon iconCode="03d" />)
    expect(container.textContent).toBe('☁️')
  })

  it('should display rain icon for rainy conditions', () => {
    const { container } = render(<WeatherIcon iconCode="09d" />)
    expect(container.textContent).toBe('🌧️')
  })

  it('should display default icon for unknown code', () => {
    const { container } = render(<WeatherIcon iconCode="unknown" />)
    expect(container.textContent).toBe('☁️')
  })

  it('should support all size options', () => {
    const sizes: Array<'sm' | 'md' | 'lg' | 'xl'> = ['sm', 'md', 'lg', 'xl']
    sizes.forEach((size) => {
      const { container } = render(<WeatherIcon iconCode="01d" size={size} />)
      const icon = container.querySelector('span')
      expect(icon).toBeInTheDocument()
    })
  })
})
