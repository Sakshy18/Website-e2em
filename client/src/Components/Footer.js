import React from 'react'
import LOGO from '../images/E2EM_Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faInstagram, faFacebook, faTwitter)



export default function Footer() {
  return (
    <div>
        <div>
            <div className='footer-cont '>
                <div className='footer row'>
                    <div className='col-md-3 col-sm-12' style={{textAlign: 'center'}}>
                        <img src={LOGO} alt='Logo' className='footer-logo' />
                    </div>
                    <div className='footer-reach col-md-3 col-sm-4'>
                        <div className='footer-reach-head'>
                            Reach out to us
                        </div>
                        <div className='footer-reach-info-cont'>
                            <div className='footer-reach-info'>
                                <i class="zmdi zmdi-phone"></i>
                                <i class="zmdi zmdi-email"></i>
                                <i class="zmdi zmdi-pin"></i>
                            </div>
                            <div>
                            <div className='footer-phone'>
                                +91 8273670090
                            </div>
                            <div className='footer-email'>
                                e2em@info.com
                            </div>
                            <div className='footer-address'>
                                #10, Electropreneur Park, Library Building, 3rd Floor, South Campus, University Of Delhi, 110021
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='footer-about col-md-2 col-sm-2'>
                        <div className='footer-about-head'>
                            About Us
                        </div>
                        <div className='footer-about-details'>
                            <div className='footer-about-items'>
                                Contact Us
                            </div>
                            <div className='footer-about-items'>
                                Products
                            </div>
                            <div className='footer-about-items'>
                                License
                            </div>
                            <div className='footer-about-items'>
                                FAQ's
                            </div>
                        </div>
                        
                    </div>
                    <div className='footer-query col-md-2 col-sm-4'>
                        {/* <div className='footer-query-head'>
                            Have Some Query? write to us!   
                        </div>
                        <div className='footer-query-details'>
                            <div>
                                <input type='text' className='footer-input'/>
                            </div>
                            <div>
                                <button className='footer-btn' type='button'>SEND</button>
                            </div>
                        </div> */}
                        

                        <div className='footer-about-head'>
                            Social Links
                        </div>
                        
                        {/* <div className='footer-copyright'> */}
                        <div className='footer-copyright-icons'>
                        <FontAwesomeIcon className='footer-icon' icon="fa-brands fa-instagram" />
                        <FontAwesomeIcon className='footer-icon' icon="fa-brands fa-facebook" /> 
                        <FontAwesomeIcon className='footer-icon' icon="fa-brands fa-twitter"  />
                        </div>
                    {/* </div> */}

                    </div>
                </div>
                <div>
                    <div>
                        <hr className='footer-hr'/>
                    </div>
                    <div className='footer-copyright'>
                        <div className='footer-copyright-text'>
                            © Copyright 2024 E2EM TECHNOLOGIES. All Rights Reserved. 
                        </div>
                        {/* <div className='footer-copyright-icons'>
                        <FontAwesomeIcon className='footer-icon' icon="fa-brands fa-instagram" />
                        <FontAwesomeIcon className='footer-icon' icon="fa-brands fa-facebook" />
                        <FontAwesomeIcon className='footer-icon' icon="fa-brands fa-twitter" />
                        </div> */}
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}
