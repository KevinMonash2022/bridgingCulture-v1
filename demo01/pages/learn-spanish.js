import { useRouter } from 'next/router';
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UserPage = () => {
  const router = useRouter();
  const { map } = router.query;

  return (
    <>
    {/* Header */}
    <Header/>

    {/* Feed */}
    <div>
      <h1>User: learn-spanish</h1>
      <p>This is the user page content.</p>
    </div>

    {/* Footer */}
    <Footer/>
    </>
    
  );
};

export default UserPage;
