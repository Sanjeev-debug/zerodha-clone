import React from 'react'

const Pricing = () => {
  return (
   <>
   <div className="container mt-5 p-5 text-center ">
    <div className="row">
        <div className="col">
            <img className='p-5' src='images/pricing0.svg' alt="" />
            <h3 className='text-muted' >Free equity delivery</h3>
            <p className='text-muted mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
         <div className="col">
            <img  className='p-5' src="images/intradayTrades.svg" alt="" />
            <h3 className='text-muted'>Intraday and F&O trades</h3>
            <p className='text-muted mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
         <div className="col">
            <img  className='p-5' src="images/pricing0.svg" alt="" />
            <h3 className='text-muted'>Free direct MF</h3>
            <p className='text-muted mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
       
    </div>

    <div className="row mt-5">
         <table className="table  table-striped border ">
  <thead>
    <tr>
      
      <th className='text-muted' scope="col">Service</th>
      <th className='text-muted' scope="col">Billing Frquency</th>
      <th className='text-muted' scope="col">Charges</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
     
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>
    </div>
   </div>
   </>
  )
}

export default Pricing