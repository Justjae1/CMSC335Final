
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

/* middleware */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* database */

const MONGODB_URI = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB good ！'))
  .catch(err => console.error('MongoDB failed：', err));


  /* api routes */
const weatherRouter = require('./routes/weather.js');
app.use('/api/weather', weatherRouter);

const formRouter = require('./routes/formRouter.js'); 
app.use('/api/form', formRouter);

app.use(express.static(path.join(__dirname, '../build')));

/* this allows React router to navigate page */
app.get('/weatherdashboard',(req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});