/*frontend fetcher :weather.js */
const API_BASE = process.env.REACT_APP_API_BASE_URL;
export const fetchWeather = async (location) => {
  const url = `${API_BASE}/api/weather/${encodeURIComponent(location)}`;
  const res = await fetch(url);
  if(!res.ok){
    return;
  }
  return res.json()
};