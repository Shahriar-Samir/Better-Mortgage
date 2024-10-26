'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Story = () => {
    const [video, setVideo] = useState(false);

    useEffect(() => {
        const modalElement = document.getElementById('my_modal_2') as HTMLDialogElement;

        if (video) {
            modalElement?.showModal();
        } else {
            modalElement?.close();
        }
    }, [video]); // Run effect whenever video state changes

    return (
        <section className='flex flex-col-reverse md:flex-row w-11/12 max-w-[1100px] mx-auto gap-14 justify-center'>
            <article className='md:w-1/2 flex flex-col gap-5'>
                <h1 className='font-myFont5 text-3xl'>The status quo is broken</h1>
                <p className='text-gray-600 font-myFont3 max-w-[450px]'>
                    The traditional processes around homeownership are opaque and stressful. Fees aren&apos;t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It&apos;s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
                </p>
                <Link href='#'>
                    <button className='mt-4 px-10 py-5 bg-[#017848] text-lg font-myFont5 rounded-md text-white'>
                        Read Vishal's story
                    </button>
                </Link>
            </article>
            <div className='md:w-2/5 h-[400px] relative' onClick={() => setVideo(true)}>
                <img src='/playback.svg' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                <img src='https://media.better.com/video/vishal-mission.jpg' className='w-full h-full object-cover' />
            </div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box h-[70vh] bg-transparent p-0">
                    {video ? (
                        <iframe
                            src="https://www.youtube.com/embed/1KjYlLBM9j4"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            className='w-full h-full'
                            title="Vishal's Mission Video"
                        ></iframe>
                    ) : null}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button type="button" onClick={() => setVideo(false)}>Close</button>
                </form>
            </dialog>
        </section>
    );
};

export default Story;
