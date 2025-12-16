/*frontend fetcher :weather.js */

//import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE_URL;
export const fetchWeather = async (location) => {
  const url = `${API_BASE}/api/weather/${location}`;
  const res = await fetch(url);
  if(!res.ok){
    return;
  }
  return res.json()
  /*try {
    const response = await axios.get(`/api/weather/${location}`);
    return response.data;

  } catch (error) {
    console.error('Weather: ', error);
    return {
      country: '',
      weekly: [],
    };
  }*/
};