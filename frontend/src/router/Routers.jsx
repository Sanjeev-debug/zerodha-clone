import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '../Layout/Layout'
import HomePage from '../landingPage/Home/HomePage'
import AboutPage from '../landingPage/About/AboutPage'
import ProductPage from '../landingPage/products/ProductPage'
import PricingPage from '../landingPage/pricing/PricingPage'
import SignupPage from '../landingPage/signup/SignupPage'
import SupportPage from '../landingPage/support/SupportPage'
import PageNotFound from '../landingPage/PageNotFound/PageNotFound'

import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import Summery from '../components/Summery'
import Orders from '../components/Orders'
import Holding from '../components/Holding'
import Positions from '../components/Positions'
import Funds from '../components/Funds'
import App from '../components/App'
import Login from '../landingPage/login/Login'

const Routers = () => {
  return (
    <BrowserRouter>
    
      <Routes>

        {/* Landing Website */}
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='product' element={<ProductPage />} />
          <Route path='pricing' element={<PricingPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='support' element={<SupportPage />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path='/dashboard/*' element={<Home />}>  
          <Route path='' element={<Dashboard />}>         
            <Route index element={<Summery />} />       
            <Route path='orders' element={<Orders />} />
            <Route path='holdings' element={<Holding />} />
            <Route path='positions' element={<Positions />} />
            <Route path='funds' element={<Funds />} />
            <Route path='apps' element={<App />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Routers
