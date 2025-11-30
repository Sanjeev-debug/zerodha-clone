import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useContextProvider } from '../context/ContextProvider'


const Positions = () => {
  const {setStatusMessage,setIsStatus}=useContextProvider()

  const [allPositions,setAllPositions]=useState([])
  
  useEffect(()=>{
     
        axios.get("http://localhost:3000/allPositions",{withCredentials:true}).then((res)=>{ 
        // console.log(res.data)
        setAllPositions(res?.data?.data)
        setStatusMessage(res?.data?.message);
           setIsStatus(res?.data?.status);
      }).catch((err)=>{
         setStatusMessage(err?.response?.data?.message);
            setIsStatus(err?.response?.data?.status);
      })
      
},[])
    
  return (
   <>
    <h3 className='mb-4'  >Positions ({allPositions.length})</h3>
      <table className="table  table-bordered">
       <thead>
         <tr>
           <th scope="col">Product</th>
           <th scope="col">Instrument</th>
           <th scope="col">Qty.</th>
           <th scope="col">Avg.</th>
           <th scope="col">LTP</th>
           <th scope="col">P&L</th>
           <th scope="col">Chg.</th>
         </tr>
       </thead>
       <tbody>
        
          {allPositions.length>0 &&  allPositions?.map((stock,index)=>{
           const curValue=stock.price * stock.qty;
           const isProfit=curValue-stock.avg*stock.qty >=0.0;
           const profClass=isProfit?'profit':'loss';
           const dayClass=stock.isLoss ?'loss':'profit';
           return (
              <tr key={index}>
           <td>{stock.product}</td>
           <td>{stock.name}</td>
           <td>{stock.qty}</td>
           <td>{stock.avg.toFixed(2)}</td>
           <td>{stock.price.toFixed(2)}</td>
           <td className={profClass} >{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
           <td className={dayClass} >{stock.day}</td>
         </tr>
           )
   
         })}
        
       </tbody>
      </table>
   </>
  )
}

export default Positions