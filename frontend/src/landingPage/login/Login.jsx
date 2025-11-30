import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContextProvider } from '../../context/ContextProvider'

const Login = () => {

       const {setStatusMessage,setIsStatus,setIsLogin}=useContextProvider()

    const Navigate=useNavigate()
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=async(e)=>{
   try{
       e.preventDefault()
     const res= await axios.post("https://zerodha-clone-ae1z.onrender.com/userLogin",{
        name:userName,
        password:password,
       },
    {withCredentials:true}
    );
    console.log(res?.data)
    console.log(res?.data?.message)
    console.log(res?.data?.login)
    

     
        if(res?.data?.message){
            setStatusMessage(res?.data?.message);
            setIsStatus(res?.data?.status);
            setIsLogin(res?.data?.login);
           Navigate('/dashboard')
        }


     }
     catch(err){
          setStatusMessage(err?.response?.data?.message);
            setIsStatus(err?.response?.data?.status);
        }
    }   

  return (
   <>
   <div className="container mt-5 mb-5 "  >
    <div className="row  ">
        <div className="col-5  mx-auto"   >
            <div className='login' >
                <form  onSubmit={(e)=>handleSubmit(e)}>
                    <input type="text" placeholder='Enter username' value={userName} onChange={(e)=>setUserName(e.target.value)} />
                    <input type="text" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />  
                    <button type='submit' >Login</button>
                </form>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Login