import React from 'react'
import { render, screen } from '@testing-library/react'
import ForecastList from '../components/ForecastList'

describe('ForecastList', () => {
  it('renders forecast items and chart canvas', () => {
    const forecasts = [
      { time: '08:00', temp: 18, icon: 'cloudy' },
      { time: '09:00', temp: 19, icon: 'cloudy' },
      { time: '10:00', temp: 21, icon: 'sunny' },
    ]
    render(<ForecastList forecasts={forecasts} />)

    expect(screen.getByText('08:00')).toBeInTheDocument()
    expect(screen.getByText('09:00')).toBeInTheDocument()
    expect(screen.getByText('10:00')).toBeInTheDocument()
    const canvas = document.querySelector('canvas')
    expect(canvas).toBeTruthy()
  })
})
