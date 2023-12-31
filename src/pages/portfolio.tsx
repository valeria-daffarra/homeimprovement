import { Intro } from '@/components/Intro';
import { Footer } from '@/components/Footer';
import {Carousel0 } from '@/components/Carousel0'
import { Carousel } from '@/components/Carousel'
import { Carousel1 } from '@/components/Carousel1'
import { Carousel2 } from '@/components/Carousel2'
import { Carousel3 } from '@/components/Carousel3'
import { Carousel4 } from '@/components/Carousel4'
import { Carousel5 } from '@/components/Carousel5'
import { SocialsFooter } from '@/components/SocialsFooter';
import { MyMarquee } from '@/components/Marquee'
import { ImHome3 } from 'react-icons/im';
import Link from 'next/link';
import Head from 'next/head';

export default function Booking() {
    return (
        <>
        <Head>
            <title>Home Renovation - Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
          <Intro />
          <MyMarquee />
          <h1 className='text-center mb-20 mt-28 text-5xl text-four font-normal md:text-8xl'>
                Gallery
          </h1>
          <Carousel0 />
          <Carousel />
          <Carousel1 />
          <Carousel2 />
          <Carousel3 />
          <Carousel4 />
          <Carousel5 />
            <div className='mt-36 sm:mt-20'>
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
