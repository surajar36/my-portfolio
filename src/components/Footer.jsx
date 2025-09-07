import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    const { contact, name } = portfolioData;
    return (
        <footer id="contact" className="bg-[#1A1A1A] text-[#F5F0EB]">
            <div className="container mx-auto px-6 py-20 md:py-32 text-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-clash mb-12">Let's Make Something Awesome Together</h2>
                <div className="flex justify-center space-x-8 text-sm uppercase tracking-widest mb-16">
                    <a href={`mailto:${contact.email}`}>Email</a>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className="border-t border-[#F5F0EB]/20 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>© {new Date().getFullYear()} {name}</p>
                    <a href="#hero">↑ Back to Top</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;