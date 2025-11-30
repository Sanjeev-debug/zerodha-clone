import React from 'react'

const Awards = () => {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-6 p-5">
            <img src="images/largestBroker.svg" alt="" />
          </div>
          <div className="col-6 p-5">
            <h1 className='mt-5'>Large Stock broker in india </h1>
            <p>2+ million Zoradha Clients contributes to over 15% of all retail order volumes in india daily by trading and investing in :</p>
            <div className="row mt-5">
              <div className="col-6">
                <ul>
                  <li><p>Future and options</p> </li>
                  <li><p>Commodity derivatives</p></li>
                  <li><p>Currency derivatives</p></li>

                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li><p>Stocks and IPOs</p> </li>
                  <li><p>Direct mutual funds</p></li>
                  <li><p>Bonds and Govt. Securities</p></li>

                </ul>
              </div>
            </div>
            <img src="images/pressLogos.png" alt="Loading..." style={{width:"90%"}} />

          </div>
        </div>
      </div>
    </>
  )
}

export default Awards