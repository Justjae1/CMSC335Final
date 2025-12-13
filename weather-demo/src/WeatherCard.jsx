export default function WeatherCard({ day, tempC, tempF, country, icon, onClick }) {
    const dateFormat = new Date(day).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }); 
    const countryCheck = country.toLowerCase() === "united states of america";
    const tempFormat = countryCheck? Math.round(tempF) : Math.round(tempC);
    const unit = countryCheck ? "°F" : "°C";
    return (   
        <div className="weather-card" onClick={onClick}>
            <h3>{dateFormat}</h3>
            <img src={`https:${icon}`}
                alt="weather icon"
                style={{width:"50px", height: "50px"}}
                />
            <p>{tempFormat}{unit}</p>
        </div>
    );
}