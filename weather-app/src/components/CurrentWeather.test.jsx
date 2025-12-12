import { render, screen } from '@testing-library/react';
import CurrentWeather from '../components/CurrentWeather';

const mockData = {
  location: "New York, NY",
  temperature: 22,
  condition: "Sunny",
  humidity: 65,
  windSpeed: 10,
  icon: "sunny"
};

describe('CurrentWeather', () => {
  test('renders weather data correctly', () => {
    render(<CurrentWeather data={mockData} />);
    
    expect(screen.getByText('New York, NY')).toBeInTheDocument();
    expect(screen.getByText('22°C')).toBeInTheDocument();
    expect(screen.getByText('Sunny')).toBeInTheDocument();
    expect(screen.getByText('Humidity: 65%')).toBeInTheDocument();
    expect(screen.getByText('Wind: 10 km/h')).toBeInTheDocument();
  });
});