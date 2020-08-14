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
            <h2>Funky Fresh</h2>
        </animated.div>
    )
}

export default Modal;