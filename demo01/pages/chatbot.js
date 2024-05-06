import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedLLM from "@/components/FeedLLM";

const UserPage = () => {

  return (
    <>
    {/* Header */}
    <Header/>

    {/* Feed */}
    <FeedLLM/>

    {/* Footer */}
    <Footer/>
    </>
    
  );
};

export default UserPage;
