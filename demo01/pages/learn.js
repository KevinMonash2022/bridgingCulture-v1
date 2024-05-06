import React, { useRef } from 'react';
import FeedLearn from '@/components/FeedLearn';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FeedFlipbook from '@/components/FeedFlipbook';
import Image from 'next/image';

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
            <div className="main-top-banner mb-20">
                <div className='my-5 main-banner-img'>
                    <Image
                        src="/pics/bg-1.png"
                        alt="brighton-beach"
                        width={1600} height={600}
                    />
                </div>
                <div className="flex flex-col main-banner-txt text-white">
                    <div className="mb-40 flex flex-col items-center">
                        <div className="text-5xl mb-2">
                            Following books to learn part of Aussie English.
                        </div>
                        <div className="mt-10 text-4xl">
                            OR
                        </div>
                        <div className="mt-10 text-5xl">
                            Video feature below to learn Aussie English.
                        </div>

                    </div>
                </div>
            </div>

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

            {/* Footer */}
            <Footer />
        </>
    );
}
