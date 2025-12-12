import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import HourlyForecast from "./HourlyForecast";
import { fetchWeather } from "./api/weather";

export default function WeatherDashboard({ user }) {
    const [weekly, setWeekly] = useState([]);
    const [selectedDay, setSelectedDay] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadWeather = async (location) => {
        setLoading(true);
        const data = await fetchWeather(location);
        const weeklyData = data.weekly.map((day, i) => ({
            ...day,
            hourly: data.hourly[i] ? data.hourly[i] : [],
        }));
        setWeekly(weeklyData);
        // setHourly(data.hourly);
        setLoading(false);
    };

    useEffect(() => {
        if (user?.location) loadWeather(user.location);
    }, [user?.location]);

    if (!user) return null;

    return (
        <div className="dashboard-container">
            <h2 style={{ fontSize: "2.8rem" }}>Welcome, {user.name}</h2>
            <p style={{ fontSize: "1.6rem" }}>Here's your weekly forecast for {user.location}</p>


            {loading ? (
                <p style={{ fontSize: "1.8rem" }}>Loading weather...</p>
            ) : selectedDay ? (
                <HourlyForecast data={selectedDay.hourly} onBack={() => setSelectedDay(null)} />
            ) : (
                <div className="weather-cards">
                    {weekly.map((day, i) => (
                        <WeatherCard key={i} day={day.day} temp={day.temp} icon={day.icon} onClick={() => setSelectedDay(day)} />
                    ))}
                </div>

            )}
        </div>
    );
}