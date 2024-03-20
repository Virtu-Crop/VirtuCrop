import { React } from 'react';
import './Navigation.scss';
import logo from '../../assets/logo2.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Navigation = () => {

  function showSideBar() {
    const side = document.querySelector('.sidebar');
    side.style.display = 'flex';
  }
  function hideSideBar() {
    const side = document.querySelector('.sidebar');
    side.style.display = 'none';
  }

  return (
    <>
      <nav className='sidebar'>
        <ul>
          <li className='menu-button' onClick={hideSideBar}><a href=''><FontAwesomeIcon icon={faXmark} /></a></li>
          <li><a href='/'>HOME</a></li>
          <li><a href='/about'>ABOUT</a></li>
          <li><a href='/services'>SERVICES</a></li>
          <li><a href='/products'>PRODUCTS</a></li>
          <li><a href='/contact'>CONTACT</a></li>
        </ul>
      </nav>
      <nav className='navbar'>
        <ul>
          <li className='logo'><a href="/"><img src={logo} alt='virtucrop_logo' /></a></li>
          <li><a className='hideOnMoblie' href='/'>HOME</a></li>
          <li><a className='hideOnMoblie' href='/about'>ABOUT</a></li>
          <li><a className='hideOnMoblie' href='/services'>SERVICES</a></li>
          <li><a className='hideOnMoblie' href='/products'>PRODUCTS</a></li>
          <li><a className='hideOnMoblie' href='/contact'>CONTACT</a></li>
          <li className='menu-button' onClick={showSideBar} ><button  ><FontAwesomeIcon icon={faBars} /></button></li>
        </ul>
      </nav>
    </>

  );
}
export default Navigation
