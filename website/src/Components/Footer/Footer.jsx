import React from 'react';
import './Footer.scss';
import { faFacebook, faInstagram, faLinkedinIn, faMeta, faTwitter, faXTwitter, faYammer } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return (
        <>
            <footer className='footer flex flex-col h-30'>
                <div className=' flex  flex-col md:flex-row'>
                    <div className='logo flex-col'>
                        <div className='logo-main'><a href="/"><img src="./src/assets/logo2.png" alt="logo" /></a></div>
                        <hr />
                        <div className='address'>
                            <p>
                                <b >Address :</b>
                                <br />
                                320, Gera's Imperium Rise,
                                Hinjawadi Phase II, <br />
                                Pimpri-Chinchwad,Pune,
                                Maharashtra 411057
                            </p>
                        </div>
                    </div>
                    <div className='col'>
                        <h1 >Useful Links</h1>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/info">Info</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h1>Our Products</h1>
                        <ul>
                            <li><a href="" style={{ pointerEvents: 'none' }}>CoinXHub</a></li>
                            <li><a href="" style={{ pointerEvents: 'none' }}>EvolveAir</a></li>
                            <li><a href="" style={{ pointerEvents: 'none' }}>TechChor</a></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h1>Social Media</h1>
                        <ul>
                            <li><a href="" style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="" style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faXTwitter} /></a></li>
                            <li><a href="" style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                            <li><a href="" style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faFacebook} /></a></li>
                        </ul>
                    </div><a href=""></a>
                </div>
                <div>
                    <hr />
                    <p className='copy'>&copy; 2023 Your Company. All rights reserved.</p>

                </div>
            </footer>

        </>
    )
}

export default Footer
