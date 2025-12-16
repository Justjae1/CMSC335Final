import React, { useEffect, useState } from "react";
import HourlyForecast from "./HourlyForecast";
import weatherUser from "./weatherUser.png";

export default function WeatherDashboard({ user }) {
    const [weeklyData, setWeeklyData] = useState([]);
    const [country, setCountry] = useState("");
    const [selectedDay, setSelectedDay] = useState(null);

    const countryCheck = country.toLowerCase() === "united states of america";

    useEffect(() => {
        if (!user || !user.location) return;
        const API_BASE = process.env.REACT_APP_API_BASE_URL;
        fetch(`${API_BASE}/api/weather/${encodeURIComponent(user.location)}`)
            .then((res) => res.json())
            .then((data) => {
                setWeeklyData(data.weekly || []);
                setCountry(data.country || "");
            })
            .catch((err) => console.error(err));
    }, [user]);

    if (!user) return <div>Please submit the form first.</div>;

    return (
        <div className="dashboard-container">
            <img
                src={weatherUser}
                alt="User Weather"
                style={{ width: "120px", height: "120px", marginBottom: "1rem" }}
            />

            {!selectedDay && <h2>Welcome {user.name}!</h2>}
            <h2>
                {!selectedDay
                    ? `Here's the weekly forecast of ${user.location}`
                    : `Here's your hour-by-hour breakdown of ${user.location}`}
            </h2>

            {!selectedDay ? (
                <div className="weather-cards">
                    {weeklyData.map((day, idx) => {
                        const temp = countryCheck
                            ? Math.round(day.temp_f)
                            : Math.round(day.temp_c);
                        const unit = countryCheck ? "°F" : "°C";

                        return (
                            <div
                                key={idx}
                                className="weather-card"
                                onClick={() => setSelectedDay(day)}
                            >
                                <h3>
                                    {new Date(day.day).toLocaleDateString(undefined, {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </h3>
                                <img
                                    src={`https:${day.icon}`}
                                    alt="weather icon"
                                    style={{ width: "64px", height: "64px" }}
                                />
                                <p>{temp}{unit}</p>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <HourlyForecast
                    data={selectedDay.hourly}
                    country={country}
                    onBack={() => setSelectedDay(null)}
                />
            )}
        </div>
    );
}
