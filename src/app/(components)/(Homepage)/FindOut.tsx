import React from 'react';

const FindOut = () => {
    return (
        <div className="hero min-h-screen w-10/12 mx-auto mt-24">
  <div className="hero-content flex-col lg:flex-row gap-40">
    <img
      src='/pics/findOut.webp'
      className="rounded-lg shadow-2xl max-w-[330px]" />
    <div className='w-2/4'>
      <h1 className="text-[5rem] font-myFont5 leading-none">Find out why we’re better.</h1>
      <button className="bg-[#004733] text-white rounded-full px-12 py-5 font-myFont5 mt-6">See all our stories</button>
    </div>
  </div>
</div>
    );
};

export default FindOut;