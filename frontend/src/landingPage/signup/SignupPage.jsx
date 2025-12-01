import React, { useState ,useEffect} from 'react'
const API = import.meta.env.VITE_API_URL;
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
    e.preventDefault()
      try{
           const res=   await  axios.post(`${API}/newUser`,{
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
                <form onSubmit={(e)=>handleSubmit(e)} className='needs-validation'  noValidate >
                   <input type="text" placeholder='Enter username' className='form-control' value={userName} onChange={(e)=>setUserName(e.target.value)} required />
                   <input type="email" placeholder='Enter email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                   <input type="password" placeholder='Enter password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}required />  
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