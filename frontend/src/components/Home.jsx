import React, { useEffect } from 'react'
import TopBar from './TopBar'
import Dashboard from './Dashboard'
import { Outlet } from 'react-router-dom'
import { useContextProvider } from '../context/ContextProvider'
import ResposeStatus from '../responseStatus/ResposeStatus'

const Home = () => {
   
  const {statusMessage,setStatusMessage}=useContextProvider()


   useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage('')
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [statusMessage ]);

  return (
   <>
   <TopBar/>
    {statusMessage?<ResposeStatus/>:''}
   <Outlet/>
   </>
  )
}

export default Home