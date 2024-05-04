import React from 'react';
import Image from 'next/image';

export default function FeedAbout() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full h-full relative">
                <Image
                    className="blur-lg rounded-3xl"
                    src="/pics/about.jpg"
                    alt="brighton-beach"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-red-300">
                    <div className="text-5xl mb-2">
                        welcome
                    </div>
                    <div className="mt-10 text-4xl">
                        welcome
                    </div>
                    <div className="mt-10 text-5xl">
                        welcome
                    </div>
                </div>
            </div>
            <div className="my-32 text-red-300 text-3xl">
                more content
            </div>
        </div>
    );
}
