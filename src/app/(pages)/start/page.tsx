import Greeting from '@/app/(components)/startpage/Greeting';
import Navbar from '@/app/(components)/startpage/Navbar';
import React from 'react';

const page = () => {
    return (
        <main className='w-full'>
            <Navbar/>
            <Greeting/>
        </main>
    );
};

export default page;