import React, { useState } from 'react';
import logo from './assets/Logo.svg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)  
    }
    
  return (
    <div>
      <h1 class='p-12 flex flex-row justify-center'>
      <img src={logo} alt="logo" height={50} width={260}/> </h1>
      <ul class='hidden md:flex flex-row justify-evenly text-white'>
        <li className='p-10'>HOME</li>
        <li className='p-10'>INFORMAÇÕES</li>
        <li className='p-10'>CONTA</li>
        <li className='p-10'>DOWNLOAD</li>
        <li className='p-10'>DONATE</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>

          {!nav ? <AiOutlineClose size={20} className='fixed left-0 top-10 w-[10%] text-white'/> 
          : <AiOutlineMenu size={20} className='fixed left-0 top-10 w-[10%] text-white'/>}

      </div>
      <div className={!nav ? 'fixed right-3 top-50 w-[40%] ease-in-out duration-500' : 'fixed right-[-100%]'}>
        <ul className='text-white'>
          <li className='p-4 flex flex-row justify-center'>HOME</li>
          <li className='p-4 flex flex-row justify-center'>INFORMAÇÕES</li>
          <li className='p-4 flex flex-row justify-center'>CONTA</li>
          <li className='p-4 flex flex-row justify-center'>DOWNLOAD</li>
          <li className='p-4 flex flex-row justify-center'>DONATE</li>
        </ul>
      </div>
    </div> 
  );
};

export default Navbar