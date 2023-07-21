import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LOGO from '../images/E2EM_Logo.png'

export default function Navbar() {

    const [click, setClick]  = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <>
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid nav-container">
    <Link className="navbar-brand" to="/"><img src={LOGO} alt='Logo' className='nav-logo'/></Link>
    <button className="navbar-toggler custom-toggler" onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {
        !click ? <span style={{color:'white'}}>↓</span> : <span style={{color:'white'}}>X</span>
      }
      
      
      {/* <span className="navbar-toggler-icon"></span> */}
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="product">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact Us</Link>
        </li>

        <li className="nav-item" style={{marginRight: '0px'}}>
          <Link className="nav-link" to="book"><button className='btn-pre-book' type='button'> Pre Book Now </button></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    </>
  )
}
