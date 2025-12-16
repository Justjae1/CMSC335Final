# CMSC335Final

            **Submitted by:** Reza Amanahu (ramanahu)
            **Group Members:** Jalen Henson (jhenson1), Jinye Deng (jdeng123), Reza Amanahu (ramanahu)
            **App Description:** Weather Dashboard App is a full-stack web application that provides real-time, location-based weather forecasts. Users start on a welcome screen, where they enter their information into a form. After submission, the app dynamically fetches weekly and hourly weather data from an external API and displays it in a responsive, visually engaging dashboard.
            **Youtube link:** [https://www.youtube.com/watch?v=OcDZ8mza2q4](https://www.youtube.com/watch?v=OcDZ8mza2q4)
            **APIs:** [Weather Api](https://www.weatherapi.com/)
            **Contact Email:**  ramanahu@umd.edu
            **Deployed App Link:** [https://cmsc335final-1-im8j.onrender.com]([https://cmsc335final-1-im8j.onrender.com])

How to run the app: 
            git clone https://github.com/Justjae1/CMSC335Final.git 
            cd weather-demo
            npm install 
            cd server
            npm install 

            make .env file in server and copy:
            MONGO_CONNECTION_STRING = `mongodb+srv://weatherUser:IGZAafADpHtXDvbo@cluster0.1cihhuw.mongodb.net/?appName=Cluster0`
            WEATHER_API_BASE_URL=https://api.weatherapi.com/v1
            WEATHER_API_KEY=6e011f18b2f645258ab191031250912
            REACT_APP_API_BASE_URL=https://cmsc335final-zu5b.onrender.com/

            cd into weather-demo/server:
            node server.js(run backend)

            cd into weather-demo(cd ..)
            npm start