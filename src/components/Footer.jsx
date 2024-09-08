/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import Logo20 from '../components/Logo13.png';

const Footer = () => {
  return (
    <div>
    <div className='max-w-[1240px]  mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300' id='Contact'>
   <div>
   <a ><img src={Logo20} alt="" className='w-[150px]'   /></a>
   <p className='py-4'>At Bright Tech Solutions 241, we specialize in delivering innovative tech solutions tailored to your unique business needs. Our team is dedicated to driving your success through cutting-edge technology and unparalleled expertise. Letʼs elevate your business to new heights together!</p>
   <div className='flex justify-between md:w-[75%] my-6'>
   <a href="">
    <FaFacebook  size={30} className='hover:text-[#00df93] ' />
    </a>
    <a href="https://wa.me/24176557252">
    <FaWhatsapp  size={30}  className='hover:text-[#00df93] ' />
    </a>
    <a href="">
    <FaInstagram  size={30} className='hover:text-[#00df93] ' />
    </a>
   </div>
   </div>
   <div className='lg:col-span-2 flex justify-between'>
    <div>
        <h6 className='font-medium text-gray-400 text-2xl'>Contact</h6>
        <ul>
            <li className='text-sm py-2'>Email: brighttechsolution241@gmail.com</li>
            <li   className='text-sm py-2'>Address : Kigali , Rwanda.</li>
            <li   className='text-sm py-2'>Phone: +24176557252</li>
        </ul>
    </div>
    <div>
        {/* <h6 className='font-medium text-gray-400 text-2xl'>Legals</h6>
        <ul className='text-center'>
            <li className='text-sm py-2'>Claim</li>
            <li   className='text-sm py-2'>Policy</li>
            <li   className='text-sm py-2'>Terms</li>
        </ul> */}
    </div>
   </div>
 
    </div>
<h1 className='text-center text-white mb-2'>© 2024. All rights reserved by <span className='text-[#00df93] font-bold'>Bright Tech Solutions 241.</span> </h1>
    </div>
     
  )
}

export default Footer