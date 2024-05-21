import React from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function FeedAbout() {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-full h-full relative">
                    <Image
                        className="rounded-3xl"
                        src="/pics/290079.jpg"
                        alt="brighton-beach"
                        layout="fill"
                        objectFit="cover"
                    />
                    {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-red-300">
                        <div className="text-6xl rounded-3xl mb-64 p-8 text-white ">
                            Empowering New Beginnings<br /><br />
                            <div className="text-xl">
                                At Bridge Beyond Borders, we believe in smoothing the path for young migrants like you.
                                <br />Founded by former migrants who understand the challenges of settling into a new environment,
                                <br />{"we're here to guide you every step of the way as you build your new life in Victoria."}
                            </div>
                        </div>
                    </div> */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-red-300">
                        <div className="text-6xl rounded-3xl mb-72 p-8 text-white bg-[#62616175] shadow-xl shadow-[#62616175]">
                            Empowering New Beginnings<br /><br />
                            <div className="text-xl font-bold">
                                At Bridge Beyond Borders, we believe in smoothing the path for young migrants like you.
                                <br />Founded by former migrants who understand the challenges of settling into a new environment,
                                <br />{"we're here to guide you every step of the way as you build your new life in Victoria."}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="rounded-3xl my-16 p-8 bg-[#EF7B7B] text-white text-3xl shadow-xl shadow-[#EF7B7B]">
                    Empowering New Beginnings<br /><br />
                    <div className="text-xl">
                        At Bridge Beyond Borders, we believe in smoothing the path for young migrants like you.
                        <br />Founded by former migrants who understand the challenges of settling into a new environment,
                        <br />{"we're here to guide you every step of the way as you build your new life in Victoria."}
                    </div>
                </div> */}

            </div>
            <div className="flex justify-center space-x-8 mx-16">
                <div className="flex-1 rounded-3xl my-16 p-8 bg-[#EF7B7B] text-white text-3xl shadow-xl shadow-[#EF7B7B]">
                    <div className="text-center">
                        Our Mission <br /><br />
                    </div>

                    <div className="text-xl">
                        To provide comprehensive support and resources to young migrants, helping them
                        integrate smoothly and successfully into their new community.
                    </div>
                </div>
                <div className="flex-1 rounded-3xl my-16 p-8 bg-[#EF7B7B] text-white text-3xl shadow-xl shadow-[#EF7B7B]">
                    <div className="text-center">
                        Our Vision <br /><br />
                    </div>

                    <div className="text-xl">
                        A world where every migrant is empowered to thrive in their new home from the moment
                        they arrive.
                    </div>
                </div>
                <div className="flex-1 rounded-3xl my-16 p-8 bg-[#EF7B7B] text-white text-3xl shadow-xl shadow-[#EF7B7B]">
                    <div className="text-center">
                        Our Values <br /><br />
                    </div>

                    <div className="text-xl">
                        Community: Building a supportive and inclusive environment.
                        Empowerment: Equipping you with the tools and knowledge you need.
                        Integration: Helping you feel at home in your new surroundings.
                    </div>
                </div>


            </div>
            {/* <div className="flex space-x-20 items-center justify-center">
                <div className=" rounded-3xl my-16 p-8 bg-[#EF7B7B] text-white text-3xl shadow-xl shadow-[#EF7B7B]">
                    Potential Sponsors:
                    <br /><br />Culture infusion
                </div>
                <Image src="/pics/Culture infusion.jpeg" alt='Culture infusion' height={150} width={150}  />

            </div> */}


        </div>

    );
}
