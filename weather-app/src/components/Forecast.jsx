import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiDayCloudy } from 'react-icons/wi';

const iconMap = {
  sunny: WiDaySunny,
  cloudy: WiCloudy,
  rainy: WiRain,
  'partly-cloudy': WiDayCloudy
};

const Forecast = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">5-Day Forecast</h3>
      <div className="space-y-4">
        {data.map((day, index) => {
          const Icon = iconMap[day.icon] || WiDaySunny;
          return (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <Icon className="text-3xl mr-3" />
                <div>
                  <div className="font-semibold">{day.day}</div>
                  <div className="text-sm text-gray-600">{day.condition}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{day.high}°</div>
                <div className="text-sm text-gray-500">{day.low}°</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;