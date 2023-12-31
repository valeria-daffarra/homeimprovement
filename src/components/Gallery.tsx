import clsx from 'clsx';
import Link from 'next/link';
import { ImageGallery } from '@/components/ImageGallery';
import {GiWindow, GiDoor, GiCrackedGlass, GiShower, GiWoodFrame, GiStoneWall, GiCalendar, GiKitchenTap, GiWoodBeam} from 'react-icons/gi';
import { MdArchitecture } from "react-icons/md";

export function Gallery() {
    return (
        <div id='service'
            className={clsx(
                'mt-28 flex min-h-screen w-full flex-col items-center justify-center gap-16 px-4 text-primary md:px-12 font-lato',
                
            )}>
            <span className="text-2xl md:text-4xl">ALL FOR YOUR HOME</span>
            <h1
                className={clsx(
                    'text-center text-5xl text-four font-normal md:text-8xl'
                )}>
                Construction, Repair & Restoration  
            </h1>
            <div  className="flex flex-col justify-center gap-12 text-3xl md:flex-row md:flex-wrap">
                <div className="flex md:basis-1/4 justify-start md:items-center md:justify-center gap-5">
                    <GiWindow className="text-6xl " />
                    <p className="m-auto text-four">Windows</p>
                </div>
                <div className="flex md:basis-1/4 justify-start md:items-center md:justify-center gap-5">
                <GiDoor className="text-6xl" />
                  <p className="m-auto text-four">Doors </p> 
                </div>
                <div className="flex md:basis-1/4 justify-start md:justify-center gap-5">
                    <GiCrackedGlass className="text-6xl" />
                    <p className="m-auto text-four">Glass</p>
                </div>
                <div className="flex md:basis-1/4 justify-start md:items-center md:justify-center gap-5">
                <GiShower className="text-6xl" />
                  <p className="m-auto text-four">Shower Doors </p> 
                </div>
                <div className="flex md:basis-1/4 justify-start md:items-center md:justify-center gap-5">
                    <GiWoodFrame className="text-6xl" />
                    <p className="m-auto text-four">Restoration</p>
                </div>
                <div className="flex md:basis-1/4 justify-start md:items-center md:justify-center gap-5">
                <GiStoneWall className="text-6xl" />
                   <p className="m-auto text-four">Carpentry </p>
                </div>
                <div className="flex md:basis-1/4 justify-start md:items-center md:justify-center gap-5">
                <MdArchitecture className="text-6xl" />
                   <p className="m-auto text-four">Design</p>
                </div>
                <div className="flex md:basis-1/4 justify-start md:items-center md:justify-center gap-5">
                <GiKitchenTap className="text-6xl" />
                   <p className="m-auto text-four">Plumbing</p>
                </div>    
                <div className="flex md:basis-1/4 justify-start md:items-center md:justify-center gap-5">
                <GiWoodBeam className="text-6xl" />
                   <p className="m-auto text-four">Flooring and Tiling</p>
                </div>    
            </div>
            <button className="flex flex-row gap-12 rounded-full bg-four hover:bg-primary active:bg-secondary px-8 py-4 text-2xl text-white">
                <Link href='/booking' className='flex gap-3 justify-center items-center content-center'><GiCalendar />Book your Appointment</Link>
            </button>
            <span className="text-2xl -mt-10 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary before:shadow-lg relative inline-block">
                <span className="relative text-white">It&apos;s free!</span>
            </span>
            <ImageGallery />
        </div>
    );
}
