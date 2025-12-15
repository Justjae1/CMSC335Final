import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";
import UserForm from "./UserForm";
import WeatherDashboard from "./WeatherDashboard";
import "./App.css";

export default function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreenWrapper />} />
        <Route path="/form" element={<FormPage setUserData={setUserData} />} />
        <Route path="/weatherdashboard" element={<WeatherDashboard user={userData} />} />
      </Routes>
    </Router>
  );
}

// Wrapper to handle navigation from WelcomeScreen
function WelcomeScreenWrapper() {
  const navigate = useNavigate();
  return <WelcomeScreen onContinue={() => navigate("/form")} />;
}

// Form page handles submission and navigates to dashboard
function FormPage({ setUserData }) {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    if (!data || !data.location) {
      alert("Please enter a city!");
      return;
    }

    setUserData(data);              // save the user data
    navigate("/weatherdashboard");  // navigate to dashboard
  };

  return <UserForm onSubmit={handleSubmit} />;
}
