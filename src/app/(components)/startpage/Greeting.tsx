import React from 'react';
import Home1 from '../Svgs/Home1';
import Link from 'next/link';
import Home2 from '../Svgs/Home2';
import Home3 from '../Svgs/Home3';

const Greeting = () => {
    return (
        <section className='flex justify-center items-center mt-20 flex-col'>
                <div className='flex flex-col items-center'>
                <h1 className='font-myFont5 text-3xl'>Hi, I'm Betsy!</h1>
                <h1 className='font-myFont5 text-3xl'>What can I help you with?</h1>
                </div>
                <div className='w-full max-w-[550px] mx-auto flex flex-col gap-7 mt-5'>
                <Link href='#' className='rounded-lg text-md font- px-8 py-3 outline outline-1 outline-gray-400  border-4 border-transparent hover:border-[#017848] font-myFont5 w-full flex items-center gap-6 text-lg transition-all ease-in'>
                    <Home2/>Buying a home</Link>
                <Link href='#' className='rounded-lg text-md font- px-8 py-3 outline outline-1 outline-gray-400  border-4 border-transparent hover:border-[#017848] font-myFont5 w-full flex items-center gap-6 text-lg transition-all ease-in'>
                    <Home3/>Buying a home</Link>
                <Link href='#' className='rounded-lg text-md font- px-8 py-3 outline outline-1 outline-gray-400  border-4 border-transparent hover:border-[#017848] font-myFont5 w-full flex items-center gap-6 text-lg transition-all ease-in'>
                    <Home1/>Buying a home</Link>
                </div>

        </section>
    );
};

export default Greeting;