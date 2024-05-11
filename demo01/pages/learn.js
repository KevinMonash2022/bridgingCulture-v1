import React, { useRef } from 'react';
import FeedLearn from '@/components/FeedLearn';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import FeedFlipbook from '@/components/FeedFlipbook';
import Link from "next/link";
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


            {/* welcome */}
            <div className="mt-12 mb-12 flex flex-col items-center text-center">
                {/* test */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Welcome to the Australian Accent Book!
                    </h1>
                    <p className="mt-12 text-lg leading-8 text-gray-600">
                        {"Where Understanding is Easy and Everyone’s Welcome!"}
                    </p>
                </div>
            </div>
            {/* feed */}
            {/* Flipbook */}
            <div ref={bookRef} className='text-white'>
                <br /><br /><br />
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
                <br /><br /><br />
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


            {/* Flow */}
            <div className=" justify-between mx-16 text-4xl text-center my-16 flex -x-8">
                <Link
                    href="/"
                    className="transition-transform duration-300 px-1 text-2xl inline-block py-1 w-full sm:w-fit rounded-full bg-[#EF7B7B] text-white hover:-translate-x-4"
                >
                    <div className="flex items-center">
                        <Image src="/pics/left.svg" alt='back' height={50} width={50} className="invert" />
                        <span className="block rounded-full px-5 py-2 ">
                            Home
                        </span>
                    </div>

                </Link>
                <Link
                    href="/"
                    className="transition-transform duration-300 px-1 text-2xl inline-block py-1 w-full sm:w-fit rounded-full bg-[#EF7B7B] text-white hover:translate-x-4"
                >
                    <div className="flex items-center">
                        <span className="block rounded-full px-5 py-2 ">
                            Australian comprehension
                        </span>
                        <Image src="/pics/right.svg" alt='next' height={50} width={50} className="invert" />
                    </div>
                </Link>
            </div>


            {/* Footer */}
            <Footer />
        </>
    );
}
