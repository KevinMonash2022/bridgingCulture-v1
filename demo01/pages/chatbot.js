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
        <Link
          href="/"
          className="transition-transform duration-300 px-1 text-2xl inline-block py-1 w-full sm:w-fit rounded-full bg-[#EF7B7B] text-white hover:translate-x-4"
        >
          <div className="flex items-center">
            <span className="block rounded-full px-5 py-2 ">
              Next
            </span>
            <Image src="/pics/right.svg" alt='next' height={50} width={50} className="invert" />
          </div>
        </Link>
      </div>


      {/* Footer */}
      <Footer />
    </>

  );
};

export default UserPage;
