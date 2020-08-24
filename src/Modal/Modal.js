import React from 'react';
import {useSpring, animated, config} from 'react-spring'

function Modal(props){

    const { x } = useSpring({
        x: props.visible ? 0 : 100,
        config: config.molasses
    })
    
    return (
        <animated.div style={{
            transform: x.interpolate(x => `translate3d(${x * -1}%, 0,0)`)
        }} className='modal'>
            <h2>Who Is Nu Strut</h2>
            <article className='description'>
                <p className='p'>Nu Strut is the creative project of Texas-native and multi-genre musician, Brent Pinero. This Dallasite's music journey began 14 years ago as a member of various bands, including forming his own Blues trio. His preference has long incorporated Funk, Hip-Hop and Neo-Soul, however, in 2016, he began experimenting with Electronic music. Inspired by genre-defying acts like Gramatik, LSDREAM, and KOAN Sound, Pinero developed a taste for Feel-Good Bass production under his current moniker.</p>
                <p className='p'>Nu Strut has found success bringing his funky bass project in front of virtual audiences. Most recently, he performed his live debut via Electric Hawks’ Virtual Harmony Festival and in August, he released a spirited remix of Au5 & Nasty Purple’s “Funk Ain’t Even.”</p>
                <p className='p'>Nu Strut’s funky catalogue is only matched by his style; the type to pull up with Cognac, Cigars, and a deck of cards while blasting Experimental dance tunes. Find Pinero donning mellow shades and retro color palettes to match the shag aesthetic of his faux fur coat and gold chain. Swiftly discovering a balance between old-school style and modern sonics, Nu Strut is a name to keep tabs on in the continuously progressive Bass scene.</p>
            </article>
        </animated.div>
    )
}

export default Modal;