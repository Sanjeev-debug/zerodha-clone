import React, { useContext, useState } from "react"
import {Tooltip,Grow} from '@mui/material'
import {watchlist} from '../data/data.js'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './WatchList.css'
import GeneralContext from './GeneralContext.jsx'
import { DoughnutChart } from "./DoughnutChart.jsx";

const WatchList = ()=>{
  const labels=watchlist.map((subArray)=> subArray["name"]);
const data={
  labels,
   datasets: [
    {
      label: 'Price',
      data: watchlist.map((subArray)=>subArray.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],

}
//      export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };


  return(
    <>
    <div>
      <div style={{borderBottom:'1px solid #e1dbdbff', display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px'}} >
          <input style={{width:'90%',padding:'5px',outline:'none'}} className="search" type="text" name="search" id="search" placeholder="Search eg:infy, bes, nifty fut weekly, gold mcx" />
          <span className="count" >{watchlist.length}/50</span>
      </div>
      <ul className="list" >
        {watchlist.map((stock,index)=>{
          return(
            <WatchListItem stock={stock} key={index} />
          )
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
    </>

  )
};

export default WatchList
const WatchListItem =(({stock})=>{
  const [showWatchListAction,setShowWatchListAction]=useState(false);

  const handleMouseEnter=(e)=>{
    setShowWatchListAction(true)
  }
   const handleMouseLeave=(e)=>{
    setShowWatchListAction(false)
  }
  return(
    <li style={{width:'100%', fontSize:'10px',padding:'5px',cursor:'pointer',borderBottom:'1px solid #e1dbdbff'}} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <p className={stock.isDown?"down":'up'} >{stock.name}</p>
        <div>
          <span>{stock.percent}</span>
          {stock.isDown ?<KeyboardArrowDownIcon className="down" />:<KeyboardArrowUpIcon className="up" /> }
           <span>{stock.price}</span>
        </div>
      </div>
     {showWatchListAction && <WatchListActions uid={stock.name} /> }
    </li>
  )
});

const WatchListActions= ({uid})=>{
  const generalContext = useContext(GeneralContext);
 const handleOpen=()=>{
  generalContext.openBuyWindow(uid);
 }

  return(
    <div style={{width:'100%',position:'relative'}}>
      <span style={{position:'absolute',top:'-27px',left:'60%',display:'flex',justifyContent:'space-around',width:'40%'}} >
        <Tooltip title='Buy (B)' placement="top" arrow TransitionComponent={Grow} >
          <button style={{background:'#19d1e9ff'}} onClick={handleOpen} >Buy</button>
        </Tooltip>
         <Tooltip title='Sell (S)' placement="top" arrow TransitionComponent={Grow} >
          <button style={{background:'#da290aff'}} >Sell</button>
        </Tooltip>
         <Tooltip title='Analitics (A)' placement="top" arrow TransitionComponent={Grow} >
         <button style={{background:'#1f0451ff'}} ><BarChartIcon/></button>
        </Tooltip>
         <Tooltip title='More ' placement="top" arrow TransitionComponent={Grow} >
          <button style={{background:'#8d8f90ff'}} ><MoreHorizIcon/></button>
        </Tooltip>
      </span>
    </div>
  )
}