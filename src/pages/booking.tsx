import { Intro } from '@/components/Intro';
import { Footer } from '@/components/Footer';
import { SocialsFooter } from '@/components/SocialsFooter';
import { ImHome3 } from 'react-icons/im';
import Link from 'next/link';
import Head from 'next/head';

export default function Booking() {
    return (
        <>
        <Head>
            <title>Mr Glazier NYC - Book Now</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
          <Intro />
          <div className='mt-36 sm:mt-20'>
          <div className="flex justify-center my-12 mx-6"><p className="text-2xl md:text-4xl italic text-center font-bold text-primary">BOOK NOW A <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block">
    <span className="relative text-white">FREE</span>
  </span> ON-SITE ESTIMATE</p></div>
          <div>
            <iframe src='https://online-booking.workiz.com/?ac=564df238e9851135a14cd82d013f6e116356562f6af66ae729b518fed1884e3b' width="100%" height="700px" ></iframe>
          </div>
            <div className="flex justify-center mt-24 mb-12 mx-6">
                <button className="rounded-full justify-center align-baseline bg-four hover:bg-secondary active:bg-secondary px-8 py-4 text-2xl text-white">
                    <Link href='/' className='flex flex-row gap-4 justify-center'><span className='text-3xl'><ImHome3 /></span>Home</Link>
                </button>
            </div>
          </div>  
          <Footer />
          <SocialsFooter />
        </>
    );
};