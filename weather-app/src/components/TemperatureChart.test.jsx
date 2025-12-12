import { render, screen } from '@testing-library/react';
import TemperatureChart from '../components/TemperatureChart';

const mockData = [
  { time: "12:00", temp: 22 },
  { time: "13:00", temp: 24 }
];

describe('TemperatureChart', () => {
  test('renders chart title', () => {
    render(<TemperatureChart data={mockData} />);
    
    expect(screen.getByText('Temperature Trend')).toBeInTheDocument();
  });
});