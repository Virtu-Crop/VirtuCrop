import React from 'react';
import './Products.scss';

const Products = () => {
  return (
    <>
      <div className='product '>
        <div className='heading'>
         <b> <span>
            Products
          </span></b>
        </div>
        <div className='cards'>
          <div className='grid grid-cols-1 gap-20'>
          <div className='card'>
          <img className='front' src="../../src/assets/evolve.png" alt="" />
             <p className='back'>An innovative E-learning platform serving
             both technical and non-technical realm along with super 
             amazing affiliate programs.
                <br />
              <button><a  href="https://evolveair.org/?tpclid=facebook.PAAaa4gzcbWHz407Si080yBilUEr9ZPbIlqT7Il_m0elZOUVZTYpEveHSEOLE" target='_blank'>Know More</a></button>
                
                </p>
              

           </div>
          <div className='card'>
          <b><h1 className='front'>CoinXHub</h1></b>
          {/* <img className='front' src="../../src/assets/evolve.png" alt="" /> */}
              <p className='back'>Step into the future with CoinXHub . A seamless 
               blockchain  ecosystem designed for tomorrow’s
              decentralized world. 
              <br />
              <button>
                <a href="">
                  Know More
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
