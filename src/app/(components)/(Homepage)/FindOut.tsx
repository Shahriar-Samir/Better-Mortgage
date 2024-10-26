'use client'

import React, { useState } from 'react';
import Trustpilot from '../Svgs/Trustpilot';

const FindOut = () => {
    const [pic,setPic] = useState('/pics/findOut.webp')

    const arian = ()=> setPic('/pics/findOut.webp')
    const amanda = ()=> setPic('/pics/findOut2.webp')
    const paul = ()=> setPic('/pics/findOut3.webp')

    return (
        <div className="hero min-h-screen w-11/12 md:w-10/12 mx-auto mt-24">
  <div className="hero-content flex-col-reverse lg:flex-row gap-16 md:gap-40">
    <div className='w-full max-w-[330px] flex flex-col'>
    <img
      src={pic}
      className="rounded-lg w-full" />
      <div className='flex gap-5 items-center mt-6'>
        <button className={`rounded-full text-md  px-4 py-2 text-[#017848] border-4 hover:border-[#017848] ${pic==='/pics/findOut.webp'? 'border-[#017848]' : ''} font-myFont5`} onClick={arian}>Arian</button>
        <button className={`rounded-full text-md  px-4 py-2 text-[#017848] border-4 hover:border-[#017848] font-myFont5 ${pic==='/pics/findOut2.webp'? 'border-[#017848]' : ''} `} onClick={amanda}>Amanda</button>
        <button className={`rounded-full text-md  px-4 py-2 text-[#017848] border-4 hover:border-[#017848] font-myFont5 ${pic==='/pics/findOut3.webp'? 'border-[#017848]' : ''} `} onClick={paul}>Paul</button>
      </div>
    </div>
    <div className='md:w-2/4'>
      <h1 className="text-5xl md:text-[5rem] font-myFont5 leading-none">Find out why we’re better.</h1>
      <button className="bg-[#004733] text-white rounded-full px-12 py-5 font-myFont5 mt-6">See all our stories</button>
      <div className='flex gap-2 mt-4 items-end '>
      <Trustpilot/>
      <h3 className='font-myFont5 leading-3 text-gray-500'>Excellent
      4.4 <span className='font-myFont3'>out of 5</span></h3>
      </div>
    </div>
  </div>
</div>
    );
};

export default FindOut;