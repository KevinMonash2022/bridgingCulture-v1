import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedHome from '@/components/FeedHome';
import Head from 'next/head';

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
      <Head>
        <title>Bridge Beyond Borders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <FeedHome />
      <Footer />
    </>
  );
};

export default UserPage;
