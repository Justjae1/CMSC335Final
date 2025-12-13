import React, { useState } from "react";

export default function UserForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!name || !age || !location){
            window.alert("Please fill the form completely to continue.");
            return;
        }

        onSubmit({
            name, age, location: location.charAt(0).toUpperCase() + location.slice(1),

        });
    };

    return (
        <div className="form-container">
            <h2 style={{ fontSize: "2.4rem" }}>Want to know what the weather is?<br></br>Fill out the form below to get started.</h2><br></br>
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