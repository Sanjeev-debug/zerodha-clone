import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import ResposeStatus from '../responseStatus/ResposeStatus'
import { useContextProvider } from '../context/ContextProvider'

const Layout = () => {
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
    <Navbar/>
    {statusMessage?<ResposeStatus/>:''}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout