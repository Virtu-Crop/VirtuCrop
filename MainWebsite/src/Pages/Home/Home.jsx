import React, { useState } from 'react';
import './Home.scss';

const Home = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const [data,setData]=useState('Read More');
  // const handleShow = () => {
  //   if(isVisible===false){
  //   setIsVisible(!isVisible);
  //   setData('Read Less')
  //   }else{
  //     setIsVisible(!isVisible);
  //     setData('Read More')
  //   }
  // };


  // style={{transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); 
  //   transform-style: preserve-3d;}}
  return (
    // <div className='container w-screen'>
    <div className='mainHome'>
    <div className='home grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-5'>
      <div className='left '>
       <b> SEEDING
        <span className='content'> INNOVATION </span>
        <br />
        <span className='har'> HARVESTING </span>
        SUCCESS</b>
        <br></br>
        <p style={{fontSize: 20, paddingTop: 40}}>Discover a world of possibilities with VirtuCrop, your
          trusted partner in harnessing the power of technology. From crafting
          bespoke software solutions to pioneering blockchain applications,
          creating intuitive user experiences to strategic business development
          — we bring ideas to life. Let's embark on a transformative journey together.</p>
        </div>
        <div className='mid'>
      <div data-w-id="a52a12e1-5170-8081-df0d-d297aff62449" className="absolute hero-v1-decoration" >
            <img src="https://assets-global.website-files.com/652a762c1fcb49bcec64ff37/653f645e264b0d477faadfac_Decoration%201.1.svg"  loading="lazy" alt="example logo" />  
        </div>
        <div className='img2'>
        <img src="https://assets-global.website-files.com/652a762c1fcb49bcec64ff37/653f64b987af153eb9ec4140_Decoration%201.2.svg" loading="lazy" alt="example logo"/>
        </div>
        </div>
     
     </div>
     <div className='right flex flex-col' >
        {/* <button id='button' onClick={handleShow}>{data}</button> */}
        {/* {isVisible && */}
        <ul >
          <p >Why VirtuCrop ?</p>
          <p className='para'>VirtuCrop stands as a beacon of excellence in the realm of custom software development,
            showcasing a track record of proven expertise. We pride ourselves on pioneering blockchain 
            solutions, envisioning the future of technology with innovation at its core. Our commitment 
            extends to providing tailored software solutions that align seamlessly with the unique needs of our clients.</p>
        
        </ul>
        <div className='image'>
        <img src="../../src/assets/why.png" width={700} alt="" />
        <p>
          At VirtuCrop, we go beyond functionality by incorporating creative design services, ensuring intuitive user 
          experiences that captivate and engage. We understand the significance of strategic branding in setting businesses
           apart, and our dedicated efforts in this realm reflect our commitment to elevating your brand identity. Moreover,
            our approach encompasses holistic business development strategies aimed at fostering growth and ensuring that your
             enterprise thrives in today's dynamic and competitive landscape. VirtuCrop is not just a service provider; it is a
              partner in your journey toward success, offering comprehensive solutions that transcend the ordinary.
              </p>
        </div>
        {/* } */}
        {/* {isVisible && */}
        {/* } */}
    </div>
    {/* <div id="newsletter" class="section _3xl">
      <div data-w-id="32fd0feb-5d24-ea10-d2dd-b39a47017b60" class="wrapper g-stack-2xl relative" style="opacity: 1;">
        <div class="row avc">
          <div class="col lg8 md5 mdl6 sm2">
            <div class="tac fill-100">
              <h2 class="headline l">
                Subscribe to Our Newsletter
                </h2>
                </div>
                </div>
                </div>
                </div>
                <div class="row avc">
                  <div class="col lg4 md4 mdl5 sm2">
                    <div class="form-block w-form">
                      <form id="newsletter-form" name="email-form" data-name="Email Form" method="get" class="g-stack-xl" data-wf-page-id="652a762c1fcb49bcec64ffbb" data-wf-element-id="32fd0feb-5d24-ea10-d2dd-b39a47017b69" aria-label="Email Form">
                        <input type="email" class="input size-l w-input" maxlength="256" name="Email-Address" data-name="Email Address" placeholder="Email address" id="Email-Address-6" required="" />
                        <input type="submit" value="Subscribe" data-wait="Please wait..." class="button primary-dark size-l w-button" />
                          </form>
                          <div class="form-success-message w-form-done" tabindex="-1" role="region" aria-label="Email Form success">
                            <div class="inset-xl corners-2xl ahc bgc-success-200">
                              <div class="body-text-m tc-black-64">
                                Thank you! Your submission has been received!
                                </div>
                                </div>
                                </div>
                                <div class="form-error-message w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure">
                                  <div class="inset-xl corners-2xl ahc bgc-error-200">
                                    <div class="body-text-m tc-black-64">
                                      Oops! Something went wrong while submitting the form.
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div> */}
     </div>
  )
}

export default Home
