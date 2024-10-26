import React from 'react';


const Calculator = () => {
    return (
        <section className='bg-[#F0F7F1] h-[100vh] flex flex-col items-center justify-center gap-10 mt-20'>
            <div className='mt-24 w-11/12 mx-auto max-w-[1200px]'>
                <h1 className='text-5xl font-myFont5'>Mortgage calculator</h1>
                <p className='mt-8 max-w-[800px] font-myFont3 text-gray-600'>Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-10 justify-between items-center w-11/12 mx-auto max-w-[1200px]'>
                <div className=''>
                <h2 className='text-md font-myFont5'>Home Price</h2>
                <input className='mt-5'/>
                </div>
                <div>
                <h2 className='text-md font-myFont5'>Monthly payment</h2>
                <h1 className='text-5xl font-myFont5 mt-8'>$250/mo</h1>
                </div>
                <button className="bg-[#017848] hover:bg-[#004733] p-5 px-10 text-white rounded-lg h-fit font-myFont5">Get pre-approved</button>
            </div>
            <input className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-2 block w-11/12 mx-auto max-w-[1200px]" type="range" min="1" max="100" step="1"  />
            <div className='flex justify-between w-11/12 mx-auto max-w-[1200px]'>
                <div>
                    <input/>
                    <input/>
                </div>
                <div>
                    <input/>
                    <input/>
                </div>
            </div>
        </section>
    );
};

export default Calculator;