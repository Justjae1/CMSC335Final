export default function WeatherCard({day, temp, icon}) {
    return (
        <div className = "weather-card">
            <h3 style ={{fontSize: "2rem"}}>{day}</h3>
            <div style ={{fontSize: "4rem"}}>{icon}</div>
            <p style={{fontSize: "1.6rem"}}>{temp}</p>
        </div>
    );
}