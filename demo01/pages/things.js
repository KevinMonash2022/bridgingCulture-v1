import { useRouter } from 'next/router';
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedThings from '@/components/FeedThings';

const UserPage = () => {
  const router = useRouter();
  const { map } = router.query;

  return (
    <>
    {/* Header */}
    <Header/>

    {/* Feed */}
    <FeedThings/>

    {/* Footer */}
    <Footer/>
    </>
    
  );
};

export default UserPage;
