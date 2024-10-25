'use client'; 

import React, { useEffect, useState, useRef } from 'react';
import Title from './Title';
import Progress from './Svgs/Progress';
import Image from 'next/image';
import Link from 'next/link';
import Google from './Svgs/Google';
import Star from './Svgs/Star';
import HalfStar from './Svgs/HalfStar';
import { MdOutlineTimer } from "react-icons/md";



const Navbar = () => {
  const [bgColor, setBgColor] = useState('bg-greenDefault'); 
  const [textColor, setTextColor] = useState('text-white'); 
  const [bannerHeight, setBannerHeight] = useState(0);
  const bannerRef = useRef(null); 

  useEffect(() => {

    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (bannerRef.current) {
        setBannerHeight(bannerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    
 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

    
      if (scrollPosition < bannerHeight) {
        setBgColor('bg-greenDefault'); 
        setTextColor('text-white');    
      } else {
        setBgColor('bg-white');        
        setTextColor('text-black');   
      }
    };


    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [bannerHeight]); 

  return (
    <>
   

      <nav className={`navbar transition-all font-myFont3 w-full fixed top-0 left-0 right-0 z-50 bg-greenDefault ${bgColor} ${textColor}`}>
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl ">
            <Title/>
          </a>
          <ul className="menu menu-horizontal hidden lg:inline-flex px-1 text-base">
            <li><a>Buy</a></li>
            <li><a>Refinance</a></li>
            <li><a>HELOC</a></li>
            <li><a>Rates</a></li>
            <li><a>Better+</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">Click</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          <a className={`${textColor}`}>Sign in</a>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <section ref={bannerRef} className="banner bg-greenDefault h-[160vh] flex justify-start items-center flex-col px-7 relative">

        <div className='z-20 flex justify-center items-center flex-col mt-32'>
        <h3 className='flex items-center gap-3 text-white text-[2rem] font-myFont3'><Progress/> Rate drop alert</h3>
        <h1 className='text-[7rem] leading-none text-white text-center font-myFont5 mt-8'>The rate drop you&rsquo;ve been waiting for</h1>
        <div className='flex justify-between w-9/12 mt-52'>
          <div className='flex flex-col items-center gap-2'>
          <Link href='/start' className='px-12 py-5 rounded-full bg-[#1EE07F] font-myFont5 hover:bg-transparent hover:text-white transition ease-in'>Start my approval</Link>
          <h4 className='flex gap-2 items-center font-myFont3 text-sm text-gray-200'><MdOutlineTimer/> 3 min
          | No credit impact</h4>
          </div>
          <div className=''>
            <div className='flex gap-2'>
            <Google/>
            <div className='flex gap-[1px]'>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <HalfStar/>
            </div>
            </div>
            <h4 className='text-gray-200 text-[0.78rem] mt-1 font-myFont3'>
            4.6 Stars | 3177 Google reviews</h4>
          </div>
        </div>
        </div>

        <Image width={500} height={500} alt='banner mobile' src='/pics/banner.webp' className='absolute bottom-0 z-10'/>
      </section>
    </>
  );
};

export default Navbar;
