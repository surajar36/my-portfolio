import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FiMail, FiPhone } from "react-icons/fi";   // Email and Phone icons
import { FaGithub, FaLinkedin } from "react-icons/fa";  // GitHub + LinkedIn icons

const Footer = () => {
    const { contact, name } = portfolioData;

    return (
        <footer id="contact" className="bg-[#1A1A1A] text-[#F5F0EB]">
            <div className="container mx-auto px-6 py-20 md:py-32 text-center">
                {/* Title */}
                <h2
                    className="text-4xl md:text-6xl lg:text-7xl font-bold font-clash mb-12"
                    style={{ fontFamily: 'Gotham' }}
                >
                    Let's Make Something Awesome Together
                </h2>

                {/* Contact Links */}
                <div className="flex justify-center space-x-8 text-sm uppercase tracking-widest mb-16">
                    <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center space-x-2 hover:opacity-80 transition"
                    >
                        <FiMail className="text-lg" />
                        <span>Email</span>
                    </a>
                    <a
                        href="tel:+917899432080"
                        className="flex items-center space-x-2 hover:opacity-80 transition"
                    >
                        <FiPhone className="text-lg" />
                        <span>Phone</span>
                    </a>
                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:opacity-80 transition"
                    >
                        <FaLinkedin className="text-lg" />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:opacity-80 transition"
                    >
                        <FaGithub className="text-lg" />
                        <span>GitHub</span>
                    </a>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#F5F0EB]/20 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>© {new Date().getFullYear()} {name}</p>
                    <a href="#hero" className="hover:opacity-80 transition">↑ Back to Top</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
