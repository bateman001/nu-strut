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
                <p>'Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.' - Sheev Palpatine</p>
            </article>
        </animated.div>
    )
}

export default Modal;