import axios from 'axios';

// ----- Jinye ---help me check it ! ----------

const BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: location,
        days: 7
      }
    });

    const country = response.data.location.country; 

    const weeklyData = response.data.forecast.forecastday.map((day) => ({
      day: day.date,
      temp_c: day.day.avgtemp_c,
      temp_f: day.day.avgtemp_f,
      icon: day.day.condition.icon,

    }));


    const hourlyData = response.data.forecast.forecastday[0].hour.slice(0, 12).map((hour) => ({
      time: hour.time.split(' ')[1],
      temp: hour.temp_c,
      icon: hour.condition.icon,
      condition: hour.condition.text
    }));


    return {
      country: country, 
      weekly: weeklyData,
      hourly: hourlyData
    };

  } catch (error) {
    console.error('Error:', error);

    return {
      weekly: [],
      hourly: []
    };
  }
};

//------------------------------------