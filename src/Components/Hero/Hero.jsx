import React from 'react'

function Hero() {
  return (
    <div>
        <div className='relative'>
            <img 
            className='w-full object-cover object-center'
            src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg" alt="" />
        </div>
        {/* <div className='absolute top-[70%] left-[10%]'>
            <h1 className='text-5xl font-bold text-red'>
                Discover Your Next Adventure!
            </h1>
            <p className='text-center text-2xl mt-5 font-semibold'>
                Shop Our Latest Arrival & Unleash Your Style 
            </p>

        </div> */}
    </div>
  )
}

export default Hero
