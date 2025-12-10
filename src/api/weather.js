import axios from 'axios';


const baseU   rl = "https://www.weatherapi.com/";
const api_Key ="6e011f18b2f645258ab191031250912";


// ----- Jinye ---help me check it ! ----------

const BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (location) => {
  try {    
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: location, 
        days: 7, 
        hours: 12 
      }
    });

   
    const weeklyData = response.data.forecast.forecastday.map(day => ({
      day: day.date, 
      temp: day.day.avgtemp_c, 
      icon: day.day.condition.icon 
    }));

    
    const hourlyData = response.data.forecast.forecastday[0].hour.slice(0, 12).map(hour => ({
      time: hour.time.split(' ')[1].slice(0, 5), 
      temp: hour.temp_c,
      icon: hour.condition.icon, 
      condition: hour.condition.text 
    }));

    
    return {
      weekly: weeklyData,
      hourly: hourlyData
    };
  } catch (error) {
    console.error('Error:', error);    
    return { weekly: [], hourly: [] };
  }
};

//------------------------------------