import React from "react";
import trackArt from "../images/compresspng/pornstache.png";

export default function MobileTrackArt() {
    return (
        <>
            <img className="trackArt" src={trackArt} alt="track art" />
            <a
                href="https://electrichawk.fanlink.to/Pornstache?fbclid=IwAR2VjOaBQdTT1PTVraI1u4UKy6OUdJup5EzqsNR9JBvSklq_LYPf1gTzYoQ"
                rel="noopener noreferrer"
                target="_blank"
                className="button"
            >
                listen
            </a>
        </>
    );
}
