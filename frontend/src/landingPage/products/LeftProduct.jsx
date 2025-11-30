import React from 'react'

const LeftProduct = ({imageURL,productName,productDescription,tryDemo,learnMore,googlePaly,appStore}) => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-8 p-3 text-center">
                <img src={imageURL} alt="" />
            </div>
            <div className="col-4 pt-5">
                <h3 className='text-muted' >{productName}</h3>
                <p className='text-muted mt-3 fs-5 ' >{productDescription}</p>
             <div className='mt-3'>
                   <a style={{textDecoration:'none'}} href={tryDemo}>Try demo <i className="fa-solid fa-right-long"></i></a>
                <a className='mx-5' style={{textDecoration:'none'}} href={learnMore}>Learn more <i className="fa-solid fa-right-long"></i></a>
             </div>
             <div className='mt-4'>
                <a style={{textDecoration:'none'}} href={googlePaly}><img src='images/googlePlayBadge.svg' alt="" /></a>
                <a className='mx-4' style={{textDecoration:'none'}} href={appStore}><img src='images/appstoreBadge.svg' alt="" /></a>
             </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LeftProduct