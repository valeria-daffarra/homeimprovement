const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');


/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                lato: ['Century Gothic', 'Monserrat', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#ff9900',
                secondary: '#6F273D',
                three: '#B69196',
                four: '#146eb4',
                light: '#E6E9E5',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
