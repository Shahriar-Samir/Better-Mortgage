import React from 'react';

const QPart3 = () => {
    return (
        <section className='w-11/12 mx-auto max-w-[1200px]'>
            <article className='py-10 border-t border-b border-gray-300'>
                <h1 className='text-3xl font-myFont5 '>How much home can I afford?</h1>
                <p className='mt-10 text-sm font-myFont3 text-gray-600'>Once again, the easiest way to do this is with a calculator! To know if a home is in your budget, try out our home affordability calculator. This calculator will take a few inputs from you, like income and savings, and let you know the maximum amount of home you can afford.</p>
            </article>
            <article className='py-10 border-t border-b border-gray-300'>
                <h1 className='text-3xl font-myFont5 '>Next steps to buying a house</h1>
                <div className='mt-10 text-sm font-myFont3 text-gray-600'>
                <p className=''>There are 8 steps to buying a house and by using this calculator you’ve completed step 2 (calculating your home affordability) and maybe even step 1 (getting your finances in order).</p><br></br>
                <p>The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3-minutes and doesn’t impact your credit score. It’s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, and the range of interest rates you’ll be offered.</p><br></br>
                <p>
                If you’re ready to buy a home now, our definitive home buying checklist can walk you through everything you need to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you’ll be able to show sellers and real estate agents that you mean business—giving you an edge over homebuyers that don’t have this kind of proof that they’re financially ready to purchase. And by working with an agent from Better Real Estate and funding with Better Mortgage, you’ll save $2,000 on closing costs, and save up to $8,200 on average over the life of your loan.**
                </p>
                </div>
                    
            </article>

            <section>
            <h1 className='mt-10 text-3xl font-myFont5 '>More resources</h1>
            <div className='grid md:grid-cols-3 gap-5 mt-8'>
                <div className='border py-6 px-8 rounded-lg border-gray-300'>
                    <img src='https://media.better.com/better-com/mortgage-calculator/doc-correct.svg'/>
                    <h2 className='mt-3 text-xl font-myFont3'>Get pre-approved to see how much you can borrow</h2>
                    <h4 className='mt-4 font-myFont5 text-sm text-[#017848]'>Get started &rarr;</h4>
                    <p className='text-xs mt-2 font-myFont2'>Won’t impact your credit</p>
                </div>
                <div className='border py-6 px-8 rounded-lg border-gray-300'>
                    <img src='https://media.better.com/better-com/mortgage-calculator/downtrend.svg'/>
                    <h2 className='mt-3 text-xl font-myFont3'>See today’s rates in your area</h2>
                    <h4 className='mt-4 font-myFont5 text-sm text-[#017848]'>See rates &rarr;</h4>
                </div>
                <div className='border py-6 px-8 rounded-lg border-gray-300'>
                    <img src='https://media.better.com/better-com/mortgage-calculator/calculator.svg'/>
                    <h2 className='mt-3 text-xl font-myFont3'>Find out your max homebuying budget</h2>
                    <h4 className='mt-4 font-myFont5 text-sm text-[#017848]'>Try our mortgage calculator &rarr;</h4>
                </div>
            </div>
            </section>
            <div className='text-xs mt-16'>
          <p>  *See Better Real Estate discount terms and conditions.</p>
            <p>**The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year fixed-rate mortgage product with Better Mortgage’s own offered rate for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is based on conventional, conforming fully-amortizing home purchase loans for borrowers with a loan-to-value of 80 percent and with excellent credit. Better Mortgage’s offered rate is based on pricing output for a 30-year fixed-rate mortgage product with a 30-day lock period for a single-family, owner-occupied residential property and a borrower with excellent (760 FICO) credit and a loan-to-value ratio of 80 percent. Individual savings could vary based on current market rates, property type, loan amount, loan-to-value, credit score, debt-to-income ratio and other variables.</p>
            </div>
        </section>
    );
};

export default QPart3;