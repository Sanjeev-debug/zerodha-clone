import React from 'react'

const Pricing = () => {
  return (
    <>
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-4">
                <h1 className='mb-5'>Unbeatable pricing</h1>
                <p className='mb-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges</p>
                <a style={{textDecoration:'none'}} href="">See pricing <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="col-2"></div>
            <div className="col-6">
                <div className="row text-center">
                    <div className="col p-5 border ">
                        <h1><i className="fa-solid fa-indian-rupee-sign fs-2"></i>0</h1>
                        <p className='mt-2'> Free equity delivery and <br /> direct mutual funds  </p>
                    </div>
                    <div className="col p-5 border">
                        <h1 ><i className="fa-solid fa-indian-rupee-sign fs-2"></i>20</h1>
                        <p className='mt-2'> Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Pricing