import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import STPI from '../images/STPI.png'
import SUI from '../images/SUI.png'
import UOD from '../images/UOD.png'
import MOE from '../images/MOE.png'
import IESA from '../images/iesa.png'


const partners = [
    {
        src: STPI,
        name: "Software Technology Parks of India"
    },
    {
        src: SUI,
        name: "Startupindia"
    },
    {
        src: UOD,
        name: "University of Delhi"
    },
    {
        src: MOE,
        name: "Ministry of Electronics & Information Technology"
    },
    {
        src: IESA,
        name: "India Electronic & semiconductor association"
    },
]


export default function PartnersCarosel() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div>
        <Carousel responsive={responsive}>
            {
                partners.map(({src, name})=>{
                    return (
                        <div>
                            <div className='partner-img-cont'>
                                <img src={src} className='partner-img' alt='name' />
                            </div>
                            <div className='partner-name-cont'>
                            {name}
                            </div>
                        </div>
                    )
                })
            }
        </Carousel>;
    </div>
  )
}
