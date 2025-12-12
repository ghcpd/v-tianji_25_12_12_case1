import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiDayCloudy } from 'react-icons/wi';

const iconMap = {
  sunny: WiDaySunny,
  cloudy: WiCloudy,
  rainy: WiRain,
  'partly-cloudy': WiDayCloudy
};

const CurrentWeather = ({ data }) => {
  const Icon = iconMap[data.icon] || WiDaySunny;

  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">{data.location}</h2>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-6xl font-light">{data.temperature}°C</div>
          <div className="text-xl">{data.condition}</div>
        </div>
        <Icon className="text-8xl" />
      </div>
      <div className="mt-4 flex justify-between text-sm">
        <div>Humidity: {data.humidity}%</div>
        <div>Wind: {data.windSpeed} km/h</div>
      </div>
    </div>
  );
};

export default CurrentWeather;