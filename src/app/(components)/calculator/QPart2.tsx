import React from 'react';

const QPart2 = () => {

    const data = [
        { state: 'AL', medianRate: '0.41%', meanRate: '0.40%', homeValue: '$157,100', taxesPaid: '$646' },
        { state: 'AK', medianRate: '1.23%', meanRate: '1.04%', homeValue: '$282,800', taxesPaid: '$3,464' },
        { state: 'AZ', medianRate: '0.62%', meanRate: '0.63%', homeValue: '$265,600', taxesPaid: '$1,648' },
        { state: 'AR', medianRate: '0.62%', meanRate: '0.64%', homeValue: '$142,100', taxesPaid: '$878' },
      ];

    return (
        <section className='w-11/12 mx-auto max-w-[1200px]'>
            <article className='py-10 border-t border-b border-gray-300'>
                <h1 className='text-2xl font-myFont5 '>How to use this mortgage calculator?</h1>     
<div className='mt-5 text-sm font-myFont3 text-gray-600'>
<p >Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.</p><br></br>
<p>Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.</p>
<br></br>
<p>The only amounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the Better home affordability calculator.</p>
<br></br>
<p><strong>Fun fact:</strong> Property tax rates are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.</p>
</div>

            </article>
            <article className='py-10 border-t border-b border-gray-300'>
                <h1 className='text-2xl font-myFont5 '>Do you know your property tax rate?</h1>
                <p className='mt-5 text-sm font-myFont3 text-gray-600'>While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here’s a helpful chart from Forbes breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate:</p>
                <table className="min-w-full bg-white border border-gray-200 mt-16">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="px-4 py-2 border border-gray-300">State</th>
            <th className="px-4 py-2 border border-gray-300">Median Effective Property Tax Rate</th>
            <th className="px-4 py-2 border border-gray-300">Mean Effective Property Tax Rate</th>
            <th className="px-4 py-2 border border-gray-300">Median Home Value</th>
            <th className="px-4 py-2 border border-gray-300">Median Property Taxes Paid</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center even:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">{item.state}</td>
              <td className="px-4 py-2 border border-gray-300">{item.medianRate}</td>
              <td className="px-4 py-2 border border-gray-300">{item.meanRate}</td>
              <td className="px-4 py-2 border border-gray-300">{item.homeValue}</td>
              <td className="px-4 py-2 border border-gray-300">{item.taxesPaid}</td>
            </tr>
          ))}
        </tbody>
      </table>
            </article>

            <article className='py-10 border-t border-b border-gray-300'>
                <h1 className='text-3xl font-myFont5 '>How is Better’s mortgage calculator different?</h1>
                <h2 className='mt-8 text-xl font-myFont5 '>This mortgage calculator shows your payments with taxes and insurance</h2>
                <div className='mt-5 text-sm font-myFont3 text-gray-600'>
                    <p>The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.</p>
                    <br></br>
                    <p>
                    Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.
                    </p>
                    <br></br>
                    <p>Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.</p>
</div>
                <h2 className='mt-8 text-xl font-myFont5 '>This mortgage calculator shows your mortgage costs with PMI</h2>
                <div className='mt-5 text-sm font-myFont3 text-gray-600'>
                   <p> PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.</p>
                    <br></br>
                <p>Choosing a mortgage with PMI is a popular option: 71% of first-time homebuyers had a down payment of less than 20% in July 2021. In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn’t risen above 10% since 1989.</p>
                <br></br>
                <p>PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you've accumulated at least 20% home equity.</p>
</div>

<h2 className='mt-8 text-xl font-myFont5 '>This mortgage calculator includes HOA fees</h2>
<div className='mt-5 text-sm font-myFont3 text-gray-600'>
    <p>Homeowners association (“HOA”) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they’re an essential factor to consider when calculating your mortgage costs.
    </p>
    <br></br>
    <p>Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It's important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as ‘special assessments’ to cover unexpected expenses from time to time.</p>
</div>
            </article>

            <article  className='py-10 border-t border-b border-gray-300'>
                <h1 className='text-3xl font-myFont5 '>How to reduce your monthly mortgage payments?</h1>
                <p className='mt-7 text-sm font-myFont3 text-gray-600'>The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less than willing to cut you a deal, you have other options.</p>
                <h2 className='mt-8 text-xl font-myFont5  '>Extend the length of your mortgage</h2>
                <p className='mt-5 text-sm font-myFont3 text-gray-600'>The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. (In lender-speak, ‘extending the length of your mortgage’ is known as ‘increasing your loan term’.) This is why people often choose a 30-year fixed rate mortgage over one with a 15- or 20-year term.</p>

                <h2 className='mt-8 text-xl font-myFont5 '>Increase your down payment</h2>
                <p className='mt-5 text-sm font-myFont3 text-gray-600'>The smaller the amount of your mortgage, the smaller your monthly mortgage payments will be. If you’re able to put at least 20% of the home price towards your down payment, you’ll be able to avoid PMI (private mortgage insurance). Even if you can’t afford a complete 20% down payment, boosting your down payment will help you get PMI removed sooner. In fact, boosting your down payment by 5% can lower your monthly PMI fees.</p>


                <h2 className='mt-8 text-xl font-myFont5'>Get a lower interest rate</h2>
                <p className='mt-5 text-sm font-myFont3 text-gray-600'>Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your loan-to-value ratio (LTV).

Depending on your loan amount, a lower LTV may increase the likelihood of you being offered a low interest rate. If you intend on keeping your home for a while, you could consider buying points to reduce your interest rate. Buying points essentially means you agree to pay more upfront costs in exchange for a lower monthly payment.

If you think you may sell or refinance the home in the first 5-10 years of the mortgage, you could consider an adjustable-rate mortgage (ARM). An ARM offers a lower fixed interest rate for a set introductory period—typically 5, 7, or 10 years. Once the set introductory period ends, the interest rate adjusts (interest rate may increase after consummation). The introductory interest rate for ARMs is typically lower than the interest rate for a conventional fixed-rate mortgage which could make it a great way to save on interest if you know you won’t keep the mortgage for long.

If you’re not planning on buying a home for a while, improving your credit score is a tried and true way of increasing your chances of qualifying for a lower interest rate. By reducing your debt-to-income ratio (DTI), lenders will see that you comfortably afford your mortgage and may be more willing to offer a lower interest rate.</p>
            </article>
        </section>
    );
};

export default QPart2;