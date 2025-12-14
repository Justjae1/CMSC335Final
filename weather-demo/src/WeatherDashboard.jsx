import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import HourlyForecast from "./HourlyForecast";
import { fetchWeather } from "./api/weather";
import weatherUser from "./weatherUser.png";
export default function WeatherDashboard({ user }) {
    const [weekly, setWeekly] = useState([]);
    const [selectedDay, setSelectedDay] = useState(null);
    const [loading, setLoading] = useState(true);
    const [country, setCountry] = useState("");

    const loadWeather = async (location) => {
        setLoading(true);
        const data = await fetchWeather(location);

        setCountry(data.country);
        setWeekly(data.weekly);
        setLoading(false);
    };

    useEffect(() => {
        if (user?.location) loadWeather(user.location);
    }, [user?.location]);

    if (!user) return null;

    return (
        <div className="dashboard-container">
            <img src={weatherUser}
                alt="cloudlogo"
                style={{ height: "250px", width: "250px", borderRadius: "50%", boxShadow: "5px 5px 15px 0px rgba(0, 0, 0, 0.3)" }} />
            <h2 style={{ fontSize: "2.8rem" }}>Welcome, {user.name}</h2>
            {!selectedDay ? (
                <p style={{ fontSize: "1.6rem" }}>Here's your weekly forecast for <strong>{user.location}</strong></p>
            ) : (
                <p style={{ fontSize: "1.6rem" }}>Here's the hour-by-hour breakdown of {user.location}</p>
            )}

            {loading ? (
                <p style={{ fontSize: "1.8rem" }}>Loading weather...</p>
            ) : selectedDay ? (
                <>
                    {console.log("Hourly data:", selectedDay.hourly)}
                    {console.log("Country:", country)}
                    <HourlyForecast
                        data={selectedDay.hourly}
                        onBack={() => setSelectedDay(null)}
                        country={country}
                    />
                    </>

            ) : (
                <div className="weather-cards">
                    {weekly.map((day, i) => (
                        <WeatherCard
                            key={i}
                            day={day.day}
                            tempC={day.temp_c}
                            tempF={day.temp_f}
                            country={country}
                            icon={day.icon}
                            onClick={() => setSelectedDay(day)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}