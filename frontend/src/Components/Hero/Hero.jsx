import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                </div>
                <p>collections</p>
                <p>for every pet</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arrow-icon" />
            </div>
            
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="hero-image" />

            </div>
    </div>
  )
}
export default Hero