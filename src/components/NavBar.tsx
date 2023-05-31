import { FaDog } from 'react-icons/fa';
import { WithChildrenProps } from '../types';
import Menu from './Menu';
import Navigation from './Navigation';
import { useCycle } from 'framer-motion';
import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { GiCalendar } from 'react-icons/gi';

function NavItem({ children }: WithChildrenProps) {
    return (
        <button className="rounded-full px-8 py-1 transition-all hover:bg-primary">
            {children}
        </button>
    );
}

export function NavBar() {
    const [menuOpen, cycleMenuOpen] = useCycle(false, true);
    return (
        <div className=" flex h-24 w-full items-center justify-between pl-6 pr-12">
            <Logo />
            <nav className="hidden lg:gap-4 text-normal md:flex lg:text-xl xl:gap-24">
                <NavItem><Link href="/">Home</Link></NavItem>
                <NavItem><Link href="#service" scroll={false}>Services</Link></NavItem>
                <NavItem><Link href="/portfolio">Portfolio</Link></NavItem>
                <NavItem><Link href="#contact" scroll={false}>Contact</Link></NavItem>
                <button className="flex flex-row rounded-full bg-primary hover:bg-secondary active:bg-secondary px-2 py-2 text-md lg:text-xl font-md text-white">
                <Link href='/booking' className='flex justify-center items-center content-center gap-2'><GiCalendar />Book Now</Link>
            </button>
            </nav>
            <div className="flex right-0 md:hidden">
                <Menu menuOpen={menuOpen} cycleMenuOpen={cycleMenuOpen} />
                <Navigation menuOpen={menuOpen} />
            </div>

        </div>
    );
}
