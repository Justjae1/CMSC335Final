import axios from 'axios';

export const fetchWeather = async (location) => {
  try {
    const response = await axios.get(`/api/weather/${location}`);
    const data = response.data;
    return {
      country: data.country,
      weekly: data.weekly,
      hourly: data.hourly
    };
  } catch (error) {
    console.error('Weather: ', error);
    return {
      country: '',
      weekly: [],
      hourly: []
    };
  }
};