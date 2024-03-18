import { React, useRef, useEffect, useState } from 'react';
import './Home.scss';
import idol from '../../assets/figma-1.png';
import earth from '../../assets/earth.png';
import laptop from '../../assets/laptop.png';
import AnimatedLetters from '../../Components/AnimatedLetters';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['I', 'N', 'N', 'O', 'V', 'A', 'T', 'I', 'O', 'N']
    const midArray = ['S', 'U', 'C', 'C', 'E', 'S', 'S']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000)
    }, [])

    return (
        <>
            <div className="home" >
                <section className='sec1' >
                    <div className='container1'>
                        <div className='row grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2' >
                            <div className='text'>
                                <span className='small'>
                                    SEEDING
                                </span>

                                <span className='bold'>
                                    <AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={nameArray}
                                        idx={50}
                                    />
                                    {/* INNOVATION */}
                                </span>
                                <span className='small'>
                                    HARVESTING
                                </span>
                                <span className='bold'>
                                    {/* SUCCESS */}
                                    <AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={midArray}
                                        idx={50}
                                    />
                                </span>
                                <a className='button' href='/contact'>
                                    Get in touch
                                </a >
                            </div>
                            <div className='image' >
                                <img src={idol} alt="image" width={650} />
                            </div>
                        </div>

                    </div>
                </section>
                <section className='sec2'>
                    <div className='container2'>
                        <div className='row1 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                            <div className='earth'>
                                <img src={earth} width={500} alt="earth.jpg" />
                            </div>
                            <div className='text1'>
                                <p className='up'>Discover a world of possibilities with
                                    <br />
                                    <span className='bold'>
                                        Virtucrop
                                    </span>
                                    <br />
                                </p>
                                <p className='dn'>Your trusted partner in harnessing the power of technology. From crafting bespoke software solutions to pioneering blockchain applications, creating intuitive user experiences to strategic business development — we bring ideas to life. Let's embark on a transformative journey together.</p>
                                <br />
                                <ul>
                                    <li>
                                        Software Development
                                    </li>
                                    <li>
                                        Business Development
                                    </li>
                                    <li>
                                        Blockchain Development
                                    </li>
                                    <li>
                                        UI/UX Design
                                    </li>
                                    <li>
                                        Branding Services
                                    </li>
                                    <br />
                                </ul>
                                <a href='/services'>
                                    Explore our services
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='sec3'>
                    <div className='container3'>
                        <div className='why'>
                            <p className='heading'>Why Virtucrop?</p>
                            <p className='p'>Virtucrop stands as a beacon of excellence in the realm of custom software development, showcasing a track record of proven expertise. We pride ourselves on pioneering blockchain solutions, envisioning the future of technology with innovation at its core. Our commitment extends to providing tailored software solutions that align seamlessly with the unique needs of our clients.</p>
                        </div>
                        <div className='row2 flex flex-col-2 lg:flex-row   sm:flex-col'>
                            <div className='text2'>
                                <p>At Virtucrop, we go beyond functionality by incorporating creative design services, ensuring intuitive user experiences that captivate and engage. We understand the significance of strategic branding in setting businesses apart, and our dedicated efforts in this realm reflect our commitment to elevating your brand identity.
                                </p>

                            </div>
                            <div className='laptop'>
                                <img src={laptop} alt="earth.jpg" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
