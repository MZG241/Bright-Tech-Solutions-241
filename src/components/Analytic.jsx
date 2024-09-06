import Aos from 'aos'
import 'aos/dist/aos.css'
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Ordinateur from '../images/Ordinateur.jpg'


const Analytic = () => {

  useEffect( ()=> {
    Aos.init({duration:2000});
  } ,[])

  return (
    <div className='w-full bg-white py-16 px-4' id='About'>
<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
<img src={Ordinateur} alt="Logo" className='w-[500px] mx-auto my-4' data-aos="fade-down" data-aos-once="true"  />
<div className='flex flex-col justify-center'  data-aos="fade-right"  data-aos-once="true" >
  <p className='text-[#00df9a] text-[30px] font-bold text-center md:text-left'>Empowering Your Business</p>
  <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2 text-center md:text-left'> Driving Your Success</h1>
  <p className=''>At Bright Tech Solutions 241, we are dedicated to helping your business thrive in the digital world. Our innovative marketing strategies and cutting-edge technologies are tailored to elevate your brand and drive unparalleled success.</p>
  <a href="https://wa.me/24176557252" className='bg-[#00df9a]  text-center text-white w-[200px] rounded-md mx-auto px-6 py-3 font-bold mt-5 hover:bg-white hover:text-[#00df83] hover:ease-in-out hover:duration-500 hover:shadow-md hover:shadow-[#00df83] md:mx-0'>Get Started</a>

</div>
</div>
    </div>
  )
}

export default Analytic