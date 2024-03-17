import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Products.scss';

const Products = () => {

  useEffect(() => {
    AOS.init({ // Set the animation duration (in milliseconds)
      once: false, // Only trigger the animation once
    });
  }, []);


  return (
    <>
      <div className='product ' data-aos='fade-up' data-aos-duration='1600' data-aos-delay='200' data-aos-easing='ease-in-out'>
        <div className='heading'>
          <b> <span>
            Products
          </span></b>
        </div>
        <div className='cards'>
          <div className='grid grid-cols-1 gap-20'>
            <div className='card' data-aos='fade-up' data-aos-duration='1600' data-aos-delay='200' data-aos-easing='ease-in-out'>
              <img className='front' src="../../src/assets/evolve.png" alt="" />
              <p className='back'>An innovative E-learning platform serving
                both technical and non-technical realm along with super
                amazing affiliate programs.
                <br />
                <button><a href="https://evolveair.org/?tpclid=facebook.PAAaa4gzcbWHz407Si080yBilUEr9ZPbIlqT7Il_m0elZOUVZTYpEveHSEOLE" target='_blank'>Know More</a></button>

              </p>


            </div>
            <div className='card1' data-aos='fade-up' data-aos-duration='1600' data-aos-delay='200' data-aos-easing='ease-in-out'>
              {/* <b><h1 className='front'>CoinXHub</h1></b> */}
              <img className='front' src="../../src/assets/cxh.png" alt="" />
              <p className='back'>Step into the future with CoinXHub. A seamless
                blockchain  ecosystem designed for tomorrow's
                decentralized world.
                <br />
                <button>
                  <a style={{ pointerEvents: 'none' }} href="">
                    Coming Soon
                  </a>
                </button>
              </p>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default Products
