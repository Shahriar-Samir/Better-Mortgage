import React from 'react';

const Companies = () => {
    return (
        <section className='mt-28'>
            <h1 className='text-center text-3xl font-myFont5'>Backed by</h1>
            <div className='md:w-full mx-auto flex gap-2 justify-center mt-20 flex-col md:flex-row w-1/2 md:flex-wrap'>
                <img src='/companies/company1.svg'/>
                <img src='/companies/company2.svg'/>
                <img src='/companies/company3.svg'/>
                <img src='/companies/company4.svg'/>
                <img src='/companies/company5.svg'/>
                <img src='/companies/company7.svg'/>
                <img src='/companies/company6.svg'/>
            </div>
        </section>
    );
};

export default Companies;