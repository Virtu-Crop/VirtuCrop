import React from 'react';
import './Footer.scss';
import { faFacebook, faInstagram, faLinkedinIn, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return (
        <>
            <footer className='footer sm:text-center lg:text-left   flex flex-col '>
                <hr />
                <br />
                <div className=' flex   flex-col md:flex-row'>
                    <div className='logo '>
                        <div className='logo-main'><a href="/"><img src="./src/assets/logowb.png" alt="logo" /></a></div>
                        {/* <hr /> */}
                        <div className='address sm:py-3'>
                        <h1>Address :</h1>
                                <p>320, Gera's Imperium</p> 
                                <p>Rise, Hinjawadi Phase </p>
                                <p>II, Pimpri-Chinchwad,</p>
                                <p>Maharashtra 411057</p>
                        </div>
                    </div>
                    <div className='col '>
                        <h1>Useful Links</h1>
                        <ul className='sm:py-1' >
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/info">Info</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h1>Our Products</h1>
                        <ul className='sm:py-1'>
                            <li><a href="" style={{ pointerEvents: 'none' }}>CoinXHub</a></li>
                            <li><a href="" style={{ pointerEvents: 'none' }}>EvolveAir</a></li>
                            <li><a href="" style={{ pointerEvents: 'none' }}>TechChor</a></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h1>Social Media</h1>
                        <ul className='sm:py-1'>
                            <li><a href="" style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
                            <li><a href="" style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faXTwitter} /> Twitter</a></li>
                            <li><a href="" style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a></li>
                            <li><a href="" style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                        </ul>
                    </div><a href=""></a>
                </div>
                <div>
                    {/* <hr /> */}
                    <p className='copy'>&copy; 2023 Your Company. All rights reserved.</p>

                </div>
            </footer>

        </>
    )
}

export default Footer
