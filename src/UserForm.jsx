import React, {useState} from "react";

export default function UserForm({onSubmit}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = () => {
        if(!name || !age || !location) return;
        onsubmit({name, age, location});
    };

    return (
        <div className="form-container">
            <h2 style ={{ fontSize : "2.4rem"}}>Please enter information below</h2>

            <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
             <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
              <input placeholder="Location" onChange={(e) => setLocation(e.target.value)} />

              <button className="btn" onClick={handleSubmit}>
                Continue
              </button>
        </div>
    );
}