import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="home">
                <section className='sec1'>
                    <div className='container1'>
                        <div className='row grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                            <div className='text'>
                                <span className='small'>
                                    SEEDING
                                </span>
                                <span className='bold'>
                                    INNOVATION
                                </span>
                                <span className='small'>
                                    HARVESTING
                                </span>
                                <span className='bold'>
                                    SUCCESS
                                </span>

                                <button>Get in touch</button>
                            </div>
                            <div className='image'>
                                <img src="../../src/assets/figma-1.png" alt="image" width={650} />
                            </div>
                        </div>

                    </div>
                </section>
                <section className='sec2'>
                    <div className='container2'>
                        <div className='row1 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                            <div className='earth'>
                                <img src="../../src/assets/earth.png" width={500} alt="earth.jpg" />
                            </div>
                            <div className='text1'>
                                <p className='up'>Discover a world of possibilities with
                                    <br />
                                    <span className='bold'>
                                        Virtucrop
                                    </span>
                                    <br />
                                </p>
                                <p className='dn'>our trusted partner in harnessing the power of technology. From crafting bespoke software solutions to pioneering blockchain applications, creating intuitive user experiences to strategic business development — we bring ideas to life. Let's embark on a transformative journey together.</p>
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
                                        Marketing Services
                                    </li>
                                    <br />
                                    <Link to={'/services'}><button>Explore our services</button>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='sec3'>
                    <div className='container3'>
                        <div className='why'>
                            <p className='heading'>Why Virtucrop?</p>
                            <p className='p'>VirtuCrop stands as a beacon of excellence in the realm of custom software development, showcasing a track record of proven expertise. We pride ourselves on pioneering blockchain solutions, envisioning the future of technology with innovation at its core. Our commitment extends to providing tailored software solutions that align seamlessly with the unique needs of our clients.</p>
                        </div>
                        <div className='row2 flex flex-col-2 lg:flex-row   sm:flex-col'>
                            <div className='text2'>
                                <p>At VirtuCrop, we go beyond functionality by incorporating creative design services, ensuring intuitive user experiences that captivate and engage. We understand the significance of strategic branding in setting businesses apart, and our dedicated efforts in this realm reflect our commitment to elevating your brand identity.
                                </p>

                            </div>
                            <div className='laptop'>
                                <img src="../../src/assets/laptop.png" alt="earth.jpg" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
