require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;


const weatherRouter = require('./routes/weather.js');
app.use('/api/weather', weatherRouter);

const formRouter = require('./routes/formRouter.js'); 
app.use('/api/form', formRouter);


const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGO_CONNECTION_STRING;


mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB good ！'))
  .catch(err => console.error('MongoDB failed：', err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));


app.get('/api/test', (req, res) => {
  res.json({ msg: 'Express start！' });
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});