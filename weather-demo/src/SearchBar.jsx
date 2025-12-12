import React, {useState} from "react";
export default function SearchBar({onSearch}){
    const [text, setText] = useState("");

    return (
        <div className="search-container">
            <input style={{
                width: "60%",
                padding: "1.4rem",
                borderRadius: "1rem",
                border: ".1rem solid #444",
                fontsize: "1.6rem",
            }}

            placeholder="Change the sceneary?" 
            onChange={(e) => setText(e.target.value)}
            />
            <button className="btn" style={{
                marginLeft: "1rem", width: "20%"}}
                onClick={() => onSearch(text)}
            >Search</button>
        </div>
    )
}