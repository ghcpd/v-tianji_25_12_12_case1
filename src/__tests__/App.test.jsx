import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App UI', () => {
  test('renders city name and current weather', () => {
    render(<App />)
    expect(screen.getByText(/San Francisco/i)).toBeInTheDocument()
    expect(screen.getByText(/Temperature|Temperature/)).toBeInTheDocument()
    expect(screen.getByText(/7‑Day Forecast|7-Day Forecast/)).toBeInTheDocument()
  })

  test('shows forecast items', () => {
    render(<App />)
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBeGreaterThanOrEqual(3)
  })
})
