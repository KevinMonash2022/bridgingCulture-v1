import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedLLM from "@/components/FeedLLM";
import Link from "next/link";
import Image from 'next/image';

const UserPage = () => {

  return (
    <>
      {/* Header */}
      <Header />

      {/* Feed */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Navigate towards success
        </h1>
        <p className="mt-6 mb-4 text-lg leading-8 text-gray-600">
          Let our chatbot be your trusted guide to efficiency and excellence!
        </p>

      </div>
      <FeedLLM />


      {/* Flow */}
      <div className=" justify-between mx-16 text-4xl text-center my-16 flex space-x-8">
        <Link
          href="/"
          className="transition-transform duration-300 px-1 text-2xl inline-block py-1 w-full sm:w-fit rounded-full bg-[#EF7B7B] text-white hover:-translate-x-4"
        >
          <div className="flex items-center">
            <Image src="/pics/left.svg" alt='back' height={50} width={50} className="invert" />
            <span className="block rounded-full px-5 py-2 ">
              Home
            </span>
          </div>

        </Link>

      </div>


      {/* Footer */}
      <Footer />
    </>

  );
};

export default UserPage;
