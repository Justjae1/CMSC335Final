import React, { useState } from "react";

export default function UserForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !age || !location) {
            alert("Please fill the form completely.");
            return;
        }

        const user = {
            name: name.charAt(0).toUpperCase() + name.slice(1),
            age: Number(age),
            location: location.charAt(0).toUpperCase() + location.slice(1)
        };
<<<<<<< HEAD
        try { 
            await fetch(`${API_BASE}/api/form/save`, {
=======

        try {
            const res = await fetch(`/api/form/save`, {
>>>>>>> e7ec9a1 (updated files)
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            if (!res.ok) {
                throw new Error("Failed to save user");
            }

            onSubmit(user);
        } catch (err) {
            console.error(err);
            alert("Could not save user data.");
        }
    };

    return (
        <div className="form-container">
            <h2 style={{ fontSize: "2rem" }}>Want to find the weather in your city?<br></br>
                <br></br>Fill out the form below to get started!</h2><br></br>
            <form onSubmit={handleSubmit}>
                <br></br><input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br></br>
                <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} /><br></br>
                <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} /><br></br><br></br>
                <button type="submit" className="btn">
                    Continue
                </button>
            </form>


        </div>
    );
}