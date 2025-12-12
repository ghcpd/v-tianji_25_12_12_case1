import { render } from '@testing-library/react'
import TempChart from '../TempChart'

it('renders chart without crashing', () => {
  const hourly = Array.from({ length: 6 }, (_, i) => ({ time: `${i}:00`, temp: i + 10 }))
  const { container } = render(<TempChart hourly={hourly} />)
  expect(container.querySelector('canvas')).toBeTruthy()
})
