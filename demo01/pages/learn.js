import FeedLearn from '@/components/FeedLearn'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import YouTubeSearchComponent from '@/components/YouTubeSearchComponent'
import React from 'react'
import FeedFlipbook from '@/components/FeedFlipbook';


export default function learn() {
    return (
        <>
            {/* Header */}
            <Header />
            <div className="mb-20 mt-20 flex flex-col items-center">
                <div className="text-3xl">
                    You can use the following books to learn part of Aussie English.
                </div>
                <div className="mt-10 text-3xl">
                    OR
                </div>
                <div className="mt-10 text-3xl">
                    Use the video feature below to learn Aussie English.
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
