import React from 'react'
import Menu from './Menu'

const TopBar = () => {
  return (
   <>
   <div className='sticky-top ' style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',background:'white'}}>
    <div style={{width:"30%",height:'60px',display:'flex',justifyContent:'space-around',alignItems:'center',border:'2px solid #e1dbdbff'}} >
        <div style={{width:'40%',height:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
            <p style={{margin:'0'}}>NIFTY 50</p>
            <p style={{margin:'0'}}>0.00</p>
            <p style={{margin:'0'}}></p>
        </div>
        <div  style={{width:'40%',height:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
            <p style={{margin:'0'}}>SENSEX</p>
            <p style={{margin:'0'}}>0.00</p>
            <p style={{margin:'0'}}></p>
         
        </div>
    </div>
      <Menu/>
   </div>
   </>
  )
}

export default TopBar