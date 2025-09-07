import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
    const { about } = portfolioData;
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto">
                <p className="text-xs uppercase tracking-widest mb-4">What I Do</p>
                <h2 className="text-4xl md:text-5xl font-bold font-clash mb-8">{about.title}</h2>
                <div className="space-y-6 text-base md:text-lg">
                    <p>{about.description}</p>
                </div>

                <div className="mt-16">
                    <h3 className="text-3xl md:text-4xl font-bold font-clash mb-10">My Process</h3>
                    <div className="space-y-12">
                        {about.process.map((step) => (
                            <div key={step.id} className="border-t border-[#1A1A1A]/20 pt-6">
                                <h4 className="text-xl md:text-2xl font-bold font-clash mb-2">{step.id}. {step.title}</h4>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;