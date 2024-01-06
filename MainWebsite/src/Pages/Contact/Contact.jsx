import React, { useState } from 'react';
import './Contact.scss';
import axios from 'axios';

const Contact = () => {

  //sql connection sending data to port 5000
  const [data, setData] = useState({ name: '', email: '', phone: '', message: '' });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/contact', data);
      console.log('Form Submitted Successfully');
      alert('Form Submitted Successfully');
      setData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form: ' + error.message);
      alert("Form Not Submitted"+ error.message);
    }
  };



  // for displaying form
  const [isVisible, setIsVisible] = useState(false);
  const [buttonName, setButtonName] = useState('Contact');
  function showForm() {
    if (isVisible === false) {
      setIsVisible(!isVisible);
      setButtonName('Close Form')
    } else {
      setIsVisible(!isVisible);
      setButtonName('Contact')
    }
  }
  return (
    <>
    <div className='mainC grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2'>
      <div className='contact flex flex-col sm:flex-col'>
        <p>
          Ready to elevate your business with Virtucrop?
          Contact us today to explore how our expertise can
           drive your success.
           </p>
        {/* <button onClick={showForm}>{buttonName}</button> */}
        {/* {isVisible &&  */}
        <form onSubmit={handleSubmit} method='post' id='form' className='flex flex-col'>
          <h1>CONTACT</h1>
          {/* <label for="name">Name:</label> */}
          <input type="text" id="name" onChange={handleChange} value={data.name} placeholder='Name' name="name" required />
          {/* <label for="email">Email:</label> */}
          <input type="email" id="email" onChange={handleChange} value={data.email} placeholder='E-mail' name="email" required />
          {/* <label for="phone">Phone:</label> */}
          <input type="tel" id="number" onChange={handleChange} value={data.phone} placeholder='+91' name="phone" required />
          {/* <label for="message">Message:</label> */}
          <textarea id="message" name="message" onChange={handleChange} value={data.message} placeholder='Message' rows="4" required ></textarea>
          <button type="submit" >Submit</button>
          {/* <p>{data.name},{data.email},{data.phone},{data.message}</p> */}
        </form>
        {/* } */}
      </div>
      <div className='image'>
        <div className='photo'>
        <img src="../../src/assets/contact-p.png" width={350}  style={{borderRadius:'0%', marginBottom: '10px'}} alt="img" />
      </div>
      </div>
      </div>
    </>
  )
}

export default Contact
