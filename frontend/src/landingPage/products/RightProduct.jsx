import React from 'react'

const RightProduct = ({productName,productDescription,learnmore,imageURL}) => {
  return (
    <div className="container mt-5 p-5">
        <div className="row ">
            <div className="col-5 mt-5 p-5">
                <h2 className='mt-5 text-muted px-5' >{productName}</h2>
                <p  className='mt-4 px-5' style={{lineHeight:'30px'}}  >{productDescription}</p>
                <a className='mt-4 px-5 ' style={{textDecoration:'none'}} href={learnmore}>Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="col-7">
                <img src={imageURL} alt="" />
            </div>
        </div>
    </div>
  )
}

export default RightProduct