import React, { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const { hero } = portfolioData;
    const sectionRef = useRef(null);

    // Track scroll progress for the hero section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Scale from 1.05 (105%) to 1 (100%) as you scroll
    const scale = useTransform(scrollYProgress, [0, 0.15], [1.05, 1]);

    return (
        <section
            id="hero"
            ref={sectionRef}
            className="min-h-screen flex flex-col justify-center items-start px-6"
        >
            {/* Subtitle */}
            <div className="overflow-hidden w-[350px] mb-6 ">
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
                className="absolute bottom-0 right-0 text-[20vw] w-max leading-[0.9] mb-8 mr-8 overflow-hidden pr-[150px]"
                style={{ fontFamily: 'Bebas Neue', scale: scale }}
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
