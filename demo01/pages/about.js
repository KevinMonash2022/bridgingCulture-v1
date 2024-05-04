import { useRouter } from 'next/router';
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedAbout from '@/components/FeedAbout';

const UserPage = () => {
  const router = useRouter();
  const { map } = router.query;

  return (
    <>
      {/* Header */}
      <Header />

      {/* Feed */}
      <FeedAbout />

      {/* Footer */}
      <Footer />
    </>

  );
};

export default UserPage;
