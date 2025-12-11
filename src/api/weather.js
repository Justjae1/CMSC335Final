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
        aqi: "no", 
        alerts: "no"
      }
    });

   
    const weeklyData = response.data.forecast.forecastday.map((day) => ({
      date: day.date, 
      avgTemp: day.day.avgtemp_c, 
      maxTemp: day.day.maxtemp_c,
      icon: day.day.condition.icon,
      condition: day.day.condition.text
    }));

    
    const hourlyData = response.data.forecast.forecastday[0].hour.slice(0, 12).map((hour) => ({
      time: hour.time.split(' ')[1], 
      temp: hour.temp_c,
      icon: hour.condition.icon, 
      condition: hour.condition.text 
    }));

    
    return {
        location: response.data.location.name,
        region: response.data.location.region,
        country: response.data.locatoin.country,
        weekly: weeklyData,
        hourly: hourlyData
    };

  } catch (error) {
    console.error('Error:', error);  
    
    return {
        location: null,
        region: null,
        country: null,
        weekly: [],
        hourly:[]
    };
  }
};

//------------------------------------