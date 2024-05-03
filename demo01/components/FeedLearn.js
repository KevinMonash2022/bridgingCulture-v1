import React from 'react'
import TestLearn from '@/components/TestLearn'

export default function FeedLearn() {
    return (
        <>


            <div className="mt-20 flex-grow min-h-screen">

                <div className="text-center mb-20 mt-20 flex flex-col items-center text-2xl bg-[#ef7b7b] text-white p-2 rounded-2xl">
                    Replace the word Aussie to what you want to learn.
                </div>
                <TestLearn />

            </div>

        </>
    )
}
