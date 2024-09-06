import { useEffect } from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { SiAffinitydesigner } from "react-icons/si";

import Aos from 'aos';
import 'aos/dist/aos.css';


const Services = () => {


    useEffect( ()=> {
        Aos.init({duration:2000});
      } ,[])

  return (
    <div className=' p-2 mt-4  md:p-10  ' id='Services'>
        <h1 className='text-center font-bold text-3xl md:text-4xl text-[#00df9a] mt-4 mb-4'>Our Services</h1>

    <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 text-center mt-10 px-4">

<div className='py-10 px-2 border border-white rounded-lg hover:bg-[#00df9a] hover:duration-500' data-aos="fade-right" data-aos-once="true" >
    <FaLaptopCode  size={50} className=' text-white mx-auto mb-2'  />
    <h1 className='text-white text-3xl  md:text-4xl font-bold text-center mb-4'>Web Development</h1>
<p className='text-white'>
Web development involves building and managing websites, ensuring a smooth online experience with front-end design and back-end functionalities.</p>
</div>

<div className='py-10 px-2 border  border-white rounded-lg hover:bg-[#00df9a] hover:duration-500' data-aos="fade-down" data-aos-once="true">
    <FaMobileScreenButton  size={50} className=' text-white mx-auto mb-2 ' />
    <h1 className='text-white text-3xl  md:text-4xl font-bold text-center mb-4 '>Mobile Application Development</h1>
<p className='text-white'>Mobile app development is the process of creating software applications specifically designed to run on mobile devices like smartphones and tablets.</p>
</div>

<div className='py-10 px-2 border border-white rounded-lg hover:bg-[#00df9a] hover:duration-500' data-aos="fade-left" data-aos-once="true">
    <SiAffinitydesigner size={50} className=' text-white mx-auto mb-2' />
    <h1 className='text-white text-3xl  md:text-4xl font-bold text-center mb-4'>Graphic Design</h1>
    <p className='text-white'>Are you looking for graphic design services? Do you need a logo? Business cards or flyers?Your logos, brochures, banners and advertisements must be something that makes you stand out among your competition! With that in mind we strive to incorporate your vision of design with our creativity.</p>
</div>

    </div>

    </div>
  )
}

export default Services