import React from "react";

import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function Navbar({cart,userName}) {

    const [isOpen,setIsOpen] = useState(false);


  return (
    <>
      <div>
        <header className="bg-white border-b border-gray-200 relative">
          <div className="container mx-auto flex justify-between p-5 align-middle items-center">
            <div>
              <Link to="/">
                <h3 className="font-bold text-2xl">
                  Ecommerce <span>Shop</span>
                </h3>
              </Link>
            </div>

            <div className="hidden md:block">

            
            <ul className="flex items-center text-lg justify-center font-semibold">
              <Link to="/">
                <li className="mr-5 hover:text-gray-900 cursor-pointer">
                  Home
                </li>
              </Link>

                <Link to="/allproducts">
                
              <li className="mr-5 hover:text-gray-900 cursor-pointer">
                All Products
              </li>
                </Link>
              <li className="mr-5 hover:text-gray-900 cursor-pointer">Mens</li>
              <li className="mr-5 hover:text-gray-900 cursor-pointer">Kids</li>
            </ul>
            </div>
{
    isOpen && (
<div className="">
              <ul className="flex flex-col gap-10  text-4xl top-[73px] left-0 h-screen w-full absolute z-10  bg-red-500 text-white items-center justify-center font-semibold">
                <Link to="/">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">
                    Home
                  </li>
                </Link>

                <Link to="/allproducts">
                
                <li className="mr-5 hover:text-gray-900 cursor-pointer">
                  All Products
                </li>
                </Link>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">
                  Mens
                </li>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">
                  Kids
                </li>
              </ul>
                <button className="absolute top-[78px] z-10 right-0 text-white py-2 px-4 cursor-pointer">
                <ImCross size={30} onClick={()=> setIsOpen(false)}/>
                </button>


            </div>
    )
}
            
            <div className="flex justify-center items-center gap-3 ">
              <Link to='/login'>
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  md:mt-0">
                Login
              </button>
              <span>{userName}</span>
              </Link>
              <Link to="/cart">
  <div className="relative flex flex-row justify-end">
    <FaShoppingCart size={30} />

    {/* Absolute positioned span for the cart count */}
    <span className="absolute top-0 right-0 bg-red-500 text-white w-2 h-2 px-2 py-2 flex items-center justify-center rounded-full">
      {cart.length}
    </span>
  </div>
</Link>

              {
                isOpen===false &&(
                    <div className="md:hidden" onClick={()=>setIsOpen(true)}>
                <GiHamburgerMenu size={30} />
              </div>
                )

              }
              
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
