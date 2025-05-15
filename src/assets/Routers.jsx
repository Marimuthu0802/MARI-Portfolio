import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Portfolio from './component/Portfolio'
import App from './component/Portfolio'

const Routers = () => {
  return (
   
   <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/port' element={<Portfolio/>}/>
   </Routes>
  )
}

export default Routers
