import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Feed from "@/components/FeedMap";
import Footer from "@/components/Footer";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Map</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />


      {/* Flow */}
      <div className=" justify-between mx-16 text-4xl text-center my-16 flex space-x-8">
        <Link
          href="/"
          className="transition-transform duration-300 px-1 text-2xl inline-block py-1 w-full sm:w-fit rounded-full bg-[#EF7B7B] text-white hover:-translate-x-4"
        >
          <div className="flex items-center">
            <Image src="/pics/left.svg" alt='back' height={50} width={50} className="invert" />
            <span className="block rounded-full px-5 py-2 ">
              Home
            </span>
          </div>

        </Link>
        <Link
          href="/textdata"
          className="transition-transform duration-300 px-1 text-2xl inline-block py-1 w-full sm:w-fit rounded-full bg-[#EF7B7B] text-white hover:translate-x-4"
        >
          <div className="flex items-center">
            <span className="block rounded-full px-5 py-2 ">
              Australian Slangs
            </span>
            <Image src="/pics/right.svg" alt='next' height={50} width={50} className="invert" />
          </div>
        </Link>
      </div>


      {/* Footer */}
      <Footer />
    </>
  );
}
