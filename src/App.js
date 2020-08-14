import React, {useState} from 'react';
import './App.css';
import pressPhoto from './images/pressphoto2.png';
import logo from './images/NuStrut_white.png';
import Modal from './Modal/Modal';
import { Waypoint } from 'react-waypoint';

function App() {

  const [visible, setVisible] = useState(false)

  const changeVisibility = () => {
    setVisible(!visible)
  }
  console.log(visible)

  return (
    <div className="App">
    <div className=''>
      
    <header>
        <a href="https://t.co/fSQnOkoKqk?amp=1" target="_blank" rel='noopener noreferrer'><img src={logo} alt='logo'/></a>
      </header>

      <section className='music'>
        <h2>Don't Miss Out!</h2>
        <h3>New music coming soon!</h3>
      </section>
      <section className='setInfo sticky'>

      </section>

    </div>
     
      <Waypoint onEnter={changeVisibility} onLeave={changeVisibility} bottomOffset='40%' topOffset='50%'>
        <div className="info">
          <Modal visible={visible} />
          <img src={pressPhoto} alt='press'/>
        </div>
      </Waypoint>
	
      <footer>
        <div className="flex-center">
          <i className="fa fa-twitter fa-4x icon-3d"></i>
          <i className="fa fa-instagram fa-4x icon-3d"></i>
          <i className="fa fa-soundcloud fa-4x icon-3d"></i>
          <i className="fa fa-spotify fa-4x icon-3d"></i>

        </div>
      </footer>

    </div>
  );
}

export default App;
