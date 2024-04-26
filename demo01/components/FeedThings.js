import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Test from '@/components/TestLearn';

export default function FeedThings() {
    const router = useRouter();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const [sideContent, setSideContent] = useState('');

    const resetSideContent = () => {
        setSideContent('');
    };

    const defaultContent = () => (
        <div className=" w-full md:w-2/3 p-4 flex flex-col items-center ">
            <div className='text-lg flex flex-col items-center'>
                <div className='text-3xl font-bold'>
                    New to the land down under?
                </div>
                <div className='text-[#CA622D] mt-4'>
                    {"Grab these top tips to thrive in Aussie style!"}
                </div>
            </div>
            <div className='flex mt-4 items-center'>
                <div className='relative rounded-lg overflow-hidden' style={{ width: '480px', height: '300px' }}>
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
                        Welcome to Victoria:<br />
                    </span>
                    <span>
                        Your Guide to Seamless Travel with PTV
                    </span>
                </div>

            </div>

            {/* Content */}
            <div className='ptv-right-bottom-sec'>
                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Plan Your Journey Now
                    </div>
                    <div className="flex rounded-lg bg-[#FFE7DF] ">
                        {"Start your adventure in Victoria by planning your journey with PTV's easy-to-use journey planner. Discover the most convenient routes and timings to get you where you need to be."}
                    </div>

                </div>

                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Register Your myki
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        {"Ensure seamless travel across Victoria's public transport network by registering your myki card online. Enjoy benefits like balance protection and auto top-up, making every trip hassle-free."}
                    </div>

                </div>

                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Stay Informed
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        {"Sign up for real-time disruption alerts and stay ahead of any changes to your travel plans. Knowledge is power, especially when it comes to navigating new surroundings."}
                    </div>

                </div>

                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Get the PTV App
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        {"Don't miss out on the ultimate travel companion. Download the PTV app today for all your journey planning needs and real-time updates."}
                    </div>

                </div>

                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Features at Your Fingertip
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        {"Journey Planner: Navigate between any two locations in Victoria with ease."}
                        <br />
                        {"Real-Time Information: Stay updated with upcoming departures and service disruptions."}
                        <br />
                        {"Myki Management: Register, top up, and manage your myki online for a smoother travel experience."}
                    </div>

                </div>

                <div className="flex">
                    <div className="ptv-head felx rounded-md bg-red-300  items-center text-white">
                        Your Journey, Our Commitment
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        {"We measure success by your satisfaction. Seeing new migrants like you embrace and navigate our public transport system with confidence is our goal. Join the community of happy commuters today!"}
                    </div>

                </div>

                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Further Information
                    </div>
                    <div className="flex rounded-lg bg-[#FFE7DF] ">
                        <p>{"For more details on making the most of Victoria's public transport as a new migrant, please visit the"} <a href="https://www.ptv.vic.gov.au" target="_blank" rel="noopener noreferrer">official Public Transport Victoria website</a>.</p>
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
                        Welcome to Your Financial Journey in Australia
                    </span>
                </div>


            </div>

            {/* Content */}
            <div className='ptv-right-bottom-sec'>
                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Open Your Account Before Arrival
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        {"Start your Australian journey on the right foot by setting up your bank account before you land. With banks like CommBank and Westpac, you can arrange your banking up to 12 months in advance of your arrival"}
                    </div>

                </div>

                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Seamless Banking with Leading Institutions
                    </div>
                    <div className="flex rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Choose Australia's largest and most trusted banks, like CommBank and Westpac, for extensive branch and ATM networks, secure banking on your mobile, and personal assistance in many languages."} <a href="https://www.finder.com.au">(finder.com.au)</a>
                        </p>
                    </div>

                </div>

                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Exclusive Offers for New Migrants
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        {"Enjoy exclusive cashback offers and discounts on everyday purchases, mobile plans, and utilities with CommBank's special deals for its customers."}
                    </div>

                </div>

                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Features at Your Fingertips
                    </div>
                    <div className="flex rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Cardless Cash and Digital Wallets: Enjoy the convenience of cardless cash withdrawals and various digital wallet options like Apple Pay and Google Pay for seamless transactions.Foreign Exchange Services: Easily manage foreign currency transactions and take advantage of competitive exchange rates for international transfers. "}<a href="https://www.finder.com.au">(finder.com.au)</a>Cyber Security Support: Learn how to protect yourself online with free cyber security webinars offered by NAB, giving you the tools to stay safe in the digital world.
                        </p>
                    </div>

                </div>

                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Your Banking, Your Way
                    </div>
                    <div className="flex rounded-lg bg-[#FFE7DF] ">
                        {"Transitioning to life in Australia is made easier with supportive banking solutions designed for new migrants. Whether you're studying, working, or making Australia your new home, these banking services are designed to ensure a smooth and secure start to your new chapter."}
                        <br />
                        {"For more detailed information and to choose the bank that best fits your needs, visit the official websites of CommBank, Westpac, NAB, and other Australian banks."}
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
                        Welcome to Your Telecom Guide in Australian
                        <br />
                        Making Connections Easier Down Under
                    </span>
                </div>


            </div>

            {/* Content */}
            <div className='ptv-right-bottom-sec'>
                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Explore Your Mobile Plan Options in Australia
                    </div>
                    <div className="flex rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Australia's telecommunications landscape offers a plethora of options to keep you connected, whether you're calling across the street or across the globe. From major network providers like Optus, Telstra, and Vodafone to budget-friendly options like Moose Mobile, Belong, and TPG, there’s a plan out there to fit every need and budget."} <a href="https://www.reviews.org">Reviews.org</a>, <a href="https://www.mozo.com.au">MozoCOMPARE</a>, <a href="https://www.whistleout.com.au">WhistleOut</a>
                        </p>
                    </div>

                </div>

                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Choose the Right Plan for You
                    </div>
                    <div className="flex ptv-bullet-point rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Choose Australia's largest and most trusted banks, like CommBank and Westpac, for extensive branch and ATM networks, secure banking on your mobile, and personal assistance in many languages."} <a href="https://www.finder.com.au">(finder.com.au)</a>
                            <p>
                                {"Budget-Conscious Plans: Moose Mobile offers affordable 5G plans with generous data allowances for those looking to save without sacrificing quality."}
                                <a href="https://www.reviews.org">Reviews.org</a>
                                {"Catch Connect also stands out for budget-conscious users with a variety of prepaid plans offering great value. "}
                                <a href="https://www.whistleout.com.au">WhistleOut</a>
                                {"Family and Data Sharing Plans: Vodafone shines with its data-sharing features, ideal for families looking to manage their combined data usage efficiently. Their 5G plans have been recognized for providing great value. "}
                                <a href="https://www.mozo.com.au">MozoCOMPARE</a>
                                {"High Data Users: Belongs 100GB plan caters to those with a hefty data appetite, offering speeds up to 150Mbps. "}
                                <a href="https://www.whistleout.com.au">WhistleOut</a>
                                {"High Data Users: Belongs 100GB plan caters to those with a hefty data appetite, offering speeds up to 150Mbps."}
                                <a href="https://www.whistleout.com.au">WhistleOut</a>
                                {"No-Frills, Prepaid Options: TPG offers straightforward, no-frills prepaid plans, great for those seeking simplicity and value. "}
                                <a href="https://www.whistleout.com.au">WhistleOut</a>
                            </p>
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
                        Welcome to Victoria: Navigating Healthcare with Confidence
                        <br />
                        Your Guide to Accessing Healthcare Services in Victoria
                    </span>
                </div>

            </div>





            {/* Content */}
            <div className='ptv-right-bottom-sec'>
                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Register with Medicare
                    </div>
                    <div className="flex rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Upon your arrival, ensure you register with Medicare, Australias public healthcare system. Medicare provides access to a range of healthcare services, including doctor visits, hospital treatment, and more, at little or no cost. Visit a Medicare office"}
                        </p>
                    </div>

                </div>



                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Choose a General Practitioner
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Selecting a General Practitioner (GP) is your next step in integrating into the healthcare system. Your GP will be your primary healthcare provider, offering advice, treatment, referrals to specialists, and continuity of care. Many practices require you to book an appointment in advance, so consider finding a GP close to your home or work."}
                        </p>
                    </div>

                </div>


                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Understand the Pharmaceutical Benefits Scheme (PBS)
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"The Pharmaceutical Benefits Scheme (PBS) is a program that subsidizes prescription medications, making them more affordable. Make sure to ask your GP or pharmacist if your prescriptions are covered by the PBS. Always carry your Medicare card with you when visiting a pharmacy."}
                        </p>
                    </div>

                </div>


                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300  items-center text-white">
                        Emergency Services and After-Hours Care
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"In an emergency, dial 000 to access ambulance services, police, or fire brigade. For non-emergency after-hours medical care, the National Home Doctor Service provides home visits that are bulk-billed through Medicare. Many hospitals also have emergency departments for urgent care"}
                        </p>
                    </div>

                </div>



                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Mental Health Support
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Victoria offers numerous resources for mental health support, including counseling services, helplines, and community health services. Beyond Blue, Lifeline, and Headspace are valuable resources for support and advice."}
                        </p>
                    </div>

                </div>


                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Stay Informed About Health Alerts
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Stay up to date with health alerts and information, especially during flu season or in the event of public health concerns. The Department of Health and Human Services (DHHS) website and local news outlets are reliable sources for such updates."}
                        </p>
                    </div>

                </div>



                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Engage with Community Health Services
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Community health services in Victoria offer a range of health, dental, and counseling services, often at reduced rates for low-income earners. These centers are integral to the local healthcare landscape, providing accessible care and support."}
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
                        Welcome to Your Grocery Guide in Australia
                        <br />
                        Explore, Shop, and Enjoy Fresh Local Produce
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className='ptv-right-bottom-sec'>
                <div className="flex">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Discover Your Supermarket Choices
                    </div>
                    <div className="flex rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Australia boasts a diverse range of supermarkets catering to every need and budget. From large chains like Woolworths, Coles, and Aldi, known for their extensive product ranges and competitive pricing, to smaller chains like IGA, which focus on local products and personalized service. Each offers a unique shopping experience, whether you're looking for budget-friendly buys, specialty items, or the convenience of location."}
                        </p>
                    </div>

                </div>


                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Specialty Stores and Markets
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Many supermarkets offer loyalty programs, such as Woolworths' Everyday Rewards and Flybuys at Coles, which can lead to significant savings over time. Additionally, exploring Aldi for its low prices and quality private label products can help manage your budget effectively."}
                        </p>
                    </div>

                </div>


                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Features at Your Fingertips
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Comprehensive Product Ranges: Major chains like Woolworths and Coles offer an extensive selection of food and household items, ensuring you'll find everything you need in one place.Quality and Savings: Aldi is renowned for its high-quality private label products at significantly lower prices, providing excellent value for money.Personalized Service: Smaller chains and local markets pride themselves on offering personalized service, helping you feel welcomed and valued as part of the community."}
                        </p>
                    </div>

                </div>


                <div className="flex ">
                    <div className="felx ptv-head rounded-md bg-red-300 items-center text-white">
                        Your Shopping, Your Choice
                    </div>
                    <div className="flex  rounded-lg bg-[#FFE7DF] ">
                        <p>
                            {"Navigating Australia's supermarket landscape can be a delightful experience, offering everything from convenience and value to quality and community support. Whether you're planning a big family meal, restocking your pantry, or looking for the freshest local produce, Australia's supermarkets and farmers' markets have you covered."}
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
        <div onMouseLeave={resetSideContent} className='container mx-auto my-4 p-4 flex-grow min-h-screen'>

            <button
                onClick={scrollToTop}
                className="fixed bottom-20 right-10 bg-[#EF7B7B] text-white p-3 rounded-full hover:bg-[#c66868] transition duration-300 ease-in-out"
            >
                Top
            </button>

            <div className="flex flex-col md:flex-row ptv-main-section ">
                {/* left */}
                <div className="ptv-left-sec sticky top-40 w-full md:w-1/3 h-1/2  overflow-auto p-8 bg-[#edf2ec] rounded-lg text-lg my-5 ml-10">
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
