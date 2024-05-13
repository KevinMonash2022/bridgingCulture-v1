import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';


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
                            className='hover:blur-sm transition-transform duration-300 ease-out'
                        />
                    </div >
                    <div className='explore-bottom'>
                        <div className='text-3xl explore-top'>
                            {"Start Your Journey"}
                        </div>
                        <div className='ex-txt '>
                            {"Learn essential insights on Victoria's transportation, shopping, banking, healthcare, and communication to smoothly adjust to your new community."}
                        </div>
                        <button onClick={() => router.push('/things')} className='mt-3 bg-[#EF7B7B] text-white p-2 rounded-2xl hover:scale-110 duration-500 ease-out'>
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
                            className='hover:blur-sm transition-transform duration-300 ease-out'
                        />
                    </div >
                    <div className='explore-bottom'>
                        <div className='text-3xl explore-top'>
                            {"Discover Victoria"}
                        </div>
                        <div className=' ex-txt '>
                            {"Explore Victoria's wonders, from the Great Ocean Road's cliffs to Melbourne's lively lanes, and let every place tell its story, enhancing your journey."}
                        </div>
                        <button onClick={() => router.push('/map')} className='mt-3 bg-[#EF7B7B] text-white p-2 rounded-2xl hover:scale-110 duration-500 ease-out'>
                            Learn more
                        </button>
                    </div>

                </div>

                <div className=' items-center  explore-sec' >

                    <div onClick={() => router.push('/AussieSlangPage')} className='explore-img  duration-200 ease-out relative rounded-3xl overflow-hidden' style={{ width: '100%', height: '250px' }}>
                        <Image
                            src="/pics/Aussie slangs(tab).gif" alt="Things to know"
                            layout="fill"
                            objectFit="cover"
                            className='hover:blur-sm transition-transform duration-300 ease-out'
                        />
                    </div >
                    <div className='explore-bottom'>
                        <div className='text-3xl explore-top'>
                            {"Australian Slangs"}
                        </div>
                        <div className='ex-txt'>
                            {"Explore Australian slangs and speak like a true Aussie! And come across an easy way of learning and testing your knowledge."}

                        </div>
                        <button onClick={() => router.push('/AussieSlangPage')} className='mt-3 bg-[#EF7B7B] text-white p-2 rounded-2xl hover:scale-110 duration-500 ease-out'>
                            Learn more
                        </button>
                    </div>

                </div>

                <div className=' items-center  explore-sec' >

                    <div onClick={() => router.push('/learn')} className='explore-img  duration-200 ease-out relative rounded-3xl overflow-hidden' style={{ width: '100%', height: '250px' }}>
                        <Image
                            src="/pics/Aussie Accent.avif" alt="Things to know"
                            layout="fill"
                            objectFit="cover"
                            className='hover:blur-sm transition-transform duration-300 ease-out'
                        />
                    </div >
                    <div className='explore-bottom'>
                        <div className='text-3xl explore-top'>
                            {"Australian Accent Learning"}
                        </div>
                        <div className='ex-txt'>
                            {"Master the Australian accent effortlessly! Explore pronunciation with our Accent Book, refine communication skills, and feel at home in Australian conversations."}
                        </div>
                        <button onClick={() => router.push('/learn')} className='mt-3 bg-[#EF7B7B] text-white p-2 rounded-2xl hover:scale-110 duration-500 ease-out'>
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
                            className='hover:blur-sm transition-transform duration-300 ease-out'
                        />
                    </div >
                    <div className='explore-bottom'>
                        <div className='text-3xl explore-top'>
                            {"Australian Comprehension"}
                        </div>
                        <div className='ex-txt'>
                            {"Unlock Australian way of conversing using our chatbot! Dive into local expressions, boost language skills, and blend seamlessly into the community."}
                        </div>
                        <button onClick={() => router.push('/chatbot')} className='mt-3 bg-[#EF7B7B] text-white p-2 rounded-2xl hover:scale-110 duration-500 ease-out'>
                            Learn more
                        </button>
                    </div>

                </div>


            </div>
            <div className="flex justify-center space-x-12 mx-8 -mt-20">
                <div className="flex-1 rounded-3xl my-16 p-8 bg-[#EF7B7B] text-white text-3xl shadow-xl shadow-[#EF7B7B]">

                    <Link
                        href="https://www.melbourne.vic.gov.au/about-melbourne/melbourne-profile/multicultural-communities/Pages/multicultural-communities.aspx"
                        target='blank'
                    >
                        <div className="flex flex-col items-center">
                            <span className="block text-center rounded-full px-5 py-2 ">
                                Multicultural communities
                            </span>
                            <Image src="/pics/p-1.png" alt='next' height={500} width={500} className='my-4 hover:scale-105 transition-transform duration-800 ease-out' />
                        </div>
                    </Link>


                </div>

                <div className="flex-1 rounded-3xl my-16 p-8 bg-[#EF7B7B] text-white text-3xl shadow-xl shadow-[#EF7B7B]">

                    <Link
                        href="https://amesnews.com.au/lead-story/melbournes-secret-history-cultural-diversity/"
                        target='blank'
                    >
                        <div className="flex flex-col items-center">
                            <span className="block text-center rounded-full px-5 py-2 ">
                                {"Secret history"}
                            </span>
                            <Image src="/pics/p-2.png" alt='next' height={500} width={500} className='my-4 hover:scale-105 transition-transform duration-800 ease-out' />
                        </div>
                    </Link>


                </div>

                <div className="flex-1 rounded-3xl my-16 p-8 bg-[#EF7B7B] text-white text-3xl shadow-xl shadow-[#EF7B7B]">

                    <Link
                        href="https://www.viccouncils.asn.au/equality-and-diversity/supporting-diversity/cultural-diversity"
                        target='blank'
                    >
                        <div className="flex flex-col items-center">
                            <span className="block text-center rounded-full px-5 py-2 ">
                                Cultural diversity
                            </span>
                            <Image src="/pics/p-3.png" alt='next' height={500} width={500} className='my-4 hover:scale-105 transition-transform duration-800 ease-out' />
                        </div>
                    </Link>

                </div>


            </div>
        </div>
    )
}
