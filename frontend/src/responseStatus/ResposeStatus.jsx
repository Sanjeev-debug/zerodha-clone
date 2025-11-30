import React from 'react'
import { useContextProvider } from '../context/ContextProvider';
import './ResponseStatus.css'

const ResposeStatus = () => {
      const {statusMessage,isStatus}=useContextProvider()
      
  return (
     <>
      <div className={isStatus?"status success":" status error"}   >
        <p>{statusMessage}</p>
      </div>
     </>
  )
}

export default ResposeStatus