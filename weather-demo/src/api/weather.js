/*frontend fetcher :weather.js */

import axios from 'axios';

export const fetchWeather = async (location) => {
  try {
    const response = await axios.get(`/api/weather/${location}`);
    return response.data;

  } catch (error) {
    console.error('Weather: ', error);
    return {
      country: '',
      weekly: [],
    };
  }
};