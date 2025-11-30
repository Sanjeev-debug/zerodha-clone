import React from 'react'
import {useCookies} from 'react-cookie'
;

const Hero = () => {
 
  return (
    <div className="container p-5 text-center">
        <div className="row">
         
             
            <img src="images/homeHero.png" alt="Hero Image" title='Hero Image' className='mb-5' />
            <h1  className='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:'200px',margin:'0 auto'}} >Signup Now</button>
        </div>
    </div>
  )
}

export default Hero