import { render, screen } from '@testing-library/react'
import App from '../App'

it('renders main app shell', () => {
  render(<App />)
  expect(screen.getByRole('textbox', { name: /search location/i })).toBeInTheDocument()
  expect(screen.getByText(/5-day Forecast/i)).toBeInTheDocument()
})
