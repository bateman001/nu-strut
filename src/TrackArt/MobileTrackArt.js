import React from 'react'
import trackArt from '../images/compresspng/nualbumart-min.jpg'

export default function MobileTrackArt(){
    return(
        <>
        <img className='trackArt' src={trackArt} alt='track art' />
        <a href='https://smarturl.it/westroxburyep' rel='noopener noreferrer' target='_blank' className='button'>listen</a>
        </>
    )
}