import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.scss';

const Services = () => {

  useEffect(() => {
    AOS.init({ // Set the animation duration (in milliseconds)
      once: false, // Only trigger the animation once
    });
  }, []);


  return (
    <services>
      <div className='services md:flex-col  sm:flex-col'>
        <div className='heading' data-aos='slide-up' data-aos-duration='800' data-aos-delay='0' data-aos-easing='ease-in-out'>
          <span>
            <b>Services</b>
          </span>
        </div>
        <div className='cards'>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-20'>
            <div className='card-left' data-aos='slide-right' data-aos-duration='1200' data-aos-delay='100' data-aos-easing='ease-in-out'>
              <div className="front">
                <p>
                  Software Development
                </p>
              </div>
              <div className="back">
                <ul>
                  <li>User Interface (UI) Design.</li>
                  <li>User Experience (UX) Design.</li>
                  <li>Wireframing & Prototyping.</li>
                  <li>Graphic Design.</li>
                  <li>Website Design & Development.</li>
                </ul>
              </div>
            </div>
            <div className='card-right' data-aos='slide-left' data-aos-duration='1200' data-aos-delay='100' data-aos-easing='ease-in-out'>
              <div className='front'>
                <p>
                  Blockchain Development
                </p>
              </div>
              <div className="back ">
                <ul>
                  <li>
                    Decentralized Application <br />Development.
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
            </div>
            <div className='card-left' data-aos='slide-right' data-aos-duration='1200' data-aos-delay='200' data-aos-easing='ease-in-out'>
              <div className='front'>
                <p>Custom Software Development</p>
              </div>
              <div className="back">
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
                    Software Testing & QA.
                  </li>
                  <li>
                    Ongoing Maintenance & Support.
                  </li>
                </ul>
              </div>
            </div>
            <div className='card-right' data-aos='slide-left' data-aos-duration='1200' data-aos-delay='200' data-aos-easing='ease-in-out'>
              <div className='front'>
                <p>
                  Business Development
                </p>
              </div>
              <div className="back">
                <ul>
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
            </div>
            <div className='card-left' data-aos='slide-right' data-aos-duration='1200' data-aos-delay='100' data-aos-easing='ease-in-out'>
              <div className='front'>
                <p>
                  Design Services
                </p>
              </div>
              <div className="back">
                <ul>
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
            </div>
            <div className='card-right' data-aos='slide-left' data-aos-duration='1200' data-aos-delay='100' data-aos-easing='ease-in-out'>
              <div className='front'>
                <p>
                  Branding
                </p>
              </div>
              <div className='back'>
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
                    Brand Refresh & Rebranding.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </services>
  )
}

export default Services
