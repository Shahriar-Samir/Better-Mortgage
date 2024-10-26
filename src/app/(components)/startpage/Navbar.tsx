import React from 'react';
import StartTitle from '../Svgs/StartTitle';
import Telephone from '../Svgs/Telephone';

const Navbar = () => {
    return (
        <header className='sticky top-0 bg-[#FFFDFA]'>
            <nav className='flex justify-between items-center w-10/12 mx-auto py-10 border-b-4 relative'>
                <StartTitle/>
                <div className='flex items-center gap-2'>
                    <div className='p-2 rounded-full bg-[#CCE9D3]'>
                    <Telephone/>
                    </div>
                    <h5 className="font-myFont5 hidden md:block">Need help? Call (415) 523 8837</h5>
                </div>
                <img src='/pics/betty1.jpg' className='absolute rounded-full w-[50px] bottom-[-25px] left-[47%]'/>
            </nav>
        </header>
    );
};

export default Navbar;