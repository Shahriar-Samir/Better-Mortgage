import Changing from '@/app/(components)/Aboutpage/Changing';
import Companies from '@/app/(components)/Aboutpage/Companies';
import Mission from '@/app/(components)/Aboutpage/Mission';
import Story from '@/app/(components)/Aboutpage/Story';
import Navbar from '@/app/(components)/navbar';
import React from 'react';

const page = () => {
    return (
        <main>
            <Navbar/>
            <Mission/>
            <Story/>
            <Changing/>
            <Companies/>
        </main>
    );
};

export default page;