import React from 'react'

const Stats = () => {
  return (
    <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-6 p-5">
               <h1 className='mb-5' >Trust with confidence</h1>
               <div className='mt5'>
                <h2 className='mt-5'>Customer-first always</h2>
                <p className='text-muted' >That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
               </div>
               <div className='mt5'>
                <h2 className='mt-4' >No spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
               </div>
                <div className='mt5'>
                <h2 className='mt-4'>The Zerodha universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
               </div> <div className='mt5'>
                <h2 className='mt-4'>Do better with money</h2>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
               </div>
              
            </div>
            <div className="col-6 p-5">
                 <img src="images/ecosystem.png" alt="" style={{width:"95%"}} />
                 <div className='text-center'>
                    <a className='mx-5' style={{textDecoration:'none'}} href="">Explore our products <i className="fa-solid fa-right-long"></i></a>
                    <a href=""style={{textDecoration:'none'}}>Try Kite demo <i className="fa-solid fa-right-long"></i> </a>
                 </div>
            </div>
            <img className='mb-5'  src="images/pressLogos.png" alt="" style={{width:'70%',margin:'0 auto'}} />
        </div>
    </div>
    </>
  )
}

export default Stats