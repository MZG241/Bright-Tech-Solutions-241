/* eslint-disable no-unused-vars */
import React from 'react'
import { ReactTyped } from 'react-typed'



const Hero = () => {

return (
    <>
    <div className='text-white ' id='Hero'>
<div className='max-w-[800px] mt-[-96px] w-full text-center h-screen mx-auto flex flex-col justify-center'>
    <p className='text-[#00df9a] font-bold p-2 '>Empowering Businesses with Innovative Solutions</p>
    <h1 className='md:text-4xl sm:text-4xl text-3xl font-bold md:py-6'>Grow With Bright Tech Solutions 241.</h1>
    <div className='flex justify-center items-center'>
    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Our team is </p>

    <ReactTyped
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]'
            strings={['Fast ', 'Flexible', 'Efficient']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
    </div>
    <p className='md:text-2xl text-xl font-bold text-gray-500'>Empowering Your Tech Journey!</p>
<a href="https://wa.me/24176557252" className='bg-[#00df9a] text-white w-[200px] rounded-md font-bold px-6 py-3 mx-auto mt-5 hover:bg-white hover:text-[#00df83] hover:ease-in-out hover:duration-500 hover:shadow-md hover:shadow-[#00df83]'>Get Started</a>

</div>
    </div>
</>
  )
}

export default Hero