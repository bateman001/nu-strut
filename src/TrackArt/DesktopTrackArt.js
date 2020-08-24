import React, { useState } from 'react';
import trackArt from '../images/trackArt2.png';
import { useSpring, animated } from 'react-spring'

export default function DesktopTrackArt(){
    const [hover, setHover] = useState(false)
    const hovered = useSpring({
        opacity: hover ? 1 : 0
      })

    return(        
        <>
            <img className='trackArt' src={trackArt} alt='track art'></img>
            <animated.div style={hovered} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} className='hover'>
                <a onMouseOver={() => setHover(true)} href='https://soundcloud.com/nustrut/au5-nasty-purple-funk-aint-even-nu-strut-remix-final-master/s-FJJfm638rw1' rel='noopener noreferrer' target='_blank' className='button button-style-1'>listen</a>
            </animated.div>
        </>
    )
}