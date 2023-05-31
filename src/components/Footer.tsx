import { Logo } from '@/components/Logo';
import clsx from 'clsx';
import { text } from '../fonts';
import { LogoSvgBlack } from './LogoSvgBlack';
import {
    FaFacebook,
    FaInstagram,
    FaLeaf,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';

export function Footer() {
    return (
        <section
            className={clsx(
                'section flex w-full flex-col items-start justify-center gap-10 p-10 py-14 md:py-48 text-four md:flex-row  md:justify-around',
                text.className
            )}>
            <div className="w-[80px] xl:w-[100px] ">
                <div dangerouslySetInnerHTML={{__html: LogoSvgBlack}}></div>
            </div>
            <div className=''>
                <div className="text-xl font-bold">Contact Us</div>
                <div>
                    <div>(332) 248 8148</div>
                    <div>sales@mrglaziernyc.com</div>
                </div>
            </div>
            <div>
                <div className="text-xl font-bold">Address</div>
                <div>
                    <div>3099 Brighton 6th St</div>
                    <div>Brooklyn NY 11235</div>
                </div>
            </div>
            <div>
                <div className="text-xl font-bold">Office Hours</div>
                <div>
                    <div>Mon - Fri: 8am - 8pm</div>
                    <div>Sat - Sun: 9am - 5pm</div>
                    <div className='font-bold'>Emergengy Service 24/7</div>
                </div>
            </div>
        </section>
    );
}

