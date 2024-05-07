import React from 'react';
import Image from 'next/image';

export default function FeedAbout() {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-full h-full relative">
                    <Image
                        className="blur-lg rounded-3xl"
                        src="/pics/290079.jpg"
                        alt="brighton-beach"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-red-300">
                        <div className="text-9xl mb-64 text-transparent bg-clip-text bg-gradient-to-r from-[#49efb2] to-[#ea3e88] shadow-xl shadow-[#49efb2]/50">
                            About us
                        </div>
                    </div>
                </div>
                <div className="rounded-3xl my-16 p-8 bg-red-200 text-white text-3xl shadow-xl shadow-red-200">
                    Empowering New Beginnings<br /><br />
                    <div className="text-xl">
                        At Bridge Beyond Borders, we believe in smoothing the path for young migrants like you.
                        <br />Founded by former migrants who understand the challenges of settling into a new environment,
                        <br />we're here to guide you every step of the way as you build your new life in Victoria.
                    </div>
                </div>

            </div>
            <div className="flex flex-col items-center justify-center">
                <div className=" rounded-3xl my-16 p-8 bg-red-200 text-white text-3xl shadow-xl shadow-red-200">
                    Our Mission: <br /><br />
                    <div className="text-xl">
                        To provide comprehensive support and resources to young migrants, helping them
                        <br />ntegrate smoothly and successfully into their new community.
                    </div>
                </div>
                <div className=" rounded-3xl my-16 p-8 bg-red-200 text-white text-3xl shadow-xl shadow-red-200">
                    Our Vision: <br /><br />
                    <div className="text-xl">
                        A world where every migrant is empowered to thrive in their new home from the moment
                        <br />they arrive.
                    </div>
                </div>
                <div className=" rounded-3xl my-16 p-8 bg-red-200 text-white text-3xl shadow-xl shadow-red-200">
                    Our Values: <br /><br />
                    <div className="text-xl">
                        Community: Building a supportive and inclusive environment.
                        <br />Empowerment: Equipping you with the tools and knowledge you need.
                        <br />Integration: Helping you feel at home in your new surroundings.
                    </div>
                </div>
                <div className="flex space-x-20 items-center">
                    <div className=" rounded-3xl my-16 p-8 bg-red-200 text-white text-3xl shadow-xl shadow-red-200">
                        Potential Sponsors:
                        <br /><br />Culture infusion
                    </div>
                    <Image src="/pics/Culture infusion.jpeg" alt='Culture infusion' height={150} width={150} className='rounded-full' />

                </div>

            </div>
        </div>

    );
}
