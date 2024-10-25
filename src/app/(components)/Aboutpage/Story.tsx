import Link from 'next/link';
import React from 'react';

const Story = () => {
    return (
        <section className='flex'>
            <article className='w-1/2'>
                <h1>The status quo is broken</h1>
                <p>The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
                <Link href='#'><button>Read Vishal's story</button></Link>
            </article>
                <img src='https://media.better.com/video/vishal-mission.jpg' className='w-1/2'/>
        </section>
    );
};

export default Story;