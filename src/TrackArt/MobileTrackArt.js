import React from 'react'
import trackArt from '../images/trackArt2.png'

export default function MobileTrackArt(){
    return(
        <>
        <img className='trackArt' src={trackArt} alt='track art' />
        <a href='https://soundcloud.com/nustrut/au5-nasty-purple-funk-aint-even-nu-strut-remix-final-master/s-FJJfm638rw1' rel='noopener noreferrer' target='_blank' className='button'>listen</a>
        </>
    )
}