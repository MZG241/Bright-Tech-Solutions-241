// eslint-disable-next-line no-unused-vars
import React from 'react'



const Cards = () => {
  return (
    <div className='bg-white p-2 mt-4  md:p-10  '>
        <h1 className='text-center font-bold text-3xl md:text-4xl text-[#00df9a] mt-4 mb-4'>Pricing Plan</h1>

        <div className='p-2  md:p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
<div className='rounded-md  py-2  md:py-20 px-10 border border-gray-400 hover:scale-105 duration-200 '>
<h1 className=' text-3xl  md:text-4xl font-bold text-center'>LIGHT</h1>
<p className='text-center'>Suitable for Startups ,Bloggers and Basic Websites</p>
    <p className='mb-4 text-[32px] font-bold text-center text-[#00df9a]'>$250</p>
    
<ul className='space-y-2 mt-4 text-center'>
        <li className='p-2 border-b border-gray-600'>Modern and Professional design.</li>
        <li className='p-2 border-b border-gray-600'>Optimized for mobiles devices.</li>
        <li className='p-2 border-b border-gray-600'>SEO Optimization</li>
        <li className='p-2 border-b border-gray-600'>Hosting + Domain + SSL + Email.</li>
        <li className='p-2 '>One year support.</li>
        <div className='flex justify-center items-center'>
    <a href="https://wa.me/24176557252" className='py-2 px-6 text-white bg-[#00df9a] rounded-lg font-bold   md:text-xl mb-4 '>Get Started</a>
    </div>
    </ul>
</div>
<div className='rounded-lg py-2  md:py-20 px-10 bg-[#00df9a] text-white border border-gray-400 hover:scale-105 duration-200'>
<h1 className='text-4xl font-bold text-center'>PRO</h1>
<p className='text-center'>Suitable for Small Companies & Growing Brands.</p>
    <p className='mb-4 text-[32px] font-bold text-center'>$450</p>
  <ul className='space-y-2 mt-4 text-center '>
        <li className='p-2 border-b border-gray-600'>Modern and Professional design</li>
        <li className='p-2 border-b border-gray-600'>Optimized for mobiles devices.</li>
        <li className='p-2 border-b border-gray-600'>SEO Optimization</li>
        <li className='p-2 border-b border-gray-600'>Analysis tools and statistics.</li>
        <li className='p-2 border-b border-gray-600'>Hosting + Domain + SSL + Email.</li>
        <li className='p-2 border-b border-gray-600'>Contact form / Appointment booking.</li>
        <li className='p-2 '>One year support.</li>
        <div className='flex justify-center items-center'>
    <a href="https://wa.me/24176557252" className='py-2 px-6 bg-white text-[#00df9a] rounded-lg font-bold  md:text-xl mb-4 '>Get Started</a>
    </div>
    </ul>
</div>

<div className='rounded-lg py-2  md:py-20 px-10  border border-gray-400 hover:scale-105 duration-200 '>
<h1 className='text-4xl font-bold text-center'>ULTRA</h1>
<p className='text-center'>Suitable for Small Companies & Growing Brands.</p>
    <p className='mb-4 text-[32px] font-bold text-center  text-[#00df9a]'>$1250 +</p>
  <ul className='space-y-2 mt-4 text-center '>
  <li className='p-2 border-b border-gray-600'>Modern and Professional design</li>
        <li className='p-2 border-b border-gray-600'>Optimized for mobiles devices.</li>
        <li className='p-2 border-b border-gray-600'>SEO Optimization</li>
        <li className='p-2 border-b border-gray-600'>Analysis tools and statistics.</li>
        <li className='p-2 border-b border-gray-600'>Hosting + Domain + SSL + Email.</li>
        <li className='p-2 border-b border-gray-600'>Contact form / Appointment booking.</li>
        <li className='p-2 '>One year support.</li>
        <div className='flex justify-center items-center'>
    <a href="https://wa.me/24176557252" className='py-2 px-6 text-white bg-[#00df9a] rounded-md font-bold  md:text-xl mb-4  md:mt-6 '>Get Started</a>
    </div>
    </ul>
</div>




        </div>

    </div>
  )
}

export default Cards