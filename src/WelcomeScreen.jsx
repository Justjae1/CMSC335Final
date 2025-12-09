import React from "react";

export default function WelcomeScreen({ onContinue }) {
    return (
        <div className="Welcome-container" onClick={onContinue}>
            <div className="Welcome-text">Hello!\n</div>
            <br></br>
            <div className="Welcome-subtext">Tap to continue</div>
        </div>
    );
}