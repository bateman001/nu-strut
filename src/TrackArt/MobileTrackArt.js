import React from "react";
import trackArt from "../images/you.png";

export default function MobileTrackArt() {
    return (
        <>
            <img className="trackArt" src={trackArt} alt="track art" />
            <a href="https://fanlink.to/fDsW" rel="noopener noreferrer" target="_blank" className="button">
                listen
            </a>
        </>
    );
}
