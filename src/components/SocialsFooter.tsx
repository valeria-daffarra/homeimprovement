import { FaFacebook, FaInstagram, FaYelp, FaGoogle } from 'react-icons/fa';

export function SocialsFooter() {
    return (
        <section className="section flex w-full flex-row items-center justify-between bg-primary py-6 px-6 text-xl text-white md:px-10">
            <div className="text-base">© 2023 Mr Glazier NYC</div>
            <div className="flex flex-row gap-4">
                <a href="https://www.facebook.com/mrglaziernyc" target="_blank"><FaFacebook /></a>
                <a href="https://www.yelp.com/biz/mr-glazier-nyc-new-york-4" target="_blank"><FaYelp /></a>
                <a href="https://goo.gl/maps/4g2UudAhrLKsYTnLA?coh=178572&entry=tt" target="_blank"><FaGoogle /></a>
                <a href="https://www.instagram.com/mrglaziernyc/" target="_blank"><FaInstagram /></a>
            </div>
        </section>
    );
}
