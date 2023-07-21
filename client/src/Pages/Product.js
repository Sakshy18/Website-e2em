import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import ZING from '../images/zing_new.png'
import ROVE from '../images/prod_rove.png'
import IMG1 from '../images/f1.png'
import IMG2 from '../images/f5.png'
import IMG3 from '../images/f3.png'
import IMG4 from '../images/f8.png'
import IMG5 from '../images/f11.png'
import IMG6 from '../images/f6.png'
import IMG7 from '../images/f13.png'
import IMG8 from '../images/f14.png'
import IMG9 from '../images/f19.png'
import IMG10 from '../images/f10.png'
import PreBook from './PreBook'
export default function Product() {
  const navigate = useNavigate();

  const navigateToPrebook = () => {
    // 👇️ navigate to /contacts
    navigate('/book');
  };

 
const features = [
  {
      src:IMG1,
      heading:"Fleet operations software",
     
  },
  {
      src:IMG2,
      heading:" Digital dashboard",
    
  },
  
  {
      src:IMG3,
      heading:"IoT enabled",
  },
  {
      src:IMG4,
      heading:"250W Bldc Hub Motor ",
  },
  {
      src:IMG5,
      heading:"50 km range ",
  },
  {
      src:IMG6,
      heading:"18kg Kerb weight",
  },
  {
    src:IMG7,
    heading:"Li-ion battery pack",
  },
  {
    src:IMG8,
    heading:"Mobile App connectivity",
  },
  {
    src:IMG9,
    heading:"2.5 hours charging time'",
  },
  {
    src:IMG10,
    heading:"LED Headlights",
  },
 

]
  return (
   <div>

<div className='container-main'>
    <div className='prod-heading-div'>
      <h2 className='prod-heading'>Products</h2>
    </div>
    <div class="container-zing-img">
  <img src={ZING} alt='zing' className='prod-zing-img' />
  
  <div className='features-zing'>
    <div className='heading2'>
     <h2 className='head-2'>Product Features And Specifications</h2> 
    </div>


                    <div className='row-features-main-box'>
                        
                        {
                            features.map(({src, heading})=>{
                                return(
                                    // <div className='col-md-3 col-sm-6 col-xs-11 principle-box'>
                                    <div className='one-feature'>
                                        <img className='feature-img' src={src} alt='1' />
                                        <h3 className='feature-heading'>
                                            {heading}
                                        </h3>
                                      
                                    </div>
                                    // </div>
                                )
                            })
                        }
                    </div>
                    <div className='btn-rove'>
                            <button type='button' className='buy-rove-btn' onClick={navigateToPrebook} >Pre-Book Now</button>
                            <Routes>
                            <Route path="/book" element={<PreBook />} />
                          
                          </Routes>
                        </div>
             

</div>
 
</div>
<div class="container-zing-img">
  <img src={ROVE} alt='Rove' className='prod-zing-img' />
  
  <div className='features-zing'>
    <div className='heading2'>
     <h2 className='head-2'>Product Features And Specifications</h2> 
    </div>


                    <div className='row-features-main-box'>
                        
                        {
                            features.map(({src, heading})=>{
                                return(
                                    // <div className='col-md-3 col-sm-6 col-xs-11 principle-box'>
                                    <div className='one-feature'>
                                        <img className='feature-img' src={src} alt='1' />
                                        <h3 className='feature-heading'>
                                            {heading}
                                        </h3>
                                      
                                    </div>
                                    // </div>
                                )
                            })
                        }
                    </div>
                    <div className='btn-rove'>
                            <button type='button' className='buy-rove-btn' onClick={navigateToPrebook} >Pre-Book Now</button>
                            <Routes>
                            <Route path="/book" element={<PreBook />} />
                          
                          </Routes>
                        </div>
             

</div>
 
</div>



   </div> 
   
   </div>




  )
}
