import React, { useContext, useState } from 'react'
import GeneralContext from './GeneralContext.jsx'
import {Link, NavLink} from 'react-router-dom'
import './BuyActionWindow.css'
import axios from 'axios'

const BuyActionWindow = ({uid}) => {
     const generalContext = useContext(GeneralContext);
     const[stockQty,setStockQty]=useState(1);
     const[stockPrice,setStockPrice]=useState(0.0);
 
    const handleCancel=()=>{
        console.log('close');
        generalContext.closeBuyWindow();
    }
    const handleBuySubmit=()=>{
        axios.post('https://zerodha-clone-ae1z.onrender.com/newOrder',{
             name: uid,
             qty:  stockQty,
             price:  stockPrice,
             mode: "BUY",

        },
        {withCredentials:true}
    );
        generalContext.closeBuyWindow();
    }

  return (
    <>
       <div className='BuyWindowContainer' >
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}} >
            <fieldset>
                <legend >Qty.</legend>
                <input style={{width:'100px'}} type="number" name='qty' id='qty' value={stockQty} onChange={(e)=>setStockQty(e.target.value)} />
            </fieldset>
            <fieldset>
                <legend>Price</legend>
                <input type="number" name='price' step='0.05' value={stockPrice} onChange={(e)=>setStockPrice(e.target.value)} />
            </fieldset>

        </div>
        <div className='p-4' style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
            <span>Margin required 140.65</span>
            <div style={{width:'40%',display:'flex',justifyContent:'space-around'}} >
                <Link className='btn btn-primary' onClick={handleBuySubmit} >Buy</Link>
                <Link className='btn btn-secondary' onClick={()=>handleCancel()} >Cancel</Link>
            </div>
        </div>
       </div>
    </>
  )
}

export default BuyActionWindow