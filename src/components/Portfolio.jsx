// import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Portfolio = () => {
    
    useEffect( ()=> {
        Aos.init({duration:2000});
      } ,[])
  return (
    <div className='bg-white p-2   md:p-10  ' id='Portfolio'>
    <h1 className='text-center font-bold text-3xl md:text-4xl text-[#00df9a] mt-4 mb-4'>Portfolio</h1>

    <div className='p-2  md:p-5 grid md:grid-cols-2  lg:grid-cols-3 gap-8'>
        
        {/* Project 1  */}
<div className='rounded-md  py-2  md:py-20 px-10 ' data-aos="fade-up" data-aos-once="true">

<div >
    <img src='src/images/Macbook-Air-demenagementsw.com.png' alt="Picture" />
</div>

 <div className='flex mt-3 justify-center items-center'>
<a href="https://demenagementsw.com/" className='bg-[#00df9a]  w-[100px]   text-white md:w-[150px] text-center rounded-md font-bold px-6 py-2  mt-2 hover:bg-white hover:text-[#00df83] hover:ease-in-out hover:duration-500 hover:shadow-md hover:shadow-[#00df83] '>Visit</a>

</div>

</div>


{/* Project 2  */}


<div className='rounded-md  py-2  md:py-20 px-10  ' data-aos="fade-right" data-aos-once="true">

<div>
    <img src='src/images/Macbook-Air-www.kivubg.com.png' alt="Picture" />
</div>

 <div className='flex mt-3 justify-center items-center'>
<a href="https://www.kivubg.com/" className='bg-[#00df9a] w-[100px]     text-white md:w-[150px] text-center rounded-md font-bold px-6 py-2  mt-2 hover:bg-white hover:text-[#00df83] hover:ease-in-out hover:duration-500 hover:shadow-md hover:shadow-[#00df83] '>Visit</a>
</div>

</div>


{/* Project 3 */}


<div className='rounded-md  py-2  md:py-20 px-10  ' data-aos="fade-right" data-aos-once="true">

<div>
    <img src='src/images/P3.png' alt="Picture" />
</div>

 <div className='flex mt-3 justify-center items-center'>
<a href="https://www.kivubg.com/" className='bg-[#00df9a] w-[100px]     text-white md:w-[150px] text-center rounded-md font-bold px-6 py-2  mt-2 hover:bg-white hover:text-[#00df83] hover:ease-in-out hover:duration-500 hover:shadow-md hover:shadow-[#00df83] '>Visit</a>
</div>

</div>


    </div>

</div>
  )
}

export default Portfolio