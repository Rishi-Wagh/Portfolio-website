import React, { useState } from 'react'
import './description.css'

const ImageSlider = ({images}) => {
    const [sliderPosition , setSliderPosition] = useState(0);

  return (
    <div className='slider-conatner'>
        <div className="img-slider" style={{ transform: `translateX(-${sliderPosition}%)`}}>
            {images.map((img, i) => (
                <div className="slider-img-container" key={i}>
                   <img src={img} className='image'/>
                </div>
            ))}
        </div>
        <div className="handle">
            <div className={sliderPosition == 0 ? "active-circle" : "circle"} onClick={()=>setSliderPosition(0)}></div>
            <div className={sliderPosition == 24 ? "active-circle" : "circle"} onClick={()=>setSliderPosition(24)}></div>
            <div className={sliderPosition == 48 ? "active-circle" : "circle"} onClick={()=>setSliderPosition(48)}></div>
            <div className={sliderPosition == 72 ? "active-circle" : "circle"} onClick={()=>setSliderPosition(72)}></div>
            {images.length > 7 &&
             <div className={sliderPosition == 96 ? "active-circle" : "circle"} onClick={()=>setSliderPosition(96)}></div>
             }
        </div>
    </div>
  )
}

export default ImageSlider
