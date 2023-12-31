import { NavBar } from '@/components/NavBar';
import { useRef } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import buildings from '../pngegg.png';
import { LogoSvg } from './LogoSvg';
import { motion, Variants, useInView } from 'framer-motion';
import EmblaCarousel from './Embla';


const introHeaderVariants: Variants = {
    hide: {
        opacity: 0,
        x: -100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
        },
    },
};

const introPictureVariants: Variants = {
    hide: {
        opacity: 0,
        x: 100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
        },
    },
};


export function Intro() {

    const ref = useRef(null)
    const isInView = useInView(ref)
    
    return (
        <div className="flex h-[36rem] w-full flex-col items-center justify-center overflow-x-clip bg-four text-light lg:h-[90vh] font-lato">
            <NavBar />
            <main className="relative flex w-full grow items-start justify-center sm:px-4 sm:items-center sm:justify-start xl:px-12">
                <motion.header
                    className={clsx(
                        'z-10 flex flex-col md:gap-4 md:-mt-36',

                    )}
                    initial="hide"
                    whileInView="show"
                    exit="hide"
                    variants={introHeaderVariants}>
                    <div className="w-full xl:w-[450px] 2xl:w-[600px]">
                        <div className="w-full " dangerouslySetInnerHTML={{__html: LogoSvg}}></div>
                    </div>
                    <p className={clsx('text-3xl text-center font-light hidden md:block font-lato', )}>
                        Enhance your view
                    </p>
                </motion.header>
                <div className="w-full sm:w-3/5 sm:-bottom-4 xl:-bottom-8 xl:w-3/5 2xl:-bottom-12">
                    <EmblaCarousel />
                </div>
            </main>
        </div>
    );
}
