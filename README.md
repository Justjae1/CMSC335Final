# CMSC335Final

A page where the user types in their city, date* and maybe their name 
From there, a weather page will be displayed that shows the weather based on a mongoose query. 

How to run app: 
git clong <rep url>
cd weather-demo
npm install (need dependecies)
cd server
npm install(need dependecies for backend)

make .env file in server and copy:
MONGO_CONNECTION_STRING = `mongodb+srv://weatherUser:IGZAafADpHtXDvbo@cluster0.1cihhuw.mongodb.net/?appName=Cluster0`
WEATHER_API_BASE_URL=https://api.weatherapi.com/v1
WEATHER_API_KEY=6e011f18b2f645258ab191031250912

cd into weather-demo/server:
node server.js(run backend)

cd into weather-demo(cd ..)
npm start

Youtube link: https://www.youtube.com/watch?v=OcDZ8mza2q4
App Description: Weather Dashboard App is a full-stack web application that provides real-time, location-based weather forecasts. Users start on a welcome screen, where they enter their information into a form. After submission, the app dynamically fetches weekly and hourly weather data from an external API and displays it in a responsive, visually engaging dashboard.


