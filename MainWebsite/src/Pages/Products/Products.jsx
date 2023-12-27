import React from 'react';
import './Products.scss';

const Products = () => {
  return (
    <>
      <div className='info md:flex-col  sm:flex-col'>
        <div className='heading'>
          <span>
            Products
          </span>
        </div>
        <div className='content flex flex-col gap-2'>
          <div className='left'>
          <h1>EvolveAir – Coming Soon</h1>
             <p>Transform your learning journey with EvolveAir! 
              Dive into <br /> cutting-edge e-learning experiences tailored
               to ignite <br /> your potential.</p>
           </div>
          <div className='right'>
          <h1>CoinXHub – Coming Soon</h1>
              <p>Step into the future with CoinXHub. A seamless 
                blockchain <br /> ecosystem designed for tomorrow’s
                 decentralized world.</p>
           </div>
        </div>
      </div>
    </>
  )
}

export default Products
