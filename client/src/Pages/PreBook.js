import React, { useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import validator from 'validator'
import TIGER from '../images/tiger.png'
// import './preBook.css'
export default function PreBook() {
   
  const navigate = useNavigate();

  const navigateToThankYou = () => {
    // 👇️ navigate to /contacts
    navigate('/thankyou');
  };

  const [user, setUser] = useState({
    fname:'',
    email: '',
    phone:''
   
  })

  const handleInputs = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]:value});
  }

  const handleSubmit = async (e)=>{
    try {
      e.preventDefault();
      const {fname,email,phone} = user;

      const targetURL = 'http://localhost:4000/book'
        if(!validator.isEmail(email)){
          window.alert('Invalid Email');
        }

      const res = await fetch(targetURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          fname,
          email,
          phone
          
        }),
      })

      if (res.status === 201 ) {
        window.alert('Form Submitted');
    } 

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-prebook">
     
       <pre></pre>
 <h1 className="heading-prebook">Pre-Book our EV’s Now</h1>
      <form onSubmit={navigateToThankYou}>
       
        <div className="ui divider"></div>
        <div className="ui form">
          <p className="pre-heading">Fill out the following details to pre book your vehicle</p>
          <div className="field">
            <label>Name</label>
            <br/>
            <input className="input-pre"
              type="text"
              onChange={handleInputs}
              value={user.fname} 
              name='fname'
              placeholder='Enter Full-Name' 
              required={true}
             
            />
          </div>
          <br/>
          <div className="field">
            <label>Email</label>
            <br/>
            <input className="input-pre"
              type="text"
              onChange={handleInputs}
              value={user.email} 
              name='email'
              placeholder='Enter Email' 
              required={true}
             
            />
          </div>
         <br/>
          <div className="field">
            <label>Phone</label>
            <br/>
            <input className="input-pre"
              type="text"
              onChange={handleInputs}
              value={user.phone} 
              name='phone'
              placeholder='Phone Number' 
              required={true}
             
            />
          </div>
        
          <div className="btn-btn">
          <button className="pre-btn" type='submit' onClick={handleSubmit}>Submit</button>
         
          </div>
          
        </div>
      </form>
      <div className='make-in-india'>
        <img src={TIGER}  alt='made-in-india' className='make-in-india-img'/>


      </div>
    </div>
  );
}
