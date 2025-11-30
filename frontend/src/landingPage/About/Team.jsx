import React from 'react'

const Team = () => {
  return (
      <div className="container mt-5  border-top">
        <div className="row mt-5  text-center">
            <h3 className='text-muted ' >People</h3>

        </div>
        <div className="row ">
            <div className="col  p-5 text-center">
               <img src="images/sanjeev.png" alt="Loading..."  style={{borderRadius:'100%',width:'50%'}} />
               <h4 className='text-muted mt-3'>Sanjeev Kumar</h4>
               <p className='mt-2' >Founder, CEO</p>
            </div>
            <div className="col mt-5 p-5">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <a style={{textDecoration:'none'}} href="">Homepage</a> / <a style={{textDecoration:'none'}}  href="">TradingQnA</a> / <a style={{textDecoration:'none'}}  href="">Twitter</a></p>
            </div>
        </div>
    </div>
  )
}

export default Team