import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers For Your Pets</h1>
        <p>Subscribe to our newsletter and stay updated </p>
        <div>
            <input type="email" placeholder='Enter your Email Address' />
            <button>Subscribe</button>
        </div>

    </div>
  )
}
export default Newsletter
