import { useState } from 'react'

import './App.css'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllProducts from './Components/AllProducts/AllProducts'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      
      <Route path='/cart' element={<Cart/>} />
      
      <Route path='/allproducts' element={<AllProducts/>} />
      
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
      
    </BrowserRouter>
     
    </>
  )
}

export default App
