import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedHome from '@/components/FeedHome';

const UserPage = () => {
  const router = useRouter();

  useEffect(() => {
    
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      router.push('/login'); 
    }
  }, [router]);

  return (
    <>
      <Header />
      <FeedHome />
      <Footer />
    </>
  );
};

export default UserPage;
