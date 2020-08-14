import React, {useState} from 'react';
import './App.css';
import pressPhoto from './images/compresspng/pressphoto2-min.png';
import logo from './images/compresspng/NuStrut_white-min.png';
import Modal from './Modal/Modal';
import { Waypoint } from 'react-waypoint';
import { GrTwitter, GrInstagram, GrFacebook, GrSoundcloud } from 'react-icons/gr';
import {IconContext} from 'react-icons';

function App() {

  const [visible, setVisible] = useState(false)

  const changeVisibility = () => {
    setVisible(!visible)
  }
  
  return (
    <div className="App">
      
    <header>
        <a href="https://t.co/fSQnOkoKqk?amp=1" target="_blank" rel='noopener noreferrer'><img src={logo} alt='logo'/></a>
      </header>

      <section className='music '>
        <h2>Don't Miss Out!</h2>
        <h3>New music coming soon!</h3>
      </section>
      <section className='setInfo'>

      </section>

     
      <Waypoint onEnter={changeVisibility} onLeave={changeVisibility} bottomOffset='40%' topOffset='50%'>
        <div className="info">
          <Modal visible={visible} />
          <img src={pressPhoto} alt='press'/>
        <div className="flex-center">
          <IconContext.Provider value={{ color: 'white', className: 'icon-3d'}}>
            <a href="http://soundcloud.com/nustrutmusic" target="_blank" rel='noopener noreferrer'>
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
