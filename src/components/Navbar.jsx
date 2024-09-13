import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';


import Logo20 from '../components/Logo13.png';



const Navbar = () => {

const [nav,setNav] = useState(false);

const handleNav = () =>{
setNav(!nav);
};

  return (
    <>
    <div className='flex justify-between items-center text-white h-24 max-w-[1240px] mx-auto px-4'>
      <a className=' font-bold w-full text-3xl text-[#00df93]'><img src={Logo20}  alt="" className='w-[85px]'/></a>
        <ul className='hidden md:flex'>
      <li><Link  to="Hero" spy={true}  smooth={true}  offset={100}  duration={500}  className='p-4'>Home</Link></li>
       <li><Link  to="About" spy={true}  smooth={true}  offset={100}  duration={500}    className='p-4'>About</Link></li>    
      <li><Link  to="Services" spy={true}  smooth={true}  offset={100}  duration={500}     className='p-4'>Services</Link></li> 
       <li>  <Link  to="Portfolio" spy={true}  smooth={true}  offset={100}  duration={500}    className='p-4'>Portfolio</Link></li>
        <li>  <Link  to="Contact" spy={true}  smooth={true}  offset={100}  duration={500}  className='p-4'>Contact</Link></li>  
        </ul>
        <div onClick={handleNav} className='block md:hidden p-4'>
            {nav ? <AiOutlineClose size={20}  className='fixed flex font-bold bg-[#00df93] text-white'  />  :   <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed left-0  top-0 w-[60%] border-r border-r-gray-900 h-full bg-black ease-in-out duration-500' : '   ease-in-out duration-500 fixed left-[-100%]'}>

        <a className=' font-bold w-full text-3xl m-4 text-[#00df93]'><img src={Logo20}  alt="" className='w-[85px]'/></a>
       
            <ul className='uppercase  p-4'>
            <li><Link  to="Hero" spy={true}  smooth={true}  offset={100}  duration={500}  className='p-4'>Home</Link></li>
       <li><Link  to="About" spy={true}  smooth={true}  offset={100}  duration={500}    className='p-4'>About</Link></li>    
      <li><Link  to="Services" spy={true}  smooth={true}  offset={100}  duration={500}     className='p-4'>Services</Link></li> 
       <li>  <Link  to="Portfolio" spy={true}  smooth={true}  offset={100}  duration={500}    className='p-4'>Portfolio</Link></li>
        <li>  <Link  to="Contact" spy={true}  smooth={true}  offset={100}  duration={500}  className='p-4'>Contact</Link></li>  
        </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar