import React from 'react';
import Title2 from './Title2';
import House1 from './Svgs/House1';
import House2 from './Svgs/House2';
import Facebook from './Svgs/Facebook';
import Instagram from './Svgs/Instagram';
import LinkedIn from './Svgs/LinkedIn';

const Footer = () => {
    return (
        <div className='bg-[#FFFDFA]'>
            <footer className="flex p-10 gap-16 ">
                
<nav className='w-4/12'>
 <div className='flex flex-col gap-1'>
 <h1 className='text-[#017848] text-2xl'><Title2/></h1>
 <a className="link link-hover mt-4 font-myFont3">Better is a family of companies serving all your homeownership needs.</a>
 </div>

<div className='flex flex-col gap-5 mt-5'>
<div className='flex flex-col gap-3'>
<img src='https://media.better.com/better-com/1660240096238/better-mortgage-logo.svg' className='w-fit h-[21px]'/>
<p className='font-myFont3 text-sm'>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
</div>
<div className='flex flex-col gap-2'>
<img src='https://media.better.com/better-com/1660240096238/better-real-estate-logo.svg' className='w-fit h-[21px]'/>
<p className='font-myFont3 text-sm'>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
</div>
<div className='flex flex-col gap-2'>
<img src='https://media.better.com/better-com/1660240096238/better-cover-logo.svg' className='w-fit h-[21px]'/>
<p className='font-myFont3 text-sm'>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
</div>
<div className='flex flex-col gap-2'>
<img src='https://media.better.com/better-com/1660240096238/better-inspect-logo.svg' className='w-fit h-[21px]'/>
<p className='font-myFont3 text-sm'>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
</div>
<div className='flex flex-col gap-2'>
<img src='https://media.better.com/better-com/1660240096238/better-settlement-services-logo.svg' className='w-fit h-[21px]'/>
<p className='font-myFont3 text-sm'>Get transparent rates when you shop for title insurance all in one convenient place.</p>
</div>
</div>
  </nav>

  <nav className='flex flex-col w-3/12'>
    <h6 className="font-myFont5 text-lg">Resources</h6>
    <ul className='flex flex-col gap-5 mt-5'>
    <a className="link link-hover font-myFont3">Home affordability calculator</a>
    <a className="link link-hover font-myFont3">Mortgage calculator</a>
    <a className="link link-hover font-myFont3">Free mortgage calculator</a>
    <a className="link link-hover font-myFont3">Mortgage calculator with taxes</a>
    <a className="link link-hover font-myFont3">Mortgage calculator with PMI</a>
    <a className="link link-hover font-myFont3">Rent vs buy calculator</a>
    <a className="link link-hover font-myFont3">HELOC payment calculator</a>
    <a className="link link-hover font-myFont3">HELOC vs cash-out refinance calculator</a>
    <a className="link link-hover font-myFont3">Buy a home</a>
    <a className="link link-hover font-myFont3">Sell a home</a>
    <a className="link link-hover font-myFont3">Get home inspection</a>
    </ul>
  </nav>
  <nav className='flex flex-col w-3/12'>
    <h6 className="font-myFont5 text-lg">Company</h6>
    <ul className='flex flex-col gap-5 mt-5'>
    <a className="link link-hover font-myFont3">About Us</a>
    <a className="link link-hover font-myFont3">Careers</a>
    <a className="link link-hover font-myFont3">Media</a>
    <a className="link link-hover font-myFont3">Partner With Us</a>
    <a className="link link-hover font-myFont3">Learning center</a>
    <a className="link link-hover font-myFont3">FAQs</a>
    <a className="link link-hover font-myFont3">Investor Relations</a>
    </ul>
  </nav>
  <nav className='flex flex-col w-3/12'>
    <h6 className="font-myFont5 text-lg">Contact Us</h6>
    <ul className='flex flex-col gap-5 mt-5'>
    <a className="link link-hover font-myFont3">hello@better.com</a>
    <a className="link link-hover font-myFont3">415-523-8837</a>
    <a className="link link-hover font-myFont3">FAQ</a>
    <a className="link link-hover font-myFont3">Glossary</a>
    </ul>
    <h6 className="font-myFont5 text-lg mt-5">Legal</h6>
    <ul className='flex flex-col gap-5 mt-5'>
    <a className="link link-hover font-myFont3">NMLS Consumer Access</a>
    <a className="link link-hover font-myFont3">Privacy Policy</a>
    <a className="link link-hover font-myFont3">Terms of Use</a>
    <a className="link link-hover font-myFont3">Disclosures & Licensing</a>
    <a className="link link-hover font-myFont3">Affiliated Business</a>
    <a className="link link-hover font-myFont3">Browser Disclaimer</a>
    </ul>
    <div className='flex gap-4 mt-7'>
        <House1/>
        <House2/>
    </div>
  </nav>
</footer>
<section className='flex gap-3 mt-48 px-10'>
  <Facebook/>
  <Instagram/>
  <LinkedIn/>
</section>
<footer className="flex  flex-col text-xs font-myFont3 mt-12 px-10">
<h1 className='border-b-2 border-b-gray-300 pb-10'><p><sup>1</sup> Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See One Day Mortgage™ Terms and Conditions.</p>
<br/>
<p><sup>2</sup> Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See One Day HELOC™ Terms and Conditions.</p>
<br/>
<p><sup>3</sup> Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.</p>
</h1>

<h1 className='pt-10'>
  <p>© 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc. License #02164055 provide real estate services; Better Cover, LLC sells insurance products; Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.</p>
<br/>
<p>Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <a href="https://www.nmlsconsumeraccess.org/">NMLS Consumer Access</a></p>
<br/>
<p>Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC, and Better Real Estate, operating in the State of California through its wholly-owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a <a href="#">full listing of Better Real Estate, LLC’s license numbers</a>. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.</p>
<br/>
<p><a href="#">New York State Housing and Anti-Discrimination Notice</a></p>
<br/>
<p><a href="#">New York Standard Operating Procedures</a></p>
<br/>
<p><a href="#">Texas Real Estate Commission: Information About Brokerage Services</a> | <a href="#">Consumer Protection Notice</a></p>
<br/>
<p>Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.</p>
<br/>
<p>Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.</p>
<br/>
<p>Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a <a href="#">full listing of Better Cover, LLC’s license numbers</a>.</p>
<br/>
<p>Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.</p>
<br/>
<p>Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable legal and regulatory requirements. Products not available in all states.</p>
<br/>
<p>Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U.S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.</p>
.</h1>
</footer>
        </div>
    );
};

export default Footer;