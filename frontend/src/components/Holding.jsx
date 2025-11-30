import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { VerticalChart } from './VerticalChart'
import { useContextProvider } from '../context/ContextProvider'

const Holding = () => {

const {setStatusMessage,setIsStatus}=useContextProvider()
  const [allHoldings,setAllHoldings]=useState([])
  useEffect(()=>{
     
       axios.get("https://zerodha-clone-ae1z.onrender.com/allHoldings",{withCredentials:true}).then((res)=>{ 
        // console.log(res.data)
        setAllHoldings(res?.data?.data)
        setStatusMessage(res?.data?.message);
        setIsStatus(res?.data?.status);
      }).catch((err)=>{
         setStatusMessage(err?.response?.data?.message);
            setIsStatus(err?.response?.data?.status);
      });
     
  },[])

     const labels=allHoldings.map((subArray)=>subArray["name"]);
     const data ={
      labels,
      datasets:[
        {
           label: 'Stock Price',
           data: allHoldings.map((stock) => stock.price ),
           backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
     }
//   export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

  return (
   <>
   <h3 className='mb-4' >Holdings ({allHoldings.length})</h3>
   <table className="table  table-bordered">
    <thead>
      <tr>
        <th>Instrument</th>
        <th>Qty.</th>
        <th>Avg. cost</th>
        <th>LTP</th>
        <th>Cur. val</th>
        <th>P&L</th>
        <th>NET chg.</th>
        <th>Day chg.</th>
      </tr>
    </thead>
    <tbody>
     
      { allHoldings.length>0 && allHoldings?.map((stock,index)=>{
        const curValue=stock.price * stock.qty;
        const isProfit=curValue-stock.avg*stock.qty >=0.0;
        const profClass=isProfit?'profit':'loss';
        const dayClass=stock.isLoss ?'loss':'profit';
        return (
           <tr key={index}>
        <td>{stock.name}</td>
        <td>{stock.qty}</td>
        <td>{stock.avg.toFixed(2)}</td>
        <td>{stock.price.toFixed(2)}</td>
        <td>{curValue.toFixed(2)}</td>
        <td className={profClass} >{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
        <td className={profClass} >{stock.net}</td>
        <td className={dayClass} >{stock.day}</td>
      </tr>
        )

      })}
     
    </tbody>
   </table>
   <div className="row mt-5 ">
    <div className="col">
      <h5>29,875.<span>55</span>{" "}</h5>
      <p>Total investment</p>
    </div>
    <div className="col">
       <h5>31428.<span>95</span>{" "}</h5>
      <p>Total investment</p>
    </div>
    <div className="col"></div>
   </div>
   <VerticalChart data={data} />
   </>
  )
}

export default Holding