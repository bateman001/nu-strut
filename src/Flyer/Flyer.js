import React from 'react'
import withSizes from 'react-sizes';
import MobileFlyer from './MobileFlyer'

function Flyer({ isMobile }){

      
    return(  
        <>    
        {isMobile && <MobileFlyer/>}
        </>
)
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width <= 600,
    })

export default withSizes(mapSizesToProps)(Flyer)