import FeedLLM from '@/components/FeedLLM'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function LLM() {
    return (
        <>
            {/* header */}
            <Header />

            {/* feed */}
            <FeedLLM />

            {/* footer */}
            <Footer />

        </>
    )
}
