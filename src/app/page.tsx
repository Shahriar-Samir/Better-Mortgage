import React from 'react';
import Banner from './(components)/(Homepage)/Banner';
import Stories from './(components)/(Homepage)/Stories';
import FindOut from './(components)/(Homepage)/FindOut';
import QA from './(components)/(Homepage)/QA';

const page = () => {
  return (
    <main className='bg-[#FFFDFA]'>
      <FindOut/>
      <QA/>
    </main>
  );
};

export default page;