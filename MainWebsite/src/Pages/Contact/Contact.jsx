import React, { useState } from 'react';
import './Contact.scss';
import contact from '../../assets/c1.webp';
// import axios from 'axios';
import 'react-phone-number-input/style.css';

const Contact = () => {
  const [data, setData] = useState({ name: '', email: '', phone: '', message: '' });
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setData({ ...data, [name]: value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault;
    const { name, email, phone, message } = data;
    if (name && email && phone && message) {
      const res = await fetch('https://virtucropwebsite-4d4d6-default-rtdb.firebaseio.com/contact.json',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name, email, phone, message,
          }),
        }
      );
      if (res) {
        setData({ name: '', email: '', phone: '', message: '' });
        alert("Form Submitted Successfully");
      } else {
        alert("Form Not Submitted");
      }
    }
    else {
      alert("Form Not Submitted");
    }
  };

  // ***************** connect to mysql
  // function handleChange(e) {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setData({ ...data, [name]: value })
  // }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post('http://localhost:5000/contact', data);
  //     console.log('Form Submitted Successfully');
  //     alert('Form Submitted Successfully');
  //     setData({ name: '', email: '', phone: '', message: '' });
  //   } catch (error) {
  //     console.error('Error submitting form: ' + error.message);
  //     alert("Form Not Submitted" + error.message);
  //   }
  // };
  return (
    <>
      <div className='mainC grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2'>
        <div className='contact flex flex-col sm:flex-col'>
          <p>
            Ready to elevate your business with VirtuCrop?
            Contact us today to explore how our expertise can
            drive your success.
          </p>
          <form onSubmit={handleSubmit} method='post' id='form' className='flex flex-col'>
            <h1>CONTACT</h1>
            <input type="text" id="name" onChange={handleChange} value={data.name} placeholder='Full Name' name="name" required />
            <input type="email" id="email" onChange={handleChange} value={data.email} placeholder='E-mail' name="email" required />
            <input type="tel" id="number" onChange={handleChange} value={data.phone} placeholder='+91' name="phone" required />
            <textarea id="message" name="message" onChange={handleChange} value={data.message} placeholder='Message' rows="4" required ></textarea>
            <button type="submit" >Submit</button>
          </form>
        </div>
        <div className='image'>
          <div className='photo'>
            <img src={contact} width={350} style={{ borderRadius: '0%', marginBottom: '10px' }} alt="contact_image" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
