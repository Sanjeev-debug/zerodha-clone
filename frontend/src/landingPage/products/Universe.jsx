import React from 'react'

const Universe = () => {
  return (
   <>
   <div className="container text-center mt-5">
    <div className="row">
       <h4 className='mb-5 text-muted' >Want to know more about our technology stack? Check out the <a style={{textDecoration:'none'}} href=""> Zerodha.tech </a> blog.</h4>
       <h3  className='mt-5 text-muted' >The Zerodha Universe</h3>
       <p className='mt-3' >Extend your trading and investment experience even further with our partner platforms</p>
    </div>
    <div className="row mt-5  p-5">
        <div className="col p-5">
            <div style={{width:'70%'}} >
                <img style={{width:'100%'}} src="images/streakLogo.png" alt="" />
                <p className='mt-3'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>
            </div>
            <div className='mt-5'  style={{width:'70%'}}>
                <img style={{width:'100%'}} src="images/zerodhaFundhouse.png" alt="" />
                <p className='mt-3'> Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
 </p>
            </div>
        </div>
        <div className="col p-5 ">
            <div style={{width:'70%'}} > 
                <img style={{width:'100%'}} src="images/sensibullLogo.svg" alt="" />
                <p className='mt-3'>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
            </div>
            <div  className='mt-5' style={{width:'70%'}} >
                <img style={{width:'100%'}} src="images/smallcaseLogo.png" alt="" />
                <p className='mt-3'>Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
            </div>
        </div>
        <div className="col p-5">
            <div style={{width:'70%'}} >
                <img style={{width:'100%'}} src="images/goldenpiLogo.png" alt="" />
                <p className='mt-3'>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
            </div>
            <div  className='mt-5' style={{width:'70%'}} >
                <img style={{width:'100%'}} src="images/dittoLogo.png" alt="" />
                <p className='mt-3'>Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free</p>
            </div>
        </div>
        
    </div>
    <div className="row mb-5 text-center">
        <button className='btn btn-primary' style={{width:'20%',margin:'0 auto'}}>Sign up for free</button>
    </div>
   </div>
   </>
  )
}

export default Universe