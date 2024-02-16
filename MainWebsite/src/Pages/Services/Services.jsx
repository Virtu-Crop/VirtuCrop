import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Services.scss';
// import required modules
import { Keyboard, Pagination, Navigation, Mousewheel } from 'swiper/modules';

export default function Services() {
    return (
        <div className='services'>
            <Swiper
                slidesPerView={1}
                spaceBetween={500}
                keyboard={{
                    enabled: true,
                }}
                loop={false}
                mousewheel={true}
                direction={'horizontal'}
                pagination={{
                    clickable: false,
                }}

                modules={[Keyboard, Pagination, Navigation, Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2'>
                        <div className='content'>
                            <h1>Software Development</h1>
                            <ul>
                                <li>
                                    Custom Software Solutions.
                                </li>
                                <li>
                                    Web Application Development.
                                </li>
                                <li>
                                    Mobile App Development (iOS & Android).
                                </li>
                                <li>
                                    Software Prototyping & MVP Development.
                                </li>
                                <li>
                                    Legacy System Enhancement.
                                </li>
                            </ul>
                        </div>
                        <div className='first'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2'>
                        <div className='content'>
                            <h1>Blockchain Development</h1>
                            <ul>
                                <li>
                                    Decentralized Application (DApp) Development.
                                </li>
                                <li>
                                    Smart Contract Development.
                                </li>
                                <li>
                                    Blockchain Consulting & Integration.
                                </li>
                                <li>
                                    Tokenization Solutions.
                                </li>
                                <li>
                                    Private Blockchain Development.
                                </li>
                            </ul>
                        </div>
                        <div className='second'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2'>
                        <div className='content'>
                            <h1 >Custom Software
                                Development</h1>
                            <ul>
                                <li>
                                    Tailored Software Solutions.
                                </li>
                                <li>
                                    Application Modernization.
                                </li>
                                <li>
                                    API Integration & Development.
                                </li>
                                <li>
                                    Software Testing & QA
                                </li>
                                <li>
                                    Ongoing Maintenance & Support.
                                </li>
                            </ul>
                        </div>
                        <div className='third'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-2
                    sm:grid-cols-1 lg:grid-cols-2'>
                        <div className='content'>
                            <h1>UI/UX Development</h1>
                            <ul style={{
                                marginLeft: '-8%'
                            }}>
                                <li>
                                    User Interface (UI) Design.
                                </li>
                                <li>
                                    User Experience (UX) Design.
                                </li>
                                <li>
                                    Wireframing & Prototyping.
                                </li>
                                <li>
                                    Graphic Design.
                                </li>
                                <li>
                                    Website Design & Development.
                                </li>
                            </ul>
                        </div>
                        <div className='fourth'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-2
                    sm:grid-cols-1 lg:grid-cols-2'>
                        <div className='content'>
                            <h1>Marketing Services</h1>
                            <ul>
                                <li>
                                    Visual Brand Identity Design.
                                </li>
                                <li>
                                    Logo Design & Branding Collateral.
                                </li>
                                <li>
                                    Brand Strategy & Positioning.
                                </li>
                                <li>
                                    Brand Guidelines Creation.
                                </li>
                                <li>
                                    Brand Guidelines Creation.
                                </li>
                            </ul>
                        </div>
                        <div className='fifth'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-2
                    sm:grid-cols-1 lg:grid-cols-2'>
                        <div className='content'>
                            <h1>Business Development</h1>
                            <ul style={{
                                marginLeft: '-15%'
                            }}>
                                <li>
                                    Growth Strategy Formulation.
                                </li>
                                <li>
                                    Market Research & Analysis.
                                </li>
                                <li>
                                    Business Process Optimization.
                                </li>
                                <li>
                                    Market Expansion Support.
                                </li>
                                <li>
                                    Partnership Identification.
                                </li>
                            </ul>
                        </div>
                        <div className='sixth'></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
