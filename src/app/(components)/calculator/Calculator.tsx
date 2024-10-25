import React from 'react';

const Calculator = () => {
    return (
        <section className='bg-[#F0F7F1]'>
            <div>
                <h1>Mortgage calculator</h1>
                <p>Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.</p>
            </div>
            <div>
                <div>
                <h2>Home Price</h2>
                <input/>
                </div>
                <div>
                <h2>Monthly payment</h2>
                <input/>
                </div>
                <button>Get pre-approved</button>
            </div>
            <input className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128" type="range" min="1" max="100" step="1"  />
            <div className='flex justify-between'>
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