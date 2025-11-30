import React from 'react'

const Education = () => {
  return (
    <>
    <div className="container mt-5  p-5">
      <div className="row">
        <div className="col">
          <img src="images/education.svg" alt="loading.." />
        </div>
        <div className="col">
          <h3 className='mb-5'>Free and open market education</h3>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a style={{textDecoration:'none'}} href="">Varsity <i className="fa-solid fa-right-long"></i></a>
          <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a style={{textDecoration:'none'}} href="">TradingQ&A <i className="fa-solid fa-right-long"></i></a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Education