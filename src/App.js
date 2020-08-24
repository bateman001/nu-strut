import React, {useState} from 'react';
import './App.css';
import pressPhoto from './images/compresspng/pressphoto2-min.png';
import logo from './images/compresspng/NuStrut_white-min.png';
import Modal from './Modal/Modal';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated, config } from 'react-spring';
import { GrTwitter, GrInstagram, GrFacebook, GrSoundcloud } from 'react-icons/gr';
import {IconContext} from 'react-icons';
import TrackArt from './TrackArt/TrackArt';

function App() {

  const [visible, setVisible] = useState(false)
  const [dropDownVisible, setDropDown] = useState(false)
  const { x } = useSpring({
    x: dropDownVisible ? 0 : 100,
    config: config.slow
  })
const changeDropDown = () => {
    setDropDown(!dropDownVisible)
  }

  const changeVisibility = () => {
    setVisible(!visible)
  }

  return (
  <div className="App">
  <section className="newMusic">
    <header>
        <a href="https://t.co/fSQnOkoKqk?amp=1" target="_blank" rel='noopener noreferrer'><img src={logo} alt='logo'/></a>
    </header>

      <section className='music'>
      <div className='h2-wrapper'>
            <h2>Presenting</h2>
      </div>
        <TrackArt />
      </section>

    </section>

    <Waypoint onEnter={changeDropDown} onLeave={changeDropDown} topOffset='20%' bottomOffset='100%'>
      <section className='setInfo'>
        <animated.div style={{transform: x.interpolate(x => `translate3d( 0, ${x * -1}% ,0)`)}} className='set-description'>
          <h3>Electric Hawk</h3>
          <a href='https://www.youtube.com/watch?v=OWTJaMx8Nfw&t=5s' rel='noopener noreferrer' target='_blank' className='button button-style-2'>Watch</a>
        </animated.div> 
      </section>
    </Waypoint>

     
      <Waypoint onEnter={changeVisibility} onLeave={changeVisibility} bottomOffset='40%' topOffset='50%'>
        <div className="info">
          <Modal visible={visible} />
          <img src={pressPhoto} alt='press'/>
        <div className="flex-center">
          <IconContext.Provider value={{ color: 'white', className: 'icon-3d'}}>
            <a href="https://soundcloud.com/nustrut" target="_blank" rel='noopener noreferrer'>
              <GrSoundcloud />
            </a>
            <a href="https://twitter.com/NuStrut" target="_blank" rel='noopener noreferrer'>
              <GrTwitter />
            </a>
            <a href="https://www.instagram.com/nustrutmusic/" target="_blank" rel='noopener noreferrer'>
              <GrInstagram />
            </a>
            <a href="https://www.facebook.com/nustrut/" target="_blank" rel='noopener noreferrer'>
              <GrFacebook />
            </a>
          </IconContext.Provider>
        </div>
        </div>
      </Waypoint>
    </div>
  );
}

export default App;
