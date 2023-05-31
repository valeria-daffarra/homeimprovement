import {
    Catamaran
} from 'next/font/google';
export const logo = Catamaran({ subsets: ['latin'] });
export const text = Catamaran({
    subsets: ['latin'],
    weight: ['100','200', '300', '400', '600', '700'],
});
export const title = Catamaran({ subsets: ['latin'], weight: '400' });
