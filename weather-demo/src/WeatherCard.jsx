export default function WeatherCard({ day, temp,icon, onClick }) {
    const dateFormat = new Date(day).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }); 

    return (
        <div className="weather-card" onClick={onClick}>
            <h3>{dateFormat}</h3>
            <img src={`https:${icon}`}
                alt="weather icon"
                style={{width:"50px", height: "50px"}}
                />
            <p>{temp}°C</p>
        </div>
    );
}