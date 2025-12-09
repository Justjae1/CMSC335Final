import React, {useEffect, useState} from "react";
import WeatherCard from "./src/WeatherCard";
import HourlyForecast from "./src/HourlyForecast";
import SearchBar from "./src/SearchBar";
import {fetchWeather} from "./api/weather";

export default function WeatherDashboard({ user }) {
    const[weekly, setWeekly] = useState([]);
    const[hourly, setHourly] = useState([]);
    const[loading, setLoading] = useState(true);

    const loadWeather = async (location) => {
        setLoading(true);
        const data = await fetchWeather(location);
        setWeekly(data.weekly);
        setHourly(data.hourly);
        setLoading(false);
    };

    useEffect(() =>{
        loadWeather(user.location);
    }, []);

    return (
        <div className ="dashboard-container">
            <h2 style ={{fontSize: "2.8rem"}}>Welcome, {user.name}</h2>
            <p style ={{fontSize: "1.6rem"}}>Here's your weekly forecast for {user.location}</p>

            <SearchBar onSearch={loadWeather} />

            {loading ? (
                <p style = {{ fontSize: "1.8rem"}}>Loading weather...</p>
            ) : (
                <>
                <div className="weather-cards">
                    {weekly.map((x,i) =>(
                        <WeatherCard key = {i} day={x.day} temp={x.temp} icon={x.icon} />
                    ))}
                </div>

                <h3 stlye ={{fontsize: "2rem" }}>Hourly Forecast</h3>
                <HourlyForecast data={hourly} />
                </>
            )}
        </div>
    );
}