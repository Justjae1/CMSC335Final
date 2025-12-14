/* backend route :weather.js */

const express = require('express');
const router = express.Router();
const axios = require('axios');

const BASE_URL = process.env.WEATHER_API_BASE_URL;
const API_KEY = process.env.WEATHER_API_KEY;

router.get('/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: { key: API_KEY, q: city, days: 7, aqi: 'no', alerts: 'no' }
    });
    const data = response.data;

   
    const weekly = data.forecast.forecastday.map(day => ({
      day: day.date,
      temp_c: day.day.avgtemp_c,
      temp_f: day.day.avgtemp_f,
      icon: day.day.condition.icon,
      hourly: day.hour.map(hour => ({
        time: hour.time.split(' ')[1],
        temp_c: hour.temp_c,
        temp_f: hour.temp_f,
        icon: hour.condition.icon,
        condition: hour.condition.text
      }))
    }));

  

    res.json({
      country: data.location.country,
      weekly
    });
  } catch (err) {
    res.status(400).json({ 
      msg: `${city} Failed`,
      weekly: [],
    });
  }
});

module.exports = router;