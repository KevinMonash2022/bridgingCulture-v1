import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';


export default function FeedHome() {
    const router = useRouter();

    const moreContent = useRef(null);

    const scrollToDiv = () => {
        moreContent.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };



    return (
        <div className="flex flex-col items-center flex-grow min-h-screen" >

            <button
                onClick={scrollToTop}
                className="fixed bottom-20 right-10 bg-[#EF7B7B] text-white p-3 rounded-full hover:bg-[#c66868] transition duration-300 ease-in-out"
            >
                Top
            </button>


            <div className='flex flex-col items-center'>
                <div className='mt-10 text-6xl font-bold'>
                    {"Are you a new migrant?"}
                </div>
                <div className='mt-10 text-2xl'>
                    {"From learning the local lingo to finding your favorite spots"}
                </div>
                <div className='mt-2 text-2xl'>
                    {"We're here every step of the way"}
                </div>

            </div>

            <div onClick={scrollToDiv} className="mt-6 text-2xl rounded-2xl bg-[#EF7B7B] text-white p-2 cursor-pointer hover:scale-125 transition-transform duration-400 ease-out">
                More
            </div>


            <div className='my-5'>
                <Image
                    src="/pics/brighton-beach-top-melb01.jpg"
                    alt="brighton-beach"
                    width={1000} height={70}
                />
            </div>

            <div ref={moreContent} className='mt-8 my-5 flex flex-col items-center cursor-pointer '>
                <div className='flex items-center ml-40 mr-5 md:flex-row space-x-20' >
                    <div onClick={() => router.push('/things')} className='hover:scale-110 hover:blur-sm transition-transform duration-200 ease-out relative rounded-3xl overflow-hidden' style={{ width: '320px', height: '200px' }}>
                        <Image
                            src="/pics/Things to know (tab1).jpg" alt="Things to know"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div >
                    <div className='w-1/3'>
                        <div className='text-3xl font-bold'>
                            {"Explore"}
                        </div>
                        <div className='mt-3 text-gray-500'>
                            {"Learn essential insights on Victoria's transportation, shopping, banking, healthcare, and communication to smoothly adjust to your new community."}
                        </div>
                        <button onClick={() => router.push('/things')} className='mt-3 bg-[#EF7B7B] text-white p-2 rounded-2xl hover:translate-x-6 transition-transform duration-500 ease-out'>
                            Learn more...
                        </button>
                    </div>

                </div>

                <div className='mt-20 flex items-center ml-40 mr-5 md:flex-row space-x-20' >
                    <div onClick={() => router.push('/map')} className='hover:scale-110 hover:blur-sm transition-transform duration-200 ease-out relative rounded-3xl overflow-hidden' style={{ width: '320px', height: '200px' }}>
                        <Image
                            src="/pics/Australia.jpg" alt="Things to know"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div >
                    <div className='w-1/3'>
                        <div className='text-3xl font-bold'>
                            {"Discover Victoria"}
                        </div>
                        <div className='mt-3 text-gray-500'>
                            {"Explore Victoria's wonders, from the Great Ocean Road's cliffs to Melbourne's lively lanes, and let every place tell its story, enhancing your journey."}
                        </div>
                        <button onClick={() => router.push('/map')} className='mt-3 bg-[#EF7B7B] text-white p-2 rounded-2xl hover:translate-x-6 transition-transform duration-500 ease-out'>
                            Learn more...
                        </button>
                    </div>

                </div>




            </div>



        </div>
    )
}
