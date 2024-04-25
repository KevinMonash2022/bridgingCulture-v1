import { useRouter } from 'next/router';
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";

const UserPage = () => {
  const router = useRouter();

  return (
    <>
    {/* Header */}
    <Header/>

    {/* Feed */}
    <Chat/>

    {/* Footer */}
    <Footer/>
    </>
    
  );
};

export default UserPage;
