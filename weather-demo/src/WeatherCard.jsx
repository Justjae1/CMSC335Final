export default function WeatherCard({ day, temp, icon }) {
    return (
        <div className="weather-card">
            <h3 style={{ fontSize: "2rem" }}>{day}</h3>
            <img src={`1https:${icon}`}
                alt="weather icon"
                style={{ width: "8rem", height: "4rem" }} />
            <p style={{ fontSize: "1.6rem" }}>{temp}°C</p>
        </div>
    );
}