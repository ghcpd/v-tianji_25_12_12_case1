import { render, screen } from '@testing-library/react';
import Forecast from '../components/Forecast';

const mockData = [
  { day: "Today", high: 25, low: 18, condition: "Sunny", icon: "sunny" },
  { day: "Tomorrow", high: 23, low: 16, condition: "Cloudy", icon: "cloudy" }
];

describe('Forecast', () => {
  test('renders forecast data correctly', () => {
    render(<Forecast data={mockData} />);
    
    expect(screen.getByText('5-Day Forecast')).toBeInTheDocument();
    expect(screen.getByText('Today')).toBeInTheDocument();
    expect(screen.getByText('Sunny')).toBeInTheDocument();
    expect(screen.getByText('25°')).toBeInTheDocument();
    expect(screen.getByText('18°')).toBeInTheDocument();
  });
});