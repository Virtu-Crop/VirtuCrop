import React from 'react';
import './Services.scss';

const Services = () => {
  return (
    <>
      <div className='services md:flex-col  sm:flex-col'>
        <div className='heading'>
          <span>
            Services
          </span>
        </div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-3'>
          <div className='card'>
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
          <div className='card'>
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
          <div className='card'>
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
          <div className='card'>
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
          <div className='card'>
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
          <div className='card'>
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
        </div>
      </div>
    </>
  )
}

export default Services
