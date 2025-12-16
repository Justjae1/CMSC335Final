const express = require('express');
const router = express.Router();
const UserWeather = require('../models/UserWeather');

router.post('/save', async (req, res) => {
  try {
    console.log('Incoming:', req.body);

    const userWeather = new UserWeather(req.body);
    await userWeather.save();

    res.status(201).json({ msg: 'Saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Save failed', error: err.message });
  }
});

module.exports = router;