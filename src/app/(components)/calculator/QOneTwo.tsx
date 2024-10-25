import React from 'react';

const QOneTwo = () => {
    return (
        <section className='w-11/12 mx-auto max-w-[1200px]'>
            <article className='py-10 border-t border-gray-300'>
                <h1 className='text-3xl font-myFont5 '>How does a mortgage calculator help me?</h1>
                <p className='mt-5 text-sm font-myFont3 text-gray-600'>When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.</p>
            </article>

            <article className='py-10 border-t  border-gray-300'>
                <h1 className='text-3xl font-myFont5 '>How much monthly mortgage payment can I afford?</h1>
                <div className='mt-5 text-sm font-myFont3 text-gray-600'>
      <p>
        Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.
      </p><br></br>
      <p>
        Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.
      </p>
    </div>
   <div className='w-8/12 mx-auto'>
   <p className='mt-5 text-sm font-myFont3 text-gray-800'>Formula for calculating your debt-to-income (DTI) ratio:</p>
                <img src='/pics/dti-formula.jpg' className='mt-3'/>
                <p className='mt-5 text-sm font-myFont3 text-gray-800'>Here’s an example of what calculating your DTI might look like:</p>
                <img src='/pics/dti-example.jpg' className='mt-3'/>
   </div>

            </article>

            <article className='py-10 border-t border-gray-300'>
            <h1 className='text-3xl font-myFont5'>How to calculate monthly mortgage payments?</h1>
            <p className='mt-5 text-sm font-myFont3 text-gray-600'>Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>
            <h2 className='text-xl font-myFont5 mt-5'>Formula for calculating monthly mortgage payments</h2>
            <p className='mt-4 text-sm font-myFont3 text-gray-600'>The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:</p>
            <div className='w-8/12 mx-auto'>
            <img src='/pics/payments-formula.jpg' className='mt-4'/>
            <div className="text-sm font-myFont3 text-gray-600">
                <h1 className='mt-3'>Where:</h1>
  <ul className="list-disc space-y-3 ms-8 mt-2">
    <li className=''><p><strong>M</strong> is the monthly mortgage payment.</p></li>
    <li className=''><p><strong>P</strong> is the principal loan amount (the amount you borrow).</p></li>
    <li className=''><p><strong>r</strong> is the monthly interest rate <br></br>(annual interest rate divided by 12 and expressed as a decimal).</p></li>
    <div className="text-xs text-gray-700 flex gap-3 flex-col">
      <p>For example:</p>
      <p>if the annual interest rate is <strong>5%</strong>,</p>
      <p>the monthly rate would be <strong>0.05/12</strong> = .00417, or <strong>.417%</strong></p>
    </div>
    <li><p><strong>n</strong> is the total number of payments in months.</p></li>
    <div className="text-xs text-gray-700 flex gap-3 flex-col">
      <p>For example:</p>
      <p>For example:
      for a 30-year loan, n = 30×12 = <strong>360</strong> months</p>
    </div>
  </ul>
</div>
<p className='mt-5 text-sm font-myFont3 text-gray-800'>Here’s a simple example:</p>
<img src='/pics/payments-example.jpg' className='mt-3'/>
            </div>
            <p className='mt-5 text-sm font-myFont3 text-gray-600'>This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</p>
            </article>
            <article>
            </article>
        </section>
    );
};

export default QOneTwo;