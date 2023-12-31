import Head from 'next/head';
import clsx from 'clsx';
import { Footer } from '@/components/Footer';
import { SocialsFooter } from '@/components/SocialsFooter';
import { Intro } from '@/components/Intro';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { ContactForm } from '@/components/ContactForm'

export default function Home() {
    return (
        <div
            className={clsx(
                'flex min-h-screen w-full flex-col items-center justify-center font-lato',
                
            )}>
            <Head>
                <title>Home Renovation</title>
                <meta name="description" content="Call us to get a quote on your home renovation and home improvement projects, we are licensed contractors, insured, open 24/7. We do windows, doors, drywall, installation, paint, flooring, plumbing, and much more! Price match and incredible discounts." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Intro />
            <Gallery />
            <Testimonials />
            <Footer />
            <ContactForm />
            <SocialsFooter />
        </div>
    );
}
