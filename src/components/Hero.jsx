import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from "framer-motion";

const Hero = () => {
    const { hero } = portfolioData;

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start px-6">
            {/* Subtitle */}
            <div className="overflow-hidden w-[350px] mb-6 font-bebas">
                <motion.p
                    className="text-base md:text-lg"
                    style={{ fontFamily: 'Poppins' }}
                    initial={{ y: "100%" }}       // hidden below
                    animate={{ y: "0%" }}        // slides into view
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {hero.subtitle}
                </motion.p>
            </div>

            {/* Big Title */}
            <motion.h1
                className="absolute bottom-0 right-0 text-[20vw] w-max leading-[0.9] font-bebas mb-8 mr-8 overflow-hidden"
                style={{ fontFamily: 'Bebas Neue' }}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            >
                {hero.title}
            </motion.h1>
        </section>
    );
};

export default Hero;
