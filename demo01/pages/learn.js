import React, { useRef } from 'react';
import FeedLearn from '@/components/FeedLearn';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FeedFlipbook from '@/components/FeedFlipbook';
import Link from "next/link";


export default function Learn() {
    const bookRef = useRef(null);
    const videoRef = useRef(null);

    const scrollToFlipbook = () => {
        bookRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToFeed = () => {
        videoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Header */}
            <Header />


            {/* welcome */}
            <div className="mt-12 mb-12 flex flex-col items-center text-center">
                {/* test */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Welcome to Our Aussie Page
                    </h1>
                    <p className="mt-12 text-lg leading-8 text-gray-600">
                        {"Where Everything's Easy and Everyone's Welcome!"}
                    </p>
                </div>
            </div>
            {/* feed */}
            {/* Flipbook */}
            <div ref={bookRef} className='text-white'>
                space<br />space<br />space<br />space<br />
            </div>
            <div className="flex justify-end mr-16">
                <button
                    className="bg-red-300 p-2 rounded-3xl text-white hover:scale-125 transition-transform duration-200 ease-out"
                    onClick={scrollToFeed}
                >
                    Try video
                </button>
            </div>
            <div>
                <FeedFlipbook />
            </div>
            {/* Feed */}
            <div ref={videoRef} className='text-white'>
                space<br />space<br />space<br />space<br />
            </div>
            <div className="flex justify-end mr-16">
                <button
                    className="bg-red-300 p-2 rounded-3xl text-white hover:scale-125 transition-transform duration-200 ease-out"
                    onClick={scrollToFlipbook}
                >
                    Try book
                </button>
            </div>
            <div>
                <FeedLearn />
                {/* <YouTubeSearchComponent /> */}
            </div>
            <div className="justify-center text-4xl text-center my-16 flex space-x-8">
                <Link
                    href="/"
                    className="transition-transform duration-300 px-1 text-2xl inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#20f5a7] to-[#f63b64] hover:bg-slate-800 text-white hover:-translate-x-4"
                >
                    <span className="block rounded-full px-5 py-2 ">
                        Back
                    </span>
                </Link>
                <Link
                    href="/"
                    className="transition-transform duration-300 px-1 text-2xl inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#f63b64] to-[#20f5a7] hover:bg-slate-800 text-white hover:translate-x-4"
                >
                    <span className="block rounded-full px-5 py-2">
                        Next
                    </span>
                </Link>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
