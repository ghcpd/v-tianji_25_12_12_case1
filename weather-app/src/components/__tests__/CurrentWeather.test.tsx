import { render, screen } from '@testing-library/react'
import CurrentWeather from '../CurrentWeather'

const data = { temp: 20, feels_like: 21, condition: 'Sunny', icon: '☀️', humidity: 40, wind_kph: 6 }

it('shows current weather info', () => {
  render(<CurrentWeather data={data} location="Testville" />)
  expect(screen.getByText(/Testville/)).toBeInTheDocument()
  expect(screen.getByText(/Sunny/)).toBeInTheDocument()
  expect(screen.getByText(/20°C/)).toBeInTheDocument()
})
