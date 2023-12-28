import React, { useState } from 'react';
import './Home.scss';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data,setData]=useState('Read More');
  const handleShow = () => {
    if(isVisible===false){
    setIsVisible(!isVisible);
    setData('Read Less')
    }else{
      setIsVisible(!isVisible);
      setData('Read More')
    }
  };

  return (
    <div className='home flex flex-col  '>
      <div className='left '>
        SEEDING
        <span className='content'> INNOVATION </span>
        <br />
        <span className='har'> HARVESTING </span>
        SUCCESS
      </div>
      <div className='right'>
        <button id='button' onClick={handleShow}>{data}</button>
        {isVisible &&
          <p id='text'>Discover a world of possibilities with VirtuCrop, your
            trusted partner in harnessing the power of technology. From crafting
            bespoke software solutions to pioneering blockchain applications,
            creating intuitive user experiences to strategic business development
            — we bring ideas to life. Let's embark on a transformative journey together.
          </p>
        }
        {isVisible &&
          <ul >
            <p>Why VirtuCrop ?</p>
            <li>Proven Excellence in Custom Software Development.</li>
            <li>Pioneering Blockchain Solutions for the Future.</li>
            <li>Tailored Software Solutions for Your Unique Needs.</li>
            <li>Creative Design Services for Intuitive User Experiences.</li>
            <li>Strategic Branding to Set Your Business Apart.</li>
            <li>Holistic Business Development Strategies for Growth.</li>
          </ul>}

      </div>
    </div>
  )
}

export default Home
