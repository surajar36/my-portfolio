import React from 'react';
import { motion } from 'framer-motion';

const ResumeCTA = () => {
    return (
        <section id="resume" className="py-20 md:py-32 text-center">
            {/* Animated Heading */}
            <motion.h2
                className="text-3xl md:text-4xl font-bold font-clash mb-8"
                style={{ fontFamily: 'Gotham' }}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }} // triggers only once
            >
                Interested in My Full Story?
            </motion.h2>

            {/* Animated Button */}
            <motion.a
                href="https://drive.google.com/file/d/1IlOBuor2XoxRcOh5Z0EOXkMRHGAkbhUD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1A1A1A] text-[#F5F0EB] px-8 py-4 uppercase tracking-widest text-sm font-semibold rounded-full"
                style={{ fontFamily: 'Poppins' }}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
            >
                Download My Resume
            </motion.a>
        </section>
    );
};

export default ResumeCTA;
