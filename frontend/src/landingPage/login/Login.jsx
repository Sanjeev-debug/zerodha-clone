import React, { useEffect, useState } from 'react'
const API = import.meta.env.VITE_API_URL;
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContextProvider } from '../../context/ContextProvider'

const Login = () => {

       const {setStatusMessage,setIsStatus,setIsLogin}=useContextProvider()

    const Navigate=useNavigate()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    useEffect(() => {
  const forms = document.querySelectorAll('.needs-validation');

  forms.forEach(form => {
    const handleSubmit = (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }else{
         event.preventDefault();
      }

      form.classList.add('was-validated');
    }

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    }
  });
}, []);


    const handleSubmit=async(e)=>{
   try{
       e.preventDefault()
     const res= await axios.post(`${API}/userLogin`,{
        email:email,
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
            setEmail('');
            setPassword('');

        }
    }   

  return (
   <>
   <div className="container mt-5 mb-5 "  >
    <div className="row  ">
        <div className="col-5  mx-auto"   >
            <div className='login  ' >
                <form  onSubmit={(e)=>handleSubmit(e)} className='needs-validation' noValidate >
                    <input type="email" placeholder='Enter email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}required />
                    <input type="password" placeholder='Enter password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}required />  
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