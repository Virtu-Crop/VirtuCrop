import React from 'react';
import './About.scss';
const About = () => {
  return (
    <>
      <div className='about md:flex-col  sm:flex-col'>
        <div className='heading'>
          <span>
            ABOUT US
          </span>
        </div>
        <div className='flex  lg:flex-row sm:flex-col '>
          <div className='left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti quos quod molestiae quidem. Hic officia vitae suscipit dolorum sit nobis expedita amet consequatur in quod at culpa beatae eveniet velit iure, explicabo possimus? Laboriosam ratione tenetur perferendis consectetur commodi soluta voluptatum placeat exercitationem libero dicta, quaerat ad consequatur blanditiis!
          </div>
          <div className='right'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam vitae incidunt ab vel officia cum excepturi magnam commodi repellendus hic laboriosam natus qui dicta magni, illum quasi ipsa nobis! Atque, voluptate exercitationem at dolore voluptatibus quasi repudiandae nam quas, numquam alias, odio necessitatibus labore explicabo rerum ratione eveniet? Tenetur.
          </div>
        </div>
      </div>
    </>
  )
}
export default About
