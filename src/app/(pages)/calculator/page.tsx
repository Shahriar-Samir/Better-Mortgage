import Calculator from '@/app/(components)/calculator/Calculator';
import QOneTwo from '@/app/(components)/calculator/QOneTwo';
import QPart2 from '@/app/(components)/calculator/QPart2';
import QPart3 from '@/app/(components)/calculator/QPart3';
import Navbar2 from '@/app/(components)/navbar2';
import React from 'react';

const page = () => {
    return (
        <main>
            <Navbar2/>
            <Calculator/>
            <QOneTwo/>
            <QPart2/>
            <QPart3/>
        </main>
    );
};

export default page;