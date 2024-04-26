import FeedLearn from '@/components/FeedLearn'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import YouTubeSearchComponent from '@/components/YouTubeSearchComponent'
import React from 'react'
import FeedFlipbook from '@/components/FeedFlipbook';
import Image from 'next/image';


export default function learn() {
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



            {/* Flipbook */}
            <FeedFlipbook />

            <div className="mb-20 mt-20 flex flex-col items-center text-2xl bg-[#ef7b7b] text-white p-2 rounded-2xl">
                Simply search for a word and there will be a video containing the Australian accent of the word to help you learn the pronunciation of the word, complete with subtitles
            </div>

            {/* Feed */}
            <FeedLearn />
            {/* <YouTubeSearchComponent /> */}


            {/* Footer */}
            <Footer />

        </>
    )
}
