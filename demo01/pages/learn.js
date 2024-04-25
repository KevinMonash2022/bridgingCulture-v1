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

            {/* Feed */}
            <FeedLearn />
            {/* <YouTubeSearchComponent /> */}


            {/* Flipbook */}
            <FeedFlipbook />



            {/* Footer */}
            <Footer />

        </>
    )
}
