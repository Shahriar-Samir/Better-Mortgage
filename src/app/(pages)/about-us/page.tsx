import Changing from '@/app/(components)/Aboutpage/Changing';
import Companies from '@/app/(components)/Aboutpage/Companies';
import Mission from '@/app/(components)/Aboutpage/Mission';
import Story from '@/app/(components)/Aboutpage/Story';
import Timeline from '@/app/(components)/Aboutpage/Timeline';
import Navbar2 from '@/app/(components)/navbar2';
import React from 'react';

const page = () => {
    return (
        <main>
            <Navbar2/>
            <Mission/>
            <Story/>
            <Changing/>
            <Companies/>
            <Timeline/>
        </main>
    );
};

export default page;