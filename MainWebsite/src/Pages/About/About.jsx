import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.scss';
const About = () => {

  useEffect(() => {
    AOS.init({ // Set the animation duration (in milliseconds)
      once: false, // Only trigger the animation once
    });
  }, []);


  return (
    <>
      <div className='about flex flex-col' >
        <div className='heading' data-aos='slide-up' data-aos-duration='1600' data-aos-delay='200' data-aos-easing='ease-in-out'>
          <span>
            <b> About Us</b>
          </span>
        </div>
        <div className='flex  flex-col '>
          <div className='top' data-aos='slide-up' data-aos-duration='1600' data-aos-delay='200' data-aos-easing='ease-in-out'>
            <p>
              At Virtucrop, we understand that the world of technology is constantly evolving,
              and businesses need adaptable solutions to thrive in this dynamic environment.
            </p>
            <br />
            <p className='p'>
              With a unique blend of expertise in software development, blockchain technology,
              business development, and custom software solutions, we are dedicated to shaping
              the digital landscape of tomorrow.
            </p>

            <div class="arrow"></div>


          </div>
          <div className='midTop grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1' data-aos='slide-up' data-aos-duration='1600' data-aos-delay='500' data-aos-easing='linear'>

            <div className='image'>
              <img src="../../src/assets/about.png" width={600} alt="img" />
            </div>
            <div>
              <p className='title'> Our Mission</p>
              <p className='p'>Empower businesses through innovative and reliable technology solutions,
                fostering growth and success in the digital era.
              </p>
              <br />
              <p className='p'>
                At Virtucrop, we combine expertise, creativity, and technology to
                deliver solutions that drive growth and efficiency. Our commitment
                to quality and innovation makes us a trusted partner in your
                technological journey.
              </p>
            </div>
          </div>
          <div className="midBottom" data-aos='zoom-in' data-aos-duration='1600' data-aos-delay='200' data-aos-easing='ease-in-out'>
            <div>
              <p className='title'>Meet our Captains</p>
            </div>
            <div className='mentor grid md:grid-cols-2 sm:grid-cols-1 gap-32'>
              <div className='ceo'>
                <img src="../../src/assets/ceo.png" width={250} alt="" />
                <br />
                Imdadullah J.D. <br />
                CEO / Founder


              </div>

              <div className='coo'>
                <img src="../../src/assets/coo.png" width={250} alt="" />
                <br />
                Jayesh B.N. <br />
                COO / Co-Founder

              </div>
            </div>
          </div>
          <div className='bottom' data-aos='zoom-in' data-aos-duration='1600' data-aos-delay='200' data-aos-easing='ease-in-out'>
            <p>
              With a passion for excellence and a commitment to innovation, we
              specialize in software development,  blockchain technology, and
              bespoke solutions for the ed-tech and fintech sectors.
            </p>
            <br />
            <p>
              Our team of skilled professionals is committed to crafting
              tailor-made software applications  that address  your unique
              challenges and opportunities. From conceptualization to execution,
              we work closely with you to ensure that our solutions align seamlessly
              with your vision and objectives.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default About
