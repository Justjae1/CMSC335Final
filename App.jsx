import React, {useState} from "react";
import WelcomeScreen from "./src/WelcomeScreen";
import UserForm from "./src/UserForm";
import WeatherDashboard from "./src/WeatherDashboard";
import "./App.css";

export default function App() {
    const [page, setPage] = useState("welcome");
    const [userDate, setUserData] = useState(null);

    return (
        <>
        {page ==="welcome" && <WelcomeScreen onContinue={() =>setPage("form")} />}

            {page === "form" && (
                <UserForm onSubmit ={(data) => {
                    setUserData(data);
                    setPage("dashboard");
                }}
                />
            )}
            {page === "dashboard" && <WeatherDashboard user = {userData} />}
        
        </>
    );
}