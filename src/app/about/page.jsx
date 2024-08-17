import Link from 'next/link';
import React from 'react';
import {Playfair_Display} from "next/font/google"

const playfair = Playfair_Display({weight: ["400"], subsets: ["latin"]})

export const metadata = {
    title: "About",
    description: "About Page",
};
const AboutPage = () => {
    return (
        <div>
            <h1 className={`${playfair.className} text-red-400 text-center text-4xl`}>Hello, from About Page</h1>
            <ul>
                <Link href={'/about/mission'}>Mission</Link>
                <Link href={'/about/vission'}>Vission</Link>
            </ul>
        </div>
    );
};

export default AboutPage;