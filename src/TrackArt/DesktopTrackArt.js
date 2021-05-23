import React, { useState } from "react";
import trackArt from "../images/compresspng/pornstache.png";
import { useSpring, animated } from "react-spring";

export default function DesktopTrackArt() {
    const [hover, setHover] = useState(false);
    const hovered = useSpring({
        opacity: hover ? 0.9 : 0
    });

    return (
        <>
            <img className="trackArt" src={trackArt} alt="track art"></img>
            <animated.div
                style={hovered}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="hover"
            >
                <a
                    onMouseOver={() => setHover(true)}
                    href="https://electrichawk.fanlink.to/Pornstache?fbclid=IwAR2VjOaBQdTT1PTVraI1u4UKy6OUdJup5EzqsNR9JBvSklq_LYPf1gTzYoQ"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="button button-style-1"
                >
                    listen
                </a>
            </animated.div>
        </>
    );
}
