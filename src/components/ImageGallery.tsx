import { motion, useAnimationControls, Variants } from 'framer-motion';
import Link from 'next/link';
import windowinstallation from 'images/marvin-windows.jpg'
import showerdoor from 'images/frameless-showerdoor.jpg';
import skylight from 'images/image-skylight.jpeg';
import door from 'images/porch-door.jpg';
import Image, { ImageProps } from 'next/image';
import { HiCursorClick } from "react-icons/hi"

export function ImageGallery() {
    return (
        <>
            <div className="grid w-full max-w-screen-xl grid-cols-2 grid-rows-2 gap-2 p-4 lg:grid-cols-4 lg:grid-rows-1">
                <GalleryImage src={windowinstallation} alt="window installation" />
                <GalleryImage src={showerdoor} alt="shower door" />
                <GalleryImage src={skylight} alt="skylight" />
                <GalleryImage src={door} alt="door installation" />
            </div>
            <div className='w-full flex gap-4 items-center justify-center sm:justify-end mx-12 mb-12 text-2xl'>
                <button className="hover:bg-secondary flex gap-4 p-4 rounded-full items-center"><Link href='/portfolio'><p>Check our projects</p></Link><HiCursorClick/></button>
            </div>
        </>
    );
}

const imageVariants: Variants = {
    noHover: { scale: 1, transition: { duration: 1, ease: 'easeInOut' } },
    hover: { scale: 1.1, transition: { duration: 1, ease: 'easeInOut' } },
};

function GalleryImage({ src, alt }: ImageProps) {
    return (
        <div className="aspect-[4/3] h-full overflow-clip rounded">
            <motion.div
                variants={imageVariants}
                initial="nohover"
                whileHover="hover"
                className="h-full w-full object-cover">
                <Image src={src} alt={alt} className="h-full object-cover" />
            </motion.div>
        </div>
    );
}
