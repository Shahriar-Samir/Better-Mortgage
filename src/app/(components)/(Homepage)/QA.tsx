import React from 'react';
import NavigateLeft from '../Svgs/NavigateLeft';

const QA = () => {
    return (
        <section className='mt-20 md:mt-52 w-11/12 mx-auto'>   
                <div className='flex justify-between flex-col gap-10 lg:flex-row'>
                <h1 className='text-5xl font-myFont5'>Got questions?<br/>
                We've got answers</h1>
                <div className='flex items-end gap-6 overflow-x-auto'>
                    <button className='rounded-full text-md font- px-6 py-2 text-[#017848] border-4 border-[#017848] font-myFont5'>Our products</button>
                    <button className='rounded-full text-md font- px-6 py-2 text-[#017848] border border-[#017848] font-myFont5'>Our products</button>
                    <button className='rounded-full text-md font- px-6 py-2 text-[#017848] border border-[#017848] font-myFont5'>Our products</button>
                </div>
                </div>
                <section className='grid mt-16 gap-5 md:grid-cols-3'>
                    <article className='bg-[#F0F7F1] px-12 py-8 rounded-lg flex flex-col'>
                        <div>
                            <h1 className='text-2xl font-myFont5'>Buying your first home with Better</h1>
                            <div className='hover-text-white mt-5'><NavigateLeft/></div>
                        </div>
                            <img src='/pics/first-home.webp' className='mt-6 rounded-md w-full object-cover'/>
                    </article>
                    <article className='bg-[#F0F7F1] px-12 py-8 rounded-lg md:col-span-2 flex md:flex-row justify-between gap-10 flex-col'>
                        <div>
                            <h1 className='text-2xl font-myFont5'>One Day Mortgage<sup>1</sup></h1>
                            <p className='mt-6 text-sm font-myFont3 hidden md:block'>Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup></p>
                            <div className='hover-text-white mt-5'><NavigateLeft/></div>
                        </div>
                            <img src='/pics/one-day-mortgage.webp' className='mt-6 rounded-md w-full md:w-1/3 object-cover'/>
                    </article>
                    <article className='bg-[#F0F7F1] px-12 py-8 rounded-lg md:col-span-2 flex flex-col md:flex-row-reverse justify-between gap-10'>
                        <div>
                            <h1 className='text-2xl font-myFont5'>Buying your first home with Better</h1>
                            <p className="mt-6 text-sm font-myFont3 hidden md:block">Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit<sup>2</sup>. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup></p>
                            <div className='hover-text-white mt-5'><NavigateLeft/></div>
                        </div>
                            <img src='/pics/better-heloc.webp' className='mt-6 rounded-md md:w-1/3 object-cover'/>
                    </article>
                    <article className='bg-[#F0F7F1] px-12 py-8 rounded-lg flex flex-row flex-wrap'>
                        <div>
                            <h1 className='text-2xl font-myFont5'>Insurance</h1>
                            <div className='hover-text-white mt-5'><NavigateLeft/></div>
                        </div>
                            <img src='/pics/insurance.webp' className='mt-6 rounded-md w-full'/>
                    </article>
                </section>
        </section>
    );
};

export default QA;