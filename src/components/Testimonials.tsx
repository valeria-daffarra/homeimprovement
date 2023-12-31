import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';
import yelp from '../images/yelp-logo.png';
import { FaStar } from 'react-icons/fa';
import { WithChildrenProps } from '../types';
import { useEffect, useRef, useState } from 'react';
import {
    motion,
    MotionValue,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'framer-motion';


type TestimonialProps = WithChildrenProps & {
    className?: string;
    parallax: MotionValue<number>;
};
function Testimonial({ className, children, parallax }: TestimonialProps) {

    return (
        <motion.div
            className={clsx(
                'text-md flex aspect-[3/4] h-80 flex-col items-center justify-around gap-4 rounded-md bg-white p-6 font-light text-four shadow',
                className
            )}
            style={{ y: parallax }}>
            {children}
        </motion.div>
    );
}

export function Testimonials() {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target,
        offset: ['start end', 'end start'],
    });
    const parallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const reverseParallax = useTransform(parallax, (v) => -v);
    useMotionValueEvent(parallax, 'change', (v) => console.log(v));
    return (
        <div
            className="flex min-h-[150vh] w-full flex-col items-center justify-center gap-12 bg-four px-4 py-24 md:p-24"
            ref={target}>
            <h2
                className={clsx(
                    'text-center text-4xl text-light lg:w-1/2 md:text-7xl',
                    
                )}>
                What Our Happy Clients Say
            </h2>
            <div className="flex grow flex-wrap items-center justify-center gap-24">
                <Testimonial className="mt-12 lg:mb-24 h-[400px]" parallax={parallax}>
                    <div className='text-primary flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    &quot;After promptly responding to my inquiry, they came out the next day [...] and they were able to complete the job the following evening. I am very pleased with the work and it saved me a lot of money[...]. They are very knowledgeable and have great customer service!&quot;
                    <div className='w-full'><p className="font-bold">Lisanne C.</p></div>
                </Testimonial>
                <Testimonial className="md:mt-12" parallax={reverseParallax}>
                    <div className='text-primary flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    &quot;Super nice and friendly. My door took longer to place and on a very cold night and still George and his crew got it done. Totally recommend.&quot;
                    <div className='w-full'><p className="font-bold">Van S.</p></div>
                </Testimonial>
                <Testimonial className="md:mb-12 h-[400px]" parallax={parallax}>
                    <div className='text-primary flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    &quot;Highly recommend! I submitted a quote request through Yelp and they responded the same day and offered a free in person quote. [...] They arrived on time and did a quick and efficient job. Their price was also unbeatable! I would definitely use them again.&quot;
                    <div className='w-full'><p className="font-bold">Mel S.</p></div>
                </Testimonial>
            </div>
            <div className=' w-1/2 mt-20 sm:mt-0 md:w-1/4'>
                <Image src={yelp} alt='yelp 5 star'></Image>
            </div>
        </div>
    );
}

