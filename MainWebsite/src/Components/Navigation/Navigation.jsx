import {React} from 'react';
import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navigation = () => {
  
  function showSideBar(){
    const side = document.querySelector('.sidebar');
    side.style.display='flex';
  }
  function hideSideBar(){
    const side = document.querySelector('.sidebar');
    side.style.display='none';
  }
  
  return (
    <>
    <nav className='sidebar'>
      <ul>
      {/* <Link className='slogo' to='/'><img src="../../public/log.png"  /></Link> */}
      {/* <li onClick={hideSideBar}><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li> */}
      <li className='menu-button' onClick={hideSideBar}><a href=''><FontAwesomeIcon icon={faXmark}/></a></li>
      <li><a href='/'>Home</a></li>
      <li><a href='/about'>About</a></li>
      <li><a href='/services'>Services</a></li>
      <li><a href='/products'>Products</a></li>
      <li><a href='/contact'>Contact</a></li>
      </ul>
    </nav>
    <nav className='navbar'>
      <ul>
        {/* <Link></Link> */}
      <li className='logo'><a href="/"><img src="./src/assets/logo2.png"  /></a></li>
      <li><a className='hideOnMoblie' href='/'>Home</a></li>
      <li><a className='hideOnMoblie' href='/about'>About</a></li>
      <li><a className='hideOnMoblie' href='/services'>Services</a></li>
      <li><a className='hideOnMoblie' href='/products'>Products</a></li>
      <li><a className='hideOnMoblie' href='/contact'>Contact</a></li>
      <li className='menu-button' onClick={showSideBar} ><button  ><FontAwesomeIcon icon={faBars}/></button></li>
      </ul>
    </nav>
    </>
  
  );
}
export default Navigation
