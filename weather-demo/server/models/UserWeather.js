const mongoose = require('mongoose');

const UserWeatherSchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
  country: String,
  weeklyWeather: Array,
  createTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserWeather', UserWeatherSchema);