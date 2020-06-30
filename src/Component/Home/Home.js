import React from 'react'
import image1 from './lisa.jpeg'
import image2 from './nicole.jpeg'
import image3 from './brandi.jpeg'
import {withRouter} from 'react-router-dom'
import { Slide } from 'react-slideshow-image';


const images=[image1,image2,image3]
const Home=(props)=>{

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        pauseOnHover: true,
        onChange: (oldIndex, newIndex) => {
          console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
      }

    return(
        <div className="slide-container">
        <Slide  {...properties}>
          <div className="each-slide">
          <img src={image1} alt=""/>
          </div>
          <div className="each-slide">
          <img src={image2} alt=""/>
          </div>
          <div className="each-slide">
          <img src={image3} alt=""/>
          </div>
        </Slide>
      </div>
    )

}


export default withRouter(Home);