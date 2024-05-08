import { useRouter } from 'next/router';
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedThings from '@/components/FeedThings';
import Link from "next/link";

const UserPage = () => {
  const router = useRouter();
  const { map } = router.query;

  return (
    <>
      {/* Header */}
      <Header />

      {/* Feed */}
      <FeedThings />
      <div className="justify-center text-4xl text-center my-16 flex space-x-8">
        <Link
          href="/"
          className="transition-transform duration-300 px-1 text-2xl inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#20f5a7] to-[#f63b64] hover:bg-slate-800 text-white hover:-translate-x-4"
        >
          <span className="block rounded-full px-5 py-2 ">
            Back
          </span>
        </Link>
        <Link
          href="/"
          className="transition-transform duration-300 px-1 text-2xl inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#f63b64] to-[#20f5a7] hover:bg-slate-800 text-white hover:translate-x-4"
        >
          <span className="block rounded-full px-5 py-2">
            Next
          </span>
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </>

  );
};

export default UserPage;
