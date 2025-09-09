import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const About = () => {
    const { about } = portfolioData;

    return (
        <section id="about" className="py-20 md:py-32 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 px-6">
                {/* Sticky Left Column */}
                <div className="md:sticky md:top-32 self-start h-fit">
                    <motion.p
                        className="text-xs uppercase tracking-widest mb-4 "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        What I Do
                    </motion.p>

                    <motion.h2
                        className="text-5xl md:text-5xl mb-8 tracking-[0.03em]"
                        initial={{ opacity: 0, y: 30 }}
                        style={{ fontFamily: 'Bebas Neue' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {about.title}
                    </motion.h2>

                    <motion.div
                        className="space-y-6 text-base md:text-lg"
                        initial={{ opacity: 0, y: 40 }}
                        style={{ fontFamily: 'Poppins' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p>{about.description}</p>
                    </motion.div>
                </div>

                {/* Scrollable Right Column */}
                <div className="space-y-16">
                    <motion.h3
                        className="text-3xl md:text-4xl font-bold font-clash mb-10"
                        initial={{ opacity: 0, y: 30 }}
                        style={{ fontFamily: 'Poppins' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        My Process
                    </motion.h3>
                    <div className="space-y-12">
                        {about.process.map((step) => (
                            <motion.div
                                key={step.id}
                                className="border-t border-[#1A1A1A]/20 pt-6"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-xl md:text-2xl font-bold font-clash mb-2" style={{ fontFamily: 'Poppins' }}>
                                    {step.id}. {step.title}
                                </h4>
                                <p style={{ fontFamily: 'Poppins' }}>{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
