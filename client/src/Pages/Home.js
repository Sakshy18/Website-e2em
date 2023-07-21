// import React from 'react'
import IMG1 from '../images/img1.png'
import ZING from '../images/caros-1.png'
import ROVE from '../images/caros-2.png'
import I1 from '../images/1.png'
import I2 from '../images/2.png'
import I3 from '../images/3.png'
import I4 from '../images/4.png'
import I5 from '../images/5.png'
import I6 from '../images/6.png'
import w1 from '../images/w1.png'
import w2 from '../images/w2.png'
import w3 from '../images/w3.png'
import w4 from '../images/w4.png'
import w5 from '../images/w5.png'
import IMG20 from '../images/img20.png'
import APP from '../images/our-app.png'
import APPSTORE from '../images/appstore.png'
import GPLAY from '../images/googleplay.png'
import CYCMOB from '../images/appe2em.png'
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const imageData = [
    {
      alt: "image1",
      src:ROVE },
    {
      
      alt: "image2",
      src:ZING },
   
  ];
  
  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.src} alt={image.alt} className='img-caros' />
    
    </div>
  ));
 
const principles = [
    {
        src:I1,
        heading:"Reseach and Development",
        content:"Investing in cutting-edge technology for energy-efficient electric vehicles."
    },
    {
        src:I2,
        heading:"Sustainable Manufacturing Practices",
        content:"Eco-friendly production with renewable energy sources and local sourcing."
    },
    
    {
        src:I3,
        heading:"Connectivity and Mobility Compatibility",
        content:"Seamlessly integrating EVs with smart connectivity and advanced infrastructure communication."
    },
    {
        src:I4,
        heading:"Reseach and Development",
        content:"Investing in cutting-edge technology for energy-efficient electric vehicles."
    },
    {
        src:I5,
        heading:"Reseach and Development",
        content:"Investing in cutting-edge technology for energy-efficient electric vehicles."
    },
    {
        src:I6,
        heading:"Reseach and Development",
        content:"Investing in cutting-edge technology for energy-efficient electric vehicles."
    },

]

const why = [
    {
        src:w5,
        heading:"Local Sourcing",
        content:"Collaborating with local suppliers and manufacturers to support economies."
    },
    {
        src:w1,
        heading:"Affordability",
        content:"Accessible electric vehicles at competitive prices for wider consumer reach."
    },
    
    {
        src:w2,
        heading:"Cutting-Edge Technology",
        content:"Advanced research and development for superior electric mobility solutions."
    },
    {
        src:w3,
        heading:"Sustainable Design",
        content:" Compact and eco-friendly electric vehicles reducing environmental impact."
    },
    {
        src:w4,
        heading:"Renewable Energy Manufacturing",
        content:"State-of-the-art facilities powered by renewable energy sources."
    }

]

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <>
        
{/*             
            <div className='know-main-cont'>
            <h1 className='who-cont'>Who Are We?</h1>
                <div className='row'>
                    <div className='col-md-6 img1-cont'>
                        <img src={IMG1} alt='Img1' className='img1'/>

                    </div>
                    <div className='col-md-5 know-cont'>
                        <div>
                            <h2 className='head-know'>
                                Know About Us
                            </h2>
                        </div>
                        <div>
                            <p className='text-know'>
                            E2EM (End to End Electric Mobility) is a pioneering electric mobility company dedicated to transforming transportation. We provide compact, eco-friendly electric vehicles that seamlessly integrate with existing infrastructure, promoting connectivity and a greener environment. Our mission is to revolutionize commuting with sustainable, affordable, and superior EV solutions.
                            </p>
                           
                        </div>
                        <div>
                            <button type='button' className='learn-btn' >LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div> */}

<div className='principle-page-cont'>


            <div className='principle-cont'>
                <div >
                    <h1 className='principle-head'>
                        Our Core Principles 
                    </h1>
                </div>
                <div>
                    <div className='row principle-main-box'>
                        
                        {
                            principles.map(({src, heading, content})=>{
                                return(
                                    <div className='col-md-3 col-sm-6  principle-box'>
                                    <div>
                                        <img className='principle-img' src={src} alt='1' />
                                        <h3 className='principle-heading'>
                                            {heading}
                                        </h3>
                                        <p className='principle-text'>
                                            {content}
                                        </p>
                                    </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            </div>
            
            <div className='prod-contain'>
            <div className="prod-carousal">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        // className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>

            </div>

            {/* <div>
                <div className='rove-cont'>
                    <div>
                        <img src={IMG20} className='rove-img' alt='rove' />
                    </div>
                    <div>
                        <p className='rove-text'>THE WAY YOUR TRAVEL MATTERS</p>
                    </div>
                    <div>
                        <button type='button' className='learn-btn' >LEARN MORE</button>
                    </div>
                </div>
            </div> */}


     


<div className='why-choose-cont'>
        <div className='why-main-cont'>
            <div>
                <div>
                    <h1 className='why-main-head'>
                        Why Choose E2EM?
                    </h1>
                </div>
                <div className='row principle-main-box'>
                        {
                            why.map(({src, heading, content})=>{
                            return(
                                <div className='col-md-4 col-sm-6  why-box'>
                                    <div className='why-cont'>
                                        <div className='why-img-cont'>
                                        <img className='why-img' src={src} alt='1' />
                                        </div>
                                        <h3 className='why-heading'>
                                            {heading}
                                        </h3>
                                        <p className='why-text'>
                                            {content}
                                        </p>
                                    </div>
                                    </div>
                            )
                        })
                        }
                </div>
                
            </div>
        </div>
</div>

        <div>
            <div className='try-main-cont'>
                <div className='try-cont'>
                    <div>
                        <div className='try-head'>
                        Try our app
                        </div>
                        <div className='try-text'>
                        The E2EM Bike app is a must-have for E2EM electric bike owners, offering a seamless and enhanced riding experience. With features like real-time battery monitoring, navigation, and trip history, it ensures efficient and convenient mobility on the go. 
                        </div>
                        
                        <div className='try-download-text'>
                            Download our App Now
                        </div>
                        <div className='download-cont'>
                            <div>
                                <img src={APPSTORE} className='try-download' alt='app'/>
                            </div>
                            <div>
                                <img src={GPLAY} className='try-download' alt='play'/>
                            </div>
                        </div>
                    </div>
                    <div className='cyc-img-cont'>
                        <img src={APP} className ='cyce2em' alt='cyc-mob' />
                        {/* <img src={MOBILE} className='mobile-img' alt='mobile'/> */}
                        {/* <img src={CYCLE} className='cycle-img' alt='cycle'/> */}
                    </div>
                </div>
            </div>
        </div>
        


        


    </>
  )
}
