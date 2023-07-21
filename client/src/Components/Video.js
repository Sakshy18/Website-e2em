import React from 'react'
import Typewriter from 'typewriter-effect'
// import VIDEO from '../videos/homeVid.mp4';

import H5 from '../images/homebg5.png'

export default function Video() {
  return (
    <div class="container-zing-img">
       
       <h1 className='typewriter-home'>
        <Typewriter
        options={{
            autoStart:true,
            loop:true,
            delay:60,
            strings:["Building vehicles that are Effecient","Compact and Light-Weight","Affordable and Energy saving vehicles"]
        }}
        />
            </h1>
    <img src={H5} alt='zing' className='prod-zing-img' />
    </div>
    // <div className='video-cont'>
    //     <div className='video-text'>
    //       <h1 className='video-head'>The Way You Travel Matters</h1>
    //       <button className='video-btn' type='button' >LEARN MORE</button>
    //     </div>
    //     <video autoPlay={true} loop={true} muted>
    //         <source src={VIDEO} type="video/mp4" />
    //     </video>
    // </div>
  )
}
