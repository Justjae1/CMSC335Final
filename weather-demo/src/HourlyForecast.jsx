export default function HourlyForecast({ data = [], onBack, country = "" }) {
    const countryCheck = country.toLowerCase() === "united states of america";

    return (
        <div className="hourly-forecast">
            <button className="btn" onClick={onBack}>Back to Weekly Forecast</button>

            <div className="hour-cards-horizontal">
                {data.map((hour, i) => {
                    const temp = countryCheck
                        ? Math.round(Number(hour.temp_f) || Number(hour.temp_c) || 0)
                        : Math.round(Number(hour.temp_c) || Number(hour.temp_f) || 0);
                    const unit = countryCheck ? "°F" : "°C";

                    return (
                        <div className="hour-card" key={i}>
                            <div>{hour.time}</div>
                            <img
                                src={`https:${hour.icon}`}
                                alt="hour icon"
                                style={{ width: "50px", height: "50px" }}
                            />
                            <div>{temp}{unit}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}