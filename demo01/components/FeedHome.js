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
        <div className="top-to-bottom flex flex-col items-center flex-grow min-h-screen home-static-slide-sec" >

            <button
                onClick={scrollToTop}
                className="fixed bottom-20 right-10 bg-[#EF7B7B] text-white p-3 rounded-full hover:bg-[#c66868] transition duration-300 ease-in-out"
            >
                Top
            </button>


            <div className='main-top-banner'>
                <div className='my-5 main-banner-img'>
                    <Image
                        src="/pics/beach-melbourne.webp"
                        alt="brighton-beach"
                        width={1600} height={600}
                    />
                </div>

                <div className='flex flex-col main-banner-txt'>
                    <div className='banner-small-txt'>
                        <span className='banner-dot'>.</span>{"Bridging Distances"}<span className='banner-dot banner-dot2'>.</span>{"Blending Cultures"}
                    </div>
                    <div className=' text-6xl font-bold banner-heading'>
                        {"Are you a new migrant?"}
                    </div>
                    <div className=' text-2xl banner-text'>
                        {"From learning the local lingo to finding your favorite spots. We're here every step of the way."}
                    </div>


                </div>

            </div>

            <div ref={moreContent} className='grid-container pd-100 grid banner-bottom-sec flex-row items-center cursor-pointer '>
                <div className=' items-center  explore-sec' >

                    <div onClick={() => router.push('/things')} className=' duration-200 ease-out relative rounded-3xl overflow-hidden explore-img' style={{ width: '100%', height: '250px' }}>
                        <Image
                            src="/pics/Things to know (tab1).jpg" alt="Things to know"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div >
                    <div className='explore-bottom'>
                        <div className='text-3xl explore-top'>
                            {"Start Your Journey"}
                        </div>
                        <div className='ex-txt '>
                            {"Learn essential insights on Victoria's transportation, shopping, banking, healthcare, and communication to smoothly adjust to your new community."}
                        </div>
                        <button onClick={() => router.push('/things')} className='mt-3 bg-[#EF7B7B] text-white p-2 rounded-2xl  duration-500 ease-out'>
                            Learn more
                        </button>
                    </div>

                </div>

                <div className=' items-center  explore-sec' >

                    <div onClick={() => router.push('/map')} className=' explore-img  duration-200 ease-out relative rounded-3xl overflow-hidden' style={{ width: '100%', height: '250px' }}>
                        <Image
                            src="/pics/Australia.jpg" alt="Things to know"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div >
                    <div className='explore-bottom'>
                        <div className='text-3xl explore-top'>
                            {"Discover Victoria"}
                        </div>
                        <div className=' ex-txt '>
                            {"Explore Victoria's wonders, from the Great Ocean Road's cliffs to Melbourne's lively lanes, and let every place tell its story, enhancing your journey."}
                        </div>
                        <button onClick={() => router.push('/map')} className='mt-3 bg-[#EF7B7B] text-white p-2 rounded-2xl duration-500 ease-out'>
                            Learn more
                        </button>
                    </div>

                </div>


                <div className=' items-center  explore-sec' >

                    <div onClick={() => router.push('/learn')} className='explore-img  duration-200 ease-out relative rounded-3xl overflow-hidden' style={{ width: '100%', height: '250px' }}>
                        <Image
                            src="/pics/Aussie slangs(tab).gif" alt="Things to know"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div >
                    <div className='explore-bottom'>
                        <div className='text-3xl explore-top'>
                            {"Australian Accent Learning"}
                        </div>
                        <div className='ex-txt'>
                            {"Master the Aussie accent effortlessly! Explore pronunciation with our Accent Dictionary, refine communication skills, and feel at home in Australian conversations."}
                        </div>
                        <button onClick={() => router.push('/learn')} className='mt-3 bg-[#EF7B7B] text-white p-2 rounded-2xl duration-500 ease-out'>
                            Learn more
                        </button>
                    </div>

                </div>

                <div className=' items-center  explore-sec' >
                    <div onClick={() => router.push('/chatbot')} className='explore-img  duration-200 ease-out relative rounded-3xl overflow-hidden' style={{ width: '100%', height: '250px' }}>
                        <Image
                            src="/pics/aussie.png" alt="Things to know"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div >
                    <div className='explore-bottom'>
                        <div className='text-3xl explore-top'>
                            {"Aussie Bot"}
                        </div>
                        <div className='ex-txt'>
                            {"Unlock Aussie slang with our chatbot! Dive into local expressions, boost language skills, and blend seamlessly into the community."}
                        </div>
                        <button onClick={() => router.push('/chatbot')} className='mt-3 bg-[#EF7B7B] text-white p-2 rounded-2xl duration-500 ease-out'>
                            Learn more
                        </button>
                    </div>

                </div>


                <div className=' items-center  explore-sec' >
                    <div onClick={() => router.push('/Aussie')} className='explore-img  duration-200 ease-out relative rounded-3xl overflow-hidden' style={{ width: '100%', height: '250px' }}>
                        <Image
                            src="/pics/ComingSoon.jpg" alt="Things to know"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div >
                    <div className='explore-bottom'>
                        <div className='text-3xl explore-top'>
                            {"Coming Soon"}
                        </div>
                        <div className='ex-txt'>
                            {"Coming Soon"}
                        </div>
                        <button onClick={() => router.push('/map')} className='mt-3 bg-[#EF7B7B] text-white p-2 rounded-2xl  duration-500 ease-out'>
                            Learn more
                        </button>
                    </div>

                </div>


                <div className=' items-center  explore-sec' >

                    <div onClick={() => router.push('/Aussie')} className='explore-img  duration-200 ease-out relative rounded-3xl overflow-hidden' style={{ width: '100%', height: '250px' }}>
                        <Image
                            src="/pics/ComingSoon.jpg" alt="Things to know"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div >
                    <div className='explore-bottom'>
                        <div className='text-3xl explore-top'>
                            {"Coming Soon"}
                        </div>
                        <div className='ex-txt'>
                            {"Coming Soon"}
                        </div>
                        <button onClick={() => router.push('/map')} className='mt-3 bg-[#EF7B7B] text-white p-2 rounded-2xl  duration-500 ease-out'>
                            Learn more
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}
