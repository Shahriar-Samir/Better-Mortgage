import React from 'react';

const QOneTwo = () => {
    return (
        <section>
            <article>
                <h1>How does a mortgage calculator help me?</h1>
                <p>When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.</p>
            </article>

            <article>
                <h1>How much monthly mortgage payment can I afford?</h1>
                <p>When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.</p>
                <img src='/pics/dti-formula.jpg'/>
                <p>Here’s an example of what calculating your DTI might look like:</p>
                <img src='/pics/dti-example.jpg'/>
            </article>

            <article>
            <h1>How to calculate monthly mortgage payments?</h1>
            <p>Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>
            <h2>Formula for calculating monthly mortgage payments</h2>
            <p>The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:</p>
            <img src='/pics/payments-formula.jpg'/>
            </article>
            <article>
            <div className="max-w-lg mx-auto my-8 p-4 bg-white rounded-lg shadow-md">
  <ul className="list-disc list-inside space-y-2">
    <li><p><strong>M</strong> is the monthly mortgage payment.</p></li>
    <li><p><strong>P</strong> is the principal loan amount (the amount you borrow).</p></li>
    <li><p><strong>r</strong> is the monthly interest rate (annual interest rate divided by 12 and expressed as a decimal).</p></li>
    <p className="ml-8 text-sm text-gray-700">
      For example, if the annual interest rate is 5%, the monthly rate would be 0.05/12 = 0.00417, or 0.417%.
    </p>
    <li><p><strong>n</strong> is the total number of payments in months.</p></li>
    <p className="ml-8 text-sm text-gray-700">
      For example, for a 30-year loan, n = 30 × 12 = 360 months.
    </p>
  </ul>
</div>
<p>Here’s a simple example:</p>
<img src='/pics/payments-example.jpg'/>
<p>This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</p>
            </article>
        </section>
    );
};

export default QOneTwo;