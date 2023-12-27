import React from 'react';
import './Home.scss';

const Home = () => { 

  function show(){
    const view = document.getElementById('text');
    const btn = document.getElementById('button');
    const list = document.getElementById('list');
    if (view.style.display==='none'){
    view.style.display='flex';
    const less = btn.innerHTML='Read Less';
    // list.style.display='flex';  
  }
    else{
      view.style.display='none';
      const less = btn.innerHTML='Read More';
      // list.style.display='none' ;
    }}
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
     <button id='button'  onClick={show}>Read More</button>

    <ul >
      <p>Why VirtuCrop ?</p>
      <li>Proven Excellence in Custom Software Development.</li>
      <li>Pioneering Blockchain Solutions for the Future.</li>
      <li>Tailored Software Solutions for Your Unique Needs.</li>
      <li>Creative Design Services for Intuitive User Experiences.</li>
      <li>Strategic Branding to Set Your Business Apart.</li>
      <li>Holistic Business Development Strategies for Growth.</li>
     </ul>
     <p id='text'>Discover a world of possibilities with VirtuCrop, your trusted partner in harnessing the power of technology. From crafting bespoke software solutions to pioneering blockchain applications, creating intuitive user experiences to strategic business development — we bring ideas to life. Let's embark on a transformative journey together.</p>
     
     </div>
      </div>
  )
}

export default Home
