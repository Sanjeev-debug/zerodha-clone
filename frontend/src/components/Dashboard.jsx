import React from 'react'
import WatchList from './WatchList'
import { Outlet, Route, Routes } from 'react-router-dom'
import Summery from './Summery'
import Orders from './Orders'
import Holding from './Holding'
import Positions from './Positions'
import Funds from './Funds'
import App from './App'
import { GeneralContextProvider } from './GeneralContext'

const Dashboard = () => {
  return (
    <>
    <div style={{width:'100%',minHeight:'95vh',display:'flex'}}>
      <div style={{width:"30%",}}>
       <GeneralContextProvider>
         <WatchList/>
       </GeneralContextProvider>
      </div>
      <div style={{width:'70%',borderLeft:'1px solid #e1dbdbff',padding:'2%'}}>
          <Outlet/>
            {/* <Routes>
                <Route  index element={<Summery/>}/>
                  <Route  path='orders' element={<Orders/>}/>
                  <Route  path='holdings' element={<Holding/>}/>
                  <Route  path='positions' element={<Positions/>}/>
                  <Route  path='funds' element={<Funds/>}/>
                  <Route  path='apps' element={<App/>}/>
            </Routes>  */}
      </div>
    </div>
    </>
  )
}

export default Dashboard