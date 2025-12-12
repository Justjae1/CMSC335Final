export default function HourlyForecast({ data, onBack }) {
    return (
        <div className="hourly-forecast">
            <button className="btn" onClick={onBack}>Back to Weekly Forecast</button>

            <div className="hourly-cards">
                {data.map((hour, i) => (
                    <div className="hour-card" key={i}>
                        <div>{hour.time}</div>
                        <img src = {`https:${hour.icon}`} alt="hour icon" style={{width: "50px", height: "50px"}} />
                        <div>{hour.temp}°C</div>
                    </div>
                ))}
            </div>
        </div>
    );
}