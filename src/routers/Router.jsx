import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import { Home, Login, Signup, Cart, Checkout, Shop, ProductDetails } from "../Pages"

const Router = () => {
  return (
    <Routes>
    <Route exact path='/' element={<Navigate to = 'home'/>}/>
        <Route exact path='home' element={<Home />}/>
        <Route exact path='shop' element={<Shop />}/>
        <Route exact path='shop/id' element={<ProductDetails />}/>
        <Route exact path='cart' element={<Cart />}/>
        <Route exact path='checkout' element={<Checkout />}/>
        <Route exact path='login' element={<Login />}/>
        <Route exact path='signup' element={<Signup />}/>

    </Routes>
  )
}

export default Router