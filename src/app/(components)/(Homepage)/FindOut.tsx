import React from 'react';
import Trustpilot from '../Svgs/Trustpilot';

const FindOut = () => {
    return (
        <div className="hero min-h-screen w-11/12 md:w-10/12 mx-auto mt-24">
  <div className="hero-content flex-col-reverse lg:flex-row gap-16 md:gap-40">
    <img
      src='/pics/findOut.webp'
      className="rounded-lg shadow-2xl w-full max-w-[330px]" />
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