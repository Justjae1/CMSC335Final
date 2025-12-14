const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const UserWeatherSchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
  country: String,
  weeklyWeather: Array,
  createTime: { type: Date, default: Date.now }
});
const UserWeather = mongoose.model('UserWeather', UserWeatherSchema);


router.post('/save', async (req, res) => {
  try {
    const userWeather = new UserWeather(req.body);
    await userWeather.save();
    res.json({ msg: 'data success' });
  } catch (err) {
    res.status(500).json({ msg: 'Error', error: err.message });
  }
});

module.exports = router;