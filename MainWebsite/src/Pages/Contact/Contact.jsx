import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [data,setData]=useState({name:'',email:'',phone:'',message:''});

  function handleChange(e){
      const name = e.target.name;
      const value=e.target.value;

      setData({...data, [name]:value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(data)
    alert('done')

  }
  return (
    <>
      <div className='contact md:flex-col  sm:flex-col'>
        <form onSubmit={handleSubmit} method='post'  className='flex flex-col'>
          <h1>CONTACT</h1>
          {/* <label for="name">Name:</label> */}
          <input type="text" id="name" onChange={handleChange} value={data.name} placeholder='Name' name="name" required />
            {/* <label for="email">Email:</label> */}
            <input type="email" id="email" onChange={handleChange} value={data.email} placeholder='E-mail' name="email" required />
            <input type="number" id="number" onChange={handleChange} value={data.phone} placeholder='+91' name="phone" required />
              {/* <label for="message">Message:</label> */}
              <textarea id="message" name="message" onChange={handleChange} value={data.message} placeholder='Message' rows="4" required ></textarea>
              <button type="submit" >Submit</button>

              <p>{data.name},{data.email},{data.phone},{data.message}</p>
            </form>
          </div>
        </>
        )
}

        export default Contact
