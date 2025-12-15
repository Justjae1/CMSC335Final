import React, { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import UserForm from "./UserForm";
import WeatherDashboard from "./WeatherDashboard";
import "./App.css";

export default function App() {
    const [page, setPage] = useState("welcome");
    const [userData, setUserData] = useState(null);

    // updates
    const handleFormSubmit = (data) => {
        setUserData(data);
        setPage("dashboard");
    }

    return (
        <>
            {page === "welcome" && (<WelcomeScreen onContinue={() => setPage("form")} />)}

            {page === "form" && (
                <UserForm onSubmit={handleFormSubmit} />

            )}

            {page === "dashboard" && userData && (<WeatherDashboard user={userData} />
            )}

        </>
    );
}