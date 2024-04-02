import { useEffect, useState } from 'react'

import './App.css'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllProducts from './Components/AllProducts/AllProducts'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase/firebase'
function App() {
 

  const [cart,setCart] = useState([]);
  
  const [promocode,setPromocode] = useState("");

  const [discount,setDiscount] = useState(0);
  const [matched,setMatched] = useState(false);
  const [userName,setUserName] = useState("");


  const AddToCart =(product)=>{

    const isProductExist = cart.find((findItem)=>findItem.id === product.id)

    if(isProductExist){
      
      const updateCart =  cart.map((item)=>(
        item.id===product.id ? {...item,quantity:item.quantity+1} : item
      ))
        setCart(updateCart)

    }
    else{
      setCart([...cart,{...product,quantity:1}]);

    }
      
      console.log(cart)
  };

  const handleInc = (id) =>{
    const incQuantity = cart.map((item)=>
      item.id === id ? {...item,quantity:item.quantity+1}:item
    );
    setCart(incQuantity);
  };
  const handleDec = (id)=>{
    const decQuantity = cart.map((item)=>
      item.id === id && item.quantity >1 ? {...item,quantity:item.quantity-1}:item
    );
    setCart(decQuantity);
  };


  const handleRemove = (id) =>{
    const updateByFilter = cart.filter((filterItem)=> filterItem.id !== id)
    setCart(updateByFilter);
  }

  const getTotalPrice = ()=>{
    const totalPrice = cart.reduce((total,cartReduceItem)=>{
      return total+cartReduceItem.price*cartReduceItem.quantity
    },0)
    return totalPrice-discount;
  }




  const applyPromo = () =>{
    if(promocode === "DISCOUNT10"){
      setDiscount(getTotalPrice()*0.1)
      setPromocode("")
      
    }
    else{
      setMatched(true)
      alert("INVALID PROMO CODE")
    }
  }

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
      }
      else{
        setUserName("")
      }
    });
  },[])

  return (
    <>
    <BrowserRouter>
    <Navbar cart = {cart} userName={userName}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      
      <Route path='/cart' element={<Cart cart={cart} handleInc={handleInc} handleDec={handleDec}
      handleRemove={handleRemove} getTotalPrice={getTotalPrice}
      applyPromo={applyPromo} 
      promocode={promocode}
      setPromocode={setPromocode}
      setMatched={setMatched}
      matched={matched}
      />} />
      
      <Route path='/allproducts' element={<AllProducts AddToCart={AddToCart}/>} />
      
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    <ToastContainer />
      <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
