import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useContextProvider } from '../context/ContextProvider'
const Orders = () => {
  const {setStatusMessage,setIsStatus}=useContextProvider()
 
  const[allOrders,setAllOrders]=useState([])
   
  useEffect(()=>{
    
          axios.get("https://zerodha-clone-ae1z.onrender.com/allOrders",{withCredentials:true}).then((res)=>{ 
        console.log(res.data)
        setAllOrders(res?.data?.data)
        setIsStatus(res?.data?.status);
        setStatusMessage(res?.data?.message);
      }).catch((err)=>{
         setStatusMessage(err?.response?.data?.message);
            setIsStatus(err?.response?.data?.status);
      });
  },[]);
  return (
    <>
     <h3 className='mb-4' >Holdings ({allOrders.length})</h3>
   <table className="table  table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Mode</th>
       
      </tr>
    </thead>
    <tbody>
     
      {allOrders.length>0 && allOrders?.map((order,index)=>{
       
        return (
           <tr key={index}>
        <td>{order.name}</td>
        <td>{order.qty}</td>
        <td>{order.price.toFixed(2)}</td>
        <td>{order.mode}</td>
       
      </tr>
        )

      })}
     
    </tbody>
   </table>
    </>
  )
}

export default Orders