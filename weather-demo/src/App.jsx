import React, {useState} from "react";
import WelcomeScreen from "./WelcomeScreen";
import UserForm from "./UserForm";
import WeatherDashboard from "./WeatherDashboard";
import "./App.css";

export default function App() {
    const [page, setPage] = useState("welcome");
    const [userData, setUserData] = useState(null);

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