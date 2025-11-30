import React, { useState ,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './SignupPage.css'
import axios from 'axios'
import { useContextProvider } from '../../context/ContextProvider'

const SignupPage = () => {

           const {setStatusMessage,setIsStatus,setIsLogin}=useContextProvider()

   const Navigate=useNavigate();
   
   const [userName,setUserName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const handleSubmit=async(e)=>{
    e.preventDefault()
      try{
           const res=   await  axios.post("https://zerodha-clone-ae1z.onrender.com/newUser",{
          name:userName,
          email:email,
          password:password,
         },
         {withCredentials:true}
        );
         if(res?.data?.message){
            setStatusMessage(res?.data?.message);
            setIsStatus(res?.data?.status);
            setIsLogin(res?.data?.login);

            Navigate('/');
         }
      }catch(err){
         setStatusMessage(err?.response?.data?.message);
            setIsStatus(err?.response?.data?.status);
            setUserName('');
            setEmail('');
            setPassword('');

      }

    
       }

      
       

  return (
  <>
   <div className="container mt-5 mb-5 "  >
    <div className="row  ">
        <div className="col-5  mx-auto"   >
            <div className='signup' >
                <form onSubmit={(e)=>handleSubmit(e)} >
                   <input type="text" placeholder='Enter username' value={userName} onChange={(e)=>setUserName(e.target.value)} />
                   <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                   <input type="text" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />  
                    <button type='submit'  >SignUp</button>
                </form>
            </div>
        </div>
    </div>
   </div>
  </>
  )
}

export default SignupPage