import React from "react";

export default function WelcomeScreen({ onContinue }) {
    return (
        <div className="welcome-container" onClick={onContinue}>
        <div className="hello-text">Hello!</div>
            <br></br>
            <div className="tap-text">Tap to continue</div>
        </div>
    );
}