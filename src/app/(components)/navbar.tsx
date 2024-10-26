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
import Tele2 from './Svgs/Tele2';
import Tele from './Svgs/Tele';



const Navbar = () => {
  const [bgColor, setBgColor] = useState('bg-greenDefault')
  const [textColor, setTextColor] = useState('text-white')
  const [btnColor, setBtnColor] = useState('bg-[#1EE07F]')
  const [btnText, setBtnText] = useState('text-black')
  const [bannerHeight, setBannerHeight] = useState(0)
  const [logo,setLogo]= useState(<Tele/>)
  const bannerRef = useRef(null); 

  useEffect(() => {

    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight)
    }

    const handleResize = () => {
      if (bannerRef.current) {
        setBannerHeight(bannerRef.current.offsetHeight)
      }
    };

    window.addEventListener('resize', handleResize)
    
 
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
    
      if (scrollPosition < bannerHeight) {
        setBgColor('bg-greenDefault') 
        setTextColor('text-white')   
        setBtnColor('bg-[#1EE07F]') 
        setBtnText('text-black')  
        setLogo(<Tele/>)
      } else {
        setBgColor('bg-white')     
        setTextColor('text-black')
        setBtnColor('bg-[#017848]')   
        setBtnText('text-white')   
        setLogo(<Tele2/>)
      }
    };


    window.addEventListener('scroll', handleScroll)

   
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [bannerHeight])

  return (
    <>
   

      <nav className={`navbar justify-between md:justify-start transition-all font-myFont3 w-full fixed top-0 left-0 right-0 z-50 bg-greenDefault items-center ${bgColor} ${textColor} w-full`}>
        <div className="md:navbar-start">
          <a className="btn btn-ghost text-xl">
            <Title/>
          </a>
          <ul className="menu menu-horizontal hidden xl:inline-flex px-1 font-myFont3 gap-6  text-sm">
            <li><a>Buy</a></li>
            <li><a>Refinance</a></li>
            <li><a>HELOC</a></li>
            <li><a>Rates</a></li>
            <li><a>Better+</a></li>
          </ul>
        </div>
        <div className="md:navbar-end flex gap-3 md:gap-10">
            <div tabIndex={0} role="button"  className='w-[45px] h-[45px] rounded-full flex justify-center items-center border'>{logo}</div>
          <a className={`${textColor} hidden md:inline`}>Sign in</a>
          <button className={`${btnColor} hover:bg-[#004733] text-sm ${btnText} rounded-full px-5 py-3 font-myFont5`}>Continue</button>
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
      <section ref={bannerRef} className="banner bg-greenDefault h-[100vh] md:h-[120vh] lg:h-[160vh] flex justify-start items-center flex-col px-7 relative w-full">

        <div className='z-20 flex justify-center items-center flex-col mt-32'>
        <h3 className='flex items-center gap-3 text-white text-xl md:text-[2rem] font-myFont3'><Progress/> Rate drop alert</h3>
        <h1 className='text-5xl md:text-6xl lg:text-[7rem] leading-none text-white text-center font-myFont5 mt-8'>The rate drop you&rsquo;ve been waiting for</h1>
        <div className='flex justify-between flex-col items-center h-[55vh] md:h-full md:flex-row w-9/12 mt-10 md:mt-52'>
          <div className='flex flex-col items-center gap-2'>
          <Link href='/start' className='px-12 py-5 rounded-full bg-[#1EE07F] font-myFont5 hover:bg-transparent hover:text-white transition ease-in'>Start my approval</Link>
          <h4 className='flex gap-2 items-center font-myFont3 text-sm text-gray-200'><MdOutlineTimer/> 3 min
          | No credit impact</h4>
          </div>
          <div className='md:block mb-10 md:mb-0'>
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

        <Image width={500} height={500} alt='banner mobile' src='/pics/banner.webp' className='absolute bottom-0 z-10 w-[500px]'/>
      </section>
    </>
  );
};

export default Navbar;
