# CMSC335Final
#NOTES FROM OUR MEETING [REMOVE BEFORE SUBMISSION] 
A page where the user types in their city, date* and maybe their name 
From there, a weather page will be displayed that shows the weather based on a mongoose query 
Jalen - Front End/UI  
Reza - Backend (The Landing Page, initial landing page [the form], and some of the weather landing page) 
One get, one post (estimation, make more if you need it) 
Jinye - (focusing on the weather landing page, adding in the api) 
One get, one post (estimation, make more if you need it)
Backend should be mainly functional by 12/11, final submission at 12/15 by 11:59 pm
API of Choice: Colorful Clouds https://open.caiyunapp.com/ColorfulClouds_Weather_API#Try_out_by_yourself 
Make sure to commit code as you go and push so no one overwrites each other's work. 
There is a video of this in the week 14 folder of Panopto. 

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

youtube link:
https://www.youtube.com/watch?v=OcDZ8mza2q4

