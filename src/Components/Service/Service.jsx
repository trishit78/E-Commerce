import React from 'react'


import { FaShippingFast } from "react-icons/fa";
//import { MdProductionQuantityLimits } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
function Service() {
  return (
    <>
        <div className='container mx-auto px-5 flex py-11 gap-10 items-center justify-center flex-wrap'>
            <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[200px]'>
                <FaShippingFast size={30}/>
                <p>FREE SHIPPING</p>
            </div>
            <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[200px]'>
                <MdProductionQuantityLimits size={30}/>
                 <p>QUALITY PRODUCTS</p>
            </div>
            <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[200px]'>
                <TbTruckReturn size={30}/>
                <p>EASY RETURNS</p>
            </div>
            <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[200px]'>
                <RiSecurePaymentLine size={30}/>
                <p>SECURE PAYMENTS</p>
            </div>

        </div>
    </>
  )
}

export default Service
