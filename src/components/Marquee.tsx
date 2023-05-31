import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export function MyMarquee() {
    return (
        <>
        <h1 className='text-center mb-20 mt-28 text-5xl text-four font-normal md:text-8xl'>
                Collaborations
        </h1>
        <Marquee>
        <div className="mx-14 pt-28"><Image src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685495454/MR%20GLAZIER%20NYC/NYC_Transit_logo.svg_opfskf.png" width='200' height='200' alt='mta logo' /></div>
        <div className="mx-14 p-6"><Image src="https://logo.clearbit.com/lexiti.com/" width='200' height='200' alt='lexiti logo' /><span className="text-4xl">LEXITI Realty</span></div>
        <div className="mx-14 pt-28"><Image src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685543213/ampush_psikpu.jpg" width='200' height='200' alt='ampush logo' /></div>
        <div className='mx-14 pt-28 '><Image src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685489907/MR%20GLAZIER%20NYC/logo_fxz5jr.webp" width='200' height='200' alt='fsresidential' /></div>
        <div className="mx-14 pt-28 "><Image src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685490275/MR%20GLAZIER%20NYC/worldtradecenter_symbol_08-15-2014_izmptc.jpg" width='200' height='200' alt='wtc logo' /></div>
        <div className="mx-14 pt-28 "><Image src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685490818/MR%20GLAZIER%20NYC/Verizon_2015_logo_-vector.svg_buh87e.png" width='200' height='200' alt='verizon logo' /></div>
        <div className="mx-14 pt-28 "><span className="text-4xl font-bold">CERUMIDY REALTY </span><span className="text-xl font-bold">INC.</span></div>
        <div className="mx-14 pt-28"><Image src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685495454/MR%20GLAZIER%20NYC/NYC_Transit_logo.svg_opfskf.png" width='200' height='200' alt='mta logo' /></div>
        <div className="mx-14 p-6"><Image src="https://logo.clearbit.com/lexiti.com/" width='200' height='200' alt='lexiti logo' /><span className="text-4xl">LEXITI Realty</span></div>
        <div className="mx-14 pt-28"><Image src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685543213/ampush_psikpu.jpg" width='200' height='200' alt='ampush logo' /></div>
        <div className='mx-14 pt-28 '><Image src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685489907/MR%20GLAZIER%20NYC/logo_fxz5jr.webp" width='200' height='200' alt='fsresidential' /></div>
        <div className="mx-14 pt-28 "><Image src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685490275/MR%20GLAZIER%20NYC/worldtradecenter_symbol_08-15-2014_izmptc.jpg" width='200' height='200' alt='wtc logo' /></div>
        <div className="mx-14 pt-28 "><Image src="https://res.cloudinary.com/dwpxbyawm/image/upload/v1685490818/MR%20GLAZIER%20NYC/Verizon_2015_logo_-vector.svg_buh87e.png" width='200' height='200' alt='verizon logo' /></div>
        <div className="mx-14 pt-28 "><span className="text-4xl font-bold">CERUMIDY REALTY </span><span className="text-xl font-bold">INC.</span></div>
        </Marquee>
        </>
    )
}