import React from 'react';
import './Footer.scss';
import { faFacebook, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='main flex flex-col'>
                    <div className='top flex flex-row'>
                        <div className='col'>
                            <div className='logo'>
                                <a href="/"><img src="./src/assets/logo2.png" alt="logo" /></a>
                                <div className='social flex-row'>
                                    {/* <a target='_blank' href=""><FontAwesomeIcon icon={faFacebook} /></a> */}
                                    <a target='_blank' href="https://www.instagram.com/virtucrop/"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a target='_blank' href="https://www.linkedin.com/company/virtucrop-private-limited/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    {/* <a target='_blank' href=""><FontAwesomeIcon icon={faXTwitter} /></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mid grid lg:grid-cols-4 sm:grid-cols-2 gap-2'>
                        <div className='col1'>
                        <div className='stack'>
                            <b>Address</b>
                            <div className='links'>
                            <p>
                                320, Gera's Imperium Rise,
                                Hinjawadi Phase II,
                                Pimpri-Chinchwad,
                                Maharashtra 411057
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className='col2'>
                        <div className='stack'>
                            <b>Useful Link</b>
                            <div className='links'>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/services">Services</a>
                            <a href="/products">Products</a>
                            <a href="/contact">Contact</a>
                            </div>
                        </div>
                        </div>
                        <div className='col3'>
                        <div className='stack'>
                            <b>Our Products</b>
                            <div className='links'>
                            <a href="/" style={{pointerEvents:'none', color:'grey'}}>CoinXHub</a>
                            <a target='_blank' href="https://evolveair.org/?tpclid=facebook.PAAaa4gzcbWHz407Si080yBilUEr9ZPbIlqT7Il_m0elZOUVZTYpEveHSEOLE">Evolveair</a>
                            {/* <a href="/"></a> */}
                            {/* <a href="/products">Products</a>
                            <a href="/contact">Contact</a> */}
                            </div>
                        </div>
                        </div>
                        <div className='col4'>
                        <div className='stack'>
                            <b>Company</b>
                            <div className='links'>
                            <a href="/" style={{pointerEvents:'none', color:'grey'}}>Privacy & Policies</a>
                            <a href="/about" style={{pointerEvents:'none', color:'grey'}}>Terms & Conditions</a>
                            {/* <a href="/services">Services</a> */}
                            {/* <a href="/products">Products</a> */}
                            {/* <a href="/contact">Contact</a> */}
                            </div>
                        </div>
                        </div>
                        {/* <div className='col5'>
                        <div className='stack'>
                            <b>Link</b>
                            <div className='links'>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/services">Services</a>
                            <a href="/products">Products</a>
                            <a href="/contact">Contact</a>
                            </div>
                        </div>
                        </div> */}
                    </div>
                    <div className='bottom'>
                        <div className='main'>
                            <div className='container'>
                                <div className='rights'>&copy; 2023 Your Company. All rights reserved.</div>
                                {/* <div className='author'></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
