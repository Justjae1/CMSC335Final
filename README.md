# CMSC335Final

**Submitted by:** Reza Amanahu (ramanahu) <br>
**Group Members:** Jalen Henson (jhenson1), Jinye Deng (jdeng123), Reza Amanahu (ramanahu)<br>
**App Description:** Weather Dashboard App is a full-stack web application that provides real-time, location-based weather forecasts. Users start on a welcome screen, where they enter their information into a form. After submission, the app dynamically fetches weekly and hourly weather data from an external API and displays it in a responsive, visually engaging dashboard.<br>
**Youtube link:** [https://www.youtube.com/watch?v=OcDZ8mza2q4](https://www.youtube.com/watch?v=OcDZ8mza2q4)<br>
**APIs:** [Weather Api](https://www.weatherapi.com/)<br>
**Contact Email:**  ramanahu@umd.edu <br>
**Deployed App Link:** [https://cmsc335final-1-im8j.onrender.com]([https://cmsc335final-1-im8j.onrender.com])<br>

**How to run the app:** <br>
git clone https://github.com/Justjae1/CMSC335Final.git <br>
cd weather-demo <br>
npm install <br>
cd server <br>
npm install <br>

make .env file in server and copy:<br>
MONGO_CONNECTION_STRING = `mongodb+srv://weatherUser:IGZAafADpHtXDvbo@cluster0.1cihhuw.mongodb.net/?appName=Cluster0`<br>
WEATHER_API_BASE_URL=https://api.weatherapi.com/v1<br>
WEATHER_API_KEY=6e011f18b2f645258ab191031250912 <br>
REACT_APP_API_BASE_URL=https://cmsc335final-zu5b.onrender.com/<br>

cd into weather-demo/server:<br>
node server.js(run backend)<br>

cd into weather-demo(cd ..)<br>
npm start <br>
make sure to comment this code out lines 16 - 17 in weatherDashboard.jsx and replace it with this line **fetch(`/api/weather/${encodeURIComponent(user.location)}`)** to run the program locally. This code is currently set up to work and display properly only on our render link (available above). <br>

Thank you!<br>