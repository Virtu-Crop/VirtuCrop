import React from 'react';
import './About.scss';
const About = () => {
  return (
    <>
      <div className='about md:flex-col  sm:flex-col'>
        <div className='heading'>
          <span>
            About Us
          </span>
        </div>
        <div className='flex  flex-col gap-3'>
          <div className='top'>
            <p>
              At Virtucrop, we understand that the world of technology is constantly evolving,
              and businesses <br /> need adaptable solutions to thrive in this dynamic environment.
            </p>
            <br />
            <p>
              With a unique blend of expertise in software development, blockchain technology,
              business development, and custom software solutions, we are dedicated to shaping
              the digital landscape of tomorrow.
            </p>
          </div>
          <div className='midTop'>
            <p className='title'> Our Mission</p>
            <p>Empower businesses through innovative and reliable technology solutions,
              fostering growth and success in the digital era.
            </p>
<br />
            <p>
              At Virtucrop, we combine expertise, creativity, and technology to
              deliver solutions that drive growth and efficiency. Our commitment
              to quality and innovation makes us a trusted partner in your
              technological journey.
            </p>

          </div>
          <div className="midBottom ">
          <p className='title'>Meet our Captains</p>
              <div className='card  grid lg:grid-cols-2 sm:grid-cols-1 gap-8'>
              <div className='ceo'>
                <div className='front'>
                  Photo
                </div>
                <div className='back'>
                  Imdadullah J.D <br />
                  CEO / <br /> Founder
                </div>
              </div>
              <div className='coo'>
                <div className='front'>
                Photo
                </div>
                <div className='back'>
                  Jayesh BN <br />
                  COO / <br /> Co-Founder
                </div>
              </div>
              </div>
          </div>
          <div className='bottom flex'>

            
            <p>
              With a passion for excellence and a commitment to innovation, we
              specialize in software development, <br /> blockchain technology, and
              bespoke solutions for the ed-tech and fintech sectors.
              </p>
              <br />
            <p>
              Our team of skilled professionals is committed to crafting
              tailor-made software applications  that address <br /> your unique
              challenges and opportunities. From conceptualization to execution,
              we work closely with you to <br /> ensure that our solutions align seamlessly
              with your vision and objectives.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default About
