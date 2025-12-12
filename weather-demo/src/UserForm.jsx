import React, { useState } from "react";

export default function UserForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = () => {
        if (!name || !age || !location) return;
        onSubmit({ name, age, location: location.charAt(0).toUpperCase() + location.slice(1), 

        });
    };

    return (
        <div className="form-container">
            <h2 style={{ fontSize: "2.4rem" }}>Please enter information below</h2>
            <form>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
                <button type= "button" className="btn" onClick={handleSubmit}>
                    Continue
                </button>
            </form>


        </div>
    );
}