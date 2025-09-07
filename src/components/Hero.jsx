import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
    const { hero } = portfolioData;

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start px-6">
            <p className="text-base md:text-lg mb-6 max-w-xl">
                {hero.subtitle}
            </p>
            <h1 className="text-[16vw] leading-[0.9] font-clash font-bold uppercase tracking-[-0.05em]">
                {hero.title}
            </h1>
        </section>
    );
};

export default Hero;