export default function WeatherCard({ day, temp, icon, onClick }) {
    return (
        <div className="weather-card" onClick={onClick}>
            <h3>{day}</h3>
            <img src={`https:${icon}`}
                alt="weather icon"
                style={{width:"50px", height: "50px"}}
                />
            <p>{temp}°C</p>
        </div>
    );
}