import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';

export function SocialsFooter() {
    return (
        <section className="section flex w-full flex-row items-center justify-between bg-primary py-6 px-6 text-xl text-white md:px-10">
            <div className="text-base">© 2023 Home Improvement NY & NJ</div>
            <div className="flex flex-row gap-4">
                <a href="https://www.facebook.com/homeimprovementnynj" target="_blank"><FaFacebook /></a>
                <a href="https://www.yelp.com/biz/home-improvement-ny-and-nj-new-york" target="_blank"><FaYelp /></a>
                <a href="https://www.instagram.com/homeremodelingny_nj/" target="_blank"><FaInstagram /></a>
            </div>
        </section>
    );
}
