import { useRouter } from 'next/router';
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedHome from '@/components/FeedHome';
import { getSession } from "next-auth/react";

const UserPage = () => {
  const router = useRouter();
  const { map } = router.query;

  return (
    <>
    {/* Header */}
    <Header/>

    {/* Feed */}
    <FeedHome/>

    {/* Footer */}
    <Footer/>
    </>
    
  );
};

// // // Server-side authentication check
// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });

//   // If no user session exists, redirect to the login page
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login', // Adjust the login route if needed
//         permanent: false,
//       },
//     };
//   }

//   // If the session exists, return the current session
//   return {
//     props: { session },
//   };
// }



export default UserPage;
