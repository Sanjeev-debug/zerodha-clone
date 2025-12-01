import React from 'react'
const API = import.meta.env.VITE_API_URL;
import { Link, NavLink} from 'react-router-dom'
import './Menu.css'
import { useState } from 'react'
import { useContextProvider } from '../context/ContextProvider'
import axios from 'axios';



const 
Menu = () => {
     const {setIsLogin,setIsStatus,setStatusMessage}=useContextProvider();


   
  const [isLogout,setIsLogout]=useState(false);

  const handleLogout = async () => {
  try {
    const res = await axios.post(`${API}/logout`, {}, { withCredentials: true });
    console.log(res.data);


    setIsLogin(res?.data?.login);
    setIsStatus(res?.data?.status);
    setStatusMessage(res?.data?.message)
     setIsLogout(!isLogout)
    
  } catch (err) {
    console.log(err);
  }
};
 
  return (
    <>
    <div className="container-fluid" style={{width:'70%',height:'60px',border:'2px solid #e1dbdbff',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <img src="/images/logo.png" alt="" style={{height:'90%',width:'6%'}} />
        <div style={{width:'80%',height:'90%',display:'flex',justifyContent:'space-evenly',alignItems:'center'}} >
          <ul style={{width:'70%',height:'100%',display:'flex',justifyContent:'space-around',alignItems:'center',margin:0}} >
            <li style={{listStyle:'none'}} ><NavLink  className={({ isActive }) => isActive ? "active" : ""}  style={{textDecoration:'none',color:'inherit'}} to={'/dashboard'} end >Dashboard</NavLink></li>
            <li style={{listStyle:'none'}} ><NavLink  className={({ isActive }) => isActive ? "active" : ""} style={{textDecoration:'none',color:'inherit'}} to={'/dashboard/orders'} >Orders</NavLink></li>
            <li style={{listStyle:'none'}} ><NavLink  className={({ isActive }) => isActive ? "active" : ""} style={{textDecoration:'none',color:'inherit'}} to={'/dashboard/holdings'} >Holdings</NavLink></li>
            <li style={{listStyle:'none'}} ><NavLink  className={({ isActive }) => isActive ? "active" : ""} style={{textDecoration:'none',color:'inherit'}} to={'/dashboard/positions'} >Positions</NavLink></li>
            <li style={{listStyle:'none'}} ><NavLink  className={({ isActive }) => isActive ? "active" : ""} style={{textDecoration:'none',color:'inherit'}} to={'/dashboard/funds'} >Funds</NavLink></li>
            <li style={{listStyle:'none'}} ><NavLink  className={({ isActive }) => isActive ? "active" : ""} style={{textDecoration:'none',color:'inherit'}} to={'/dashboard/apps'} >Apps</NavLink></li>
            <li style={{listStyle:'none'}} ><NavLink  className={({ isActive }) => isActive ? "active" : ""} style={{textDecoration:'none',color:'inherit'}} to={'/'} >Home</NavLink></li>
          </ul>
           <div style={{ width:'20%', height:'70%', display:'flex',borderLeft:'1px solid #e4e0e0ff',justifyContent:'center', alignItems:'center'}} >
             <div onClick={()=>setIsLogout(!isLogout)} style={{borderRadius:'50%',background:'lightpink',width:'40px',height:'40px',textAlign:'center',lineHeight:'40px',color:'#f031a7ff',marginRight:'10px'}} >ZU</div>
            
              <p style={{margin:0,color:'orange'}} >USERID</p>
           </div>
        </div>
    </div>
           {isLogout &&  <div className='logout' >
                         <ul>
                          <li>Profile</li>
                          <li><Link className='logoutLink' to={'/'} onClick={handleLogout} >LogOut</Link>   </li>
                          </ul>  
              </div>}
    </>
  )
}

export default Menu