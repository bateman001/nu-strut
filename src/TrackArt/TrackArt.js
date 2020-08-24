import React from 'react'
import withSizes from 'react-sizes';
import MobileTrackArt from './MobileTrackArt';
import DesktopTrackArt from './DesktopTrackArt';

function TrackArt({ isMobile }){
    
    return(
        <div className='flex'>
        {isMobile ? <MobileTrackArt/> : <DesktopTrackArt/>}
      </div>

    )
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 600,
    })

export default withSizes(mapSizesToProps)(TrackArt)