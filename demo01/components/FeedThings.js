import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from "next/link";

export default function FeedThings() {
    const router = useRouter();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const [sideContent, setSideContent] = useState('');

    const defaultContent = () => (
        <div className=" w-full md:w-2/3 flex flex-col items-center ">

            <div className='flex items-center'>
                <div className='relative rounded-lg overflow-hidden' style={{ width: '800px', height: '450px' }}>
                    <Image
                        src='/pics/explore.jpg'
                        alt='Things to know'
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>

        </div>

    );

    const ptvContent = () => (
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }),
        <div className="ptv-sec-right flex flex-col items-center md:w-2/3">
            {/* Title */}
            <div className="ptv-top-sec flex flex-col ml-10 mr-10 items-center rounded-lg bg-red-300 p-3 text-3xl text-white">
                <div className="ptv-top-heading">

                    <span>
                        Move Smoothly, Travel Smartly — Your Journey Starts with PTV.
                    </span>
                </div>

            </div>

            {/* Content */}
            <div className='ptv-right-bottom-sec'>
                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Myki Card
                    </div>
                    <div className="flex rounded-lg bg-[#FFE7DF] ">
                        {"Purchase a Myki card at any train station, 7-Eleven store, or from machines at major tram stops. Load funds onto the card to travel on trams, trains, and buses."}
                    </div>

                </div>

                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Free Tram Zone
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        {"In Melbourne’s CBD, trams are free to use within the designated zone, perfect for short trips around the city center without needing to tap your Myki"}
                    </div>

                </div>

                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Apps for Ease
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        {"Use the PTV app or Google Maps to find the best routes and schedules for your journey."}
                    </div>

                </div>
            </div>

        </div>
    );

    const banksContent = () => (
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }),
        <div className="ptv-sec-right flex flex-col items-center md:w-2/3">
            {/* Title */}
            <div className="ptv-top-sec flex flex-col ml-10 mr-10 items-center rounded-lg bg-red-300 p-3 text-3xl text-white">
                <div className="ptv-top-heading">
                    <span>
                        Banking Made Easy — Start Your Financial Journey in Victoria with Confidence.
                    </span>
                </div>


            </div>

            {/* Content */}
            <div className='ptv-right-bottom-sec'>
                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Common Banks
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        {"Commonwealth Bank, ANZ, Westpac, and NAB are popular choices with extensive networks of branches and ATMs. They offer services like opening accounts before you arrive in Australia."}
                    </div>

                </div>

                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Setting Up Your Account
                    </div>
                    <div className="flex rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"You can typically open a bank account within 12 months of arriving if you have your passport and visa. Some banks allow you to start the process online before moving."}
                        </p>
                    </div>

                </div>

                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        No Fee Accounts
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        {"Look for accounts with low or no monthly fees, which can be beneficial while you settle."}
                    </div>

                </div>



            </div>
        </div>
    );

    const teleContent = () => (
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }),
        <div className="ptv-sec-right flex flex-col items-center md:w-2/3">
            {/* Title */}
            <div className="ptv-top-sec flex flex-col ml-10 mr-10 items-center rounded-lg bg-red-300 p-3 text-3xl text-white">
                <div className="ptv-top-heading">
                    <span>
                        Connect Instantly, Communicate Seamlessly — Your Link to the World.
                    </span>
                </div>


            </div>

            {/* Content */}
            <div className='ptv-right-bottom-sec'>
                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Connect with Ease Providers
                    </div>
                    <div className="flex rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Telstra, Optus, and Vodafone offer comprehensive mobile and internet services. They provide prepaid and postpaid plans, depending on your needs."}
                        </p>
                    </div>

                </div>

                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Buying a SIM
                    </div>
                    <div className="flex ptv-bullet-point rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"You can buy a SIM card at the airport, supermarkets, or directly from the provider's store. Activation is straightforward, usually requiring only your passport as ID."}

                        </p>
                    </div>

                </div>
                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Internet at Home
                    </div>
                    <div className="flex ptv-bullet-point rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"If you need a home internet connection, compare plans from the same mobile providers plus others like iiNet or TPG for the best offers based on your location and usage."}

                        </p>
                    </div>

                </div>
            </div>

        </div>
    );

    const healthContent = () => (
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }),



        <div className="ptv-sec-right flex flex-col items-center md:w-2/3">
            {/* Title */}
            <div className="ptv-top-sec flex flex-col ml-10 mr-10 items-center rounded-lg bg-red-300 p-3 text-3xl text-white">
                <div className="ptv-top-heading">
                    <span>
                        Healthcare Access for All — Secure, Supportive, and Accessible

                    </span>
                </div>

            </div>





            {/* Content */}
            <div className='ptv-right-bottom-sec'>
                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Medicare
                    </div>
                    <div className="flex rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Determine your eligibility for Medicare, which provides access to healthcare services at reduced or no cost. Visit a Medicare office with your passport and visa to register."}
                        </p>
                    </div>

                </div>



                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Local Clinics and Hospitals
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Find clinics and hospitals near your residence for easy access. Websites like HealthDirect Australia can help you locate health services and book appointments."}
                        </p>
                    </div>

                </div>


                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Emergency and Non-Emergency
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"For emergencies, dial 000. For non-emergent health advice, call Nurse on Call (1300 60 60 24) for 24/7 assistance."}
                        </p>
                    </div>

                </div>

            </div>

        </div>


    );

    const supermarketContent = () => (
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }),


        <div className="ptv-sec-right flex flex-col items-center md:w-2/3">
            {/* Title */}
            <div className="ptv-top-sec flex flex-col ml-10 mr-10 items-center rounded-lg bg-red-300 p-3 text-3xl text-white">
                <div className="ptv-top-heading">
                    <span>
                        Shop Smart, Live Fresh — Everything You Need, All in One Place.
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className='ptv-right-bottom-sec'>
                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Major Supermarkets
                    </div>
                    <div className="flex rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Woolworths, Coles, and Aldi are the primary supermarkets offering a wide range of products. They often run weekly specials and have loyalty programs that can offer savings."}
                        </p>
                    </div>

                </div>


                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Local Markets and Shops
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"For fresh produce and local products, visit farmers' markets or specialty stores. Melbourne is known for its vibrant market scene, like Queen Victoria Market."}
                        </p>
                    </div>

                </div>


                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Convenience
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"For added convenience, consider using online grocery delivery services offered by major supermarkets to save time."}
                        </p>
                    </div>

                </div>



            </div>
        </div>

    );

    const switchContent = () => {
        switch (sideContent) {
            case 'Ptv':
                return (
                    ptvContent()

                );
            case 'Banks':
                return (
                    banksContent()
                );
            case 'Tele':
                return (
                    teleContent()
                );
            case 'Healthcare':
                return (
                    healthContent()
                );
            case 'Supermarket':
                return (
                    supermarketContent()
                );

            default:
                return (
                    defaultContent()
                )
        }
    };

    return (
        <div className='mx-auto my-4 p-4 flex-grow'>
            <div className="mb-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        New to the land down under?
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-#CA622D]">
                        {"Grab these top tips to thrive in Aussie style!"}
                    </p>

                </div>
            </div>

            <button
                onClick={scrollToTop}
                className="fixed bottom-20 right-10 bg-[#EF7B7B] text-white p-3 z-50 rounded-full hover:bg-[#c66868] transition duration-300 ease-in-out"
            >
                Top
            </button>

            <div className="flex flex-col md:flex-row ptv-main-section ">
                {/* left */}
                <div className="ptv-left-sec sticky top-40 w-full md:w-1/3 overflow-auto p-8 bg-[#edf2ec] rounded-lg text-lg my-5 ml-10">
                    <div className='flex items-center justify-center '>

                        <div className=' ptv-explore text-2xl'>
                            Explore
                        </div>

                    </div>

                    <div onClick={() => setSideContent('Ptv')} className='flex justify-between bg-[#FFE7DF] items-center mt-3 rounded-lg p-3 hover:scale-110 transition-transform duration-200 ease-out'>
                        <div className='ml-3 text-[#CA622D]'>
                            Ptv
                        </div>
                        <div className="relative h-4 w-4 mr-3">
                            <Image src='/pics/ArrowRight.svg' alt='ArrowRight' layout="fill" />
                        </div>
                    </div>
                    <div onClick={() => setSideContent('Banks')} className='flex justify-between bg-[#FFE7DF] items-center mt-3 rounded-lg p-3 hover:scale-110 transition-transform duration-200 ease-out'>
                        <div className='ml-3 text-[#CA622D]'>
                            Banks
                        </div>
                        <div className="relative h-4 w-4 mr-3">
                            <Image src='/pics/ArrowRight.svg' alt='ArrowRight' layout="fill" />
                        </div>
                    </div>
                    <div onClick={() => setSideContent('Tele')} className='flex justify-between bg-[#FFE7DF] items-center mt-3 rounded-lg p-3 hover:scale-110 transition-transform duration-200 ease-out'>
                        <div className='ml-3 text-[#CA622D]'>
                            Telecommunication
                        </div>
                        <div className="relative h-4 w-4 mr-3">
                            <Image src='/pics/ArrowRight.svg' alt='ArrowRight' layout="fill" />
                        </div>
                    </div>
                    <div onClick={() => setSideContent('Healthcare')} className='flex justify-between bg-[#FFE7DF] items-center mt-3 rounded-lg p-3 hover:scale-110 transition-transform duration-200 ease-out'>
                        <div className='ml-3 text-[#CA622D]'>
                            Healthcare
                        </div>
                        <div className="relative h-4 w-4 mr-3">
                            <Image src='/pics/ArrowRight.svg' alt='ArrowRight' layout="fill" />
                        </div>
                    </div>
                    <div onClick={() => setSideContent('Supermarket')} className='flex justify-between bg-[#FFE7DF] items-center mt-3 rounded-lg p-3 hover:scale-110 transition-transform duration-200 ease-out'>
                        <div className='ml-3 text-[#CA622D]'>
                            Supermarket
                        </div>
                        <div className="relative h-4 w-4 mr-3">
                            <Image src='/pics/ArrowRight.svg' alt='ArrowRight' layout="fill" />
                        </div>
                    </div>
                </div>

                {/* right */}

                {sideContent ? switchContent() : defaultContent()}

            </div>

        </div>
    );
}
