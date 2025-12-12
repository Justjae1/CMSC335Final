export default function HourlyForecast({ data }) {
    return (
        <div className="hourly-forecast">
            {data.map((x, i) => (
                <div className="hour-block" key={i}>
                    <div style={{ fontSize: "1.4rem" }}>{x.time}</div>
                    <div style={{ fontSize: "3rem" }}>{x.icon}</div>
                    <div style={{ fontSize: "1.6rem" }}>{x.temp}</div>
                </div>
            ))}
        </div>
    );
}