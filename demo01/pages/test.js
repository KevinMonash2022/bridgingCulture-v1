import { useRouter } from 'next/router';
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedTest from '@/components/FeedTest';

const UserPage = () => {
  const router = useRouter();
  const { map } = router.query;

  return (
    <>
    {/* Header */}
    <Header/>

    {/* Feed */}
    
    <FeedTest/>

    {/* Footer */}
    <Footer/>
    </>
    
  );
};

export default UserPage;
