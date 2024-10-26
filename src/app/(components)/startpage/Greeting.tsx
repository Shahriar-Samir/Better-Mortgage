import React from 'react';
import Home1 from '../Svgs/Home1';
import Link from 'next/link';
import Home2 from '../Svgs/Home2';
import Home3 from '../Svgs/Home3';
import Mortgage from '../Svgs/Mortgage';
import phone from '/phone.svg'


const Greeting = () => {
    return (
        <section className='flex justify-center items-center mt-20 flex-col w-11/12 max-w-[550px] mx-auto'>
                <div className='flex flex-col items-center'>
                <h1 className='font-myFont5 text-3xl text-center'>Hi, I'm Betsy!</h1>
                <h1 className='font-myFont5 text-3xl text-center'>What can I help you with?</h1>
                </div>
                <div className='w-full  flex flex-col gap-7 mt-5'>
                <Link href='#' className='rounded-lg text-md font- px-8 py-3 outline outline-1 outline-gray-400  border-4 border-transparent hover:border-[#017848] font-myFont5 w-full flex items-center gap-6 text-lg transition-all ease-in'>
                    <Home2/>Buying a home</Link>
                <Link href='#' className='rounded-lg text-md font- px-8 py-3 outline outline-1 outline-gray-400  border-4 border-transparent hover:border-[#017848] font-myFont5 w-full flex items-center gap-6 text-lg transition-all ease-in'>
                    <Home2/>Refinance my mortgage</Link>
                <Link href='#' className='rounded-lg text-md font- px-8 py-3 outline outline-1 outline-gray-400  border-4 border-transparent hover:border-[#017848] font-myFont5 w-full flex items-center gap-6 text-lg transition-all ease-in'>
                    <Home3/>Get cash from my home</Link>
                </div>
                <div className='flex items-center justify-center gap-8 mt-16'>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-myFont5 text-3xl'>$100B</h1>
                            <p className='text-sm font-myFont3 text-gray-500 mt-4 text-center'>home loans funded entirely online</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-myFont5 text-3xl'>400K</h1>
                            <p className='text-sm font-myFont3 text-gray-500 mt-4 text-center'>Customers who chose a Better Mortgage</p>
                        </div>
                </div>
                <div className='py-5 w-full bg-[#F0F7F1] mt-16 rounded-lg'>
                    <div className='flex flex-col items-center'>
                    <h1 className='text-center font-myFont3 text-gray-600'>After a few questions, you'll unlock:</h1>
                    <div className='flex flex-col items-start gap-3 mt-6 '>
                        <h2 className='flex gap-3 items-center font-myFont3 text-gray-600'><Mortgage/> Custom mortgage rates</h2>
                        <h2 className='flex gap-3 items-center font-myFont3 text-gray-600'>
                        <Mortgage/>  Exclusive offers</h2>
                        <h2 className='flex gap-3 items-center font-myFont3 text-gray-600'><Mortgage/> A personalized dashboard</h2>
                    </div>
                    </div>
                </div>
        </section>
    );
};

export default Greeting;