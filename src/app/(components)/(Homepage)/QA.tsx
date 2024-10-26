'use client'

import React, { useState } from 'react';
import NavigateLeft from '../Svgs/NavigateLeft';
import { title } from 'process';

const QA = () => {
    const prodcuts=[
        {
            title:'Buying your first home with Better',
            pic:'/pics/first-home.webp'
        },
        {
            title: 'One Day Mortgage (1)',
            pic: '/pics/one-day-mortgage.webp',
            para:'Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.'
        },
        {
 title: 'Buying your first home with Better',
            pic: '/pics/better-heloc.webp',
            para:'Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit (2). Access up to 90% of your home equity as cash in as little as 7 days.(3)'
        },
        {
            title:'Insurance',
            pic:'/pics/insurance.webp',
        }
    ]

    const calculators = [
        {
            title:'Mortgage calculator',
            pic:'/pics/calc1.webp'
        },
        {
            title: 'Affordability calculator',
            pic: '/pics/calc2.webp',
            para:"Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford."
        },
        {
 title: 'HELOC calculator',
            pic: '/pics/calc3.webp',
            para:'Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.'
        },
        {
            title:'Insurance',
            pic:'/pics/calc4.webp',
        }
    ]

    const guides = [
        {
            title:'What is a good debt-to-income ratio for a home loan?',
            pic:'/pics/guide1.webp'
        },
        {
            title: 'Buying a house without realtor',
            pic: '/pics/guide2.webp',
            para:"Thinking about buying a house without a real estate agent? Read this first."
        },
        {
 title: 'Timeline for homebuying process',
            pic: '/pics/guide3.webp',
            para:"Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps."
        },
        {
            title:'Conventional loan requirements',
            pic:'/pics/guide4.webp',
        }
    ]

    const [category,setCategory] = useState(prodcuts)

    const setCategory1 = ()=> setCategory(prodcuts)
    const setCategory2 = ()=> setCategory(calculators)
    const setCategory3 = ()=> setCategory(guides)

    return (
        <section className='mt-20 md:mt-52 w-11/12 mx-auto'>   
                <div className='flex justify-between flex-col gap-10 lg:flex-row'>
                <h1 className='text-5xl font-myFont5'>Got questions?<br/>
                We've got answers</h1>
                <div className='flex items-end gap-6 overflow-x-auto'>
                    <button onClick={setCategory1}className={`rounded-full text-md font- px-6 py-2 text-[#017848] border border-[#017848] font-myFont5 ${category[0].title==='Buying your first home with Better' ? 'border-4 border-[#017848]':''}`}>Our products</button>
                    <button onClick={setCategory2} className={`rounded-full text-md font- px-6 py-2 text-[#017848] border border-[#017848] font-myFont5 ${category[0].title==='Mortgage calculator' ? 'border-4 border-[#017848]':''}`}>Calculators</button>
                    <button onClick={setCategory3} className={`rounded-full text-md font- px-6 py-2 text-[#017848] border border-[#017848] font-myFont5 ${category[0].title==='What is a good debt-to-income ratio for a home loan?' ? 'border-4 border-[#017848]':''}`}>Guides & FAQs</button>
                </div>
                </div>
                <section className='grid mt-16 gap-5 md:grid-cols-3'>
                    <article className='bg-[#F0F7F1] px-12 py-8 rounded-lg flex flex-col'>
                        <div>
                            <h1 className='text-2xl font-myFont5'>{category[0].title}</h1>
                            <div className='hover-text-white mt-5'><NavigateLeft/></div>
                        </div>
                            <img src={category[0].pic} className='mt-6 rounded-md w-full object-cover'/>
                    </article>
                    <article className='bg-[#F0F7F1] px-12 py-8 rounded-lg md:col-span-2 flex md:flex-row justify-between gap-10 flex-col'>
                        <div>
                            <h1 className='text-2xl font-myFont5'>{category[1].title}</h1>
                            <p className='mt-6 text-sm font-myFont3 hidden md:block'>{category[1].para}</p>
                            <div className='hover-text-white mt-5'><NavigateLeft/></div>
                        </div>
                            <img src={category[1].pic} className='mt-6 rounded-md w-full md:w-1/3 object-cover'/>
                    </article>
                    <article className='bg-[#F0F7F1] px-12 py-8 rounded-lg md:col-span-2 flex flex-col md:flex-row-reverse justify-between gap-10'>
                        <div>
                            <h1 className='text-2xl font-myFont5'>{category[2].title}</h1>
                            <p className="mt-6 text-sm font-myFont3 hidden md:block">{category[2].para}</p>
                            <div className='hover-text-white mt-5'><NavigateLeft/></div>
                        </div>
                            <img src={category[2].pic} className='mt-6 rounded-md md:w-1/3 object-cover'/>
                    </article>
                    <article className='bg-[#F0F7F1] px-12 py-8 rounded-lg flex flex-row flex-wrap'>
                        <div>
                            <h1 className='text-2xl font-myFont5'>{category[3].title}</h1>
                            <div className='hover-text-white mt-5'><NavigateLeft/></div>
                        </div>
                            <img src={category[3].pic} className='mt-6 rounded-md w-full'/>
                    </article>
                </section>
        </section>
    );
};

export default QA;