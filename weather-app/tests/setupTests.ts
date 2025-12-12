import '@testing-library/jest-dom'
import React from 'react'

// Mock chart rendering to avoid jsdom canvas limitations
vi.mock('react-chartjs-2', () => ({
  Line: (props: any) => {
    return React.createElement('canvas', { 'data-testid': 'chart' })
  }
}))
