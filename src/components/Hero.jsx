import React from 'react';
import {jogar, cadastrar} from '../components/assets';


const Hero = () => (
  <section id="home" className='flex md:flex-row flex-col'>
    <div className= 'flex-1 flex-col xl:px-0 sm:px-16 px-6'>
      <div className='flex flex-row items-center py-[530px] px-[160px] mb-2'>
        <img src={jogar} alt="jogar" className='w-[230px] h-[60px]'/>
      </div>
      <div className='flex flex-row items-center py-[30px] px-[160px] mb-2'>
        <img src={cadastrar} alt="cadastrar" className='w-[230px] h-[60px]'/>
      </div>
    </div>

  </section>

)

export default Hero