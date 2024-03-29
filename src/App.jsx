import { useState } from 'react'

import './App.css'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      
      <Route path='/cart' element={<Cart/>} />
    </Routes>
      
    </BrowserRouter>
     
    </>
  )
}

export default App
