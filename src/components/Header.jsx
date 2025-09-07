import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { title: 'About', href: '#about' },
        { title: 'Works', href: '#projects' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <header id="header" className="fixed top-0 left-0 right-0 z-50 bg-[#e8dcd3]/80 backdrop-blur-sm">
            <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
                <a href="#hero" className="text-2xl font-bold font-clash tracking-wider">A.R.</a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-sm uppercase tracking-widest">{link.title}</a>
                    ))}
                </div>

                {/* Mobile Nav Button */}
                <div className="md:hidden">
                    <button id="menu-btn" className="focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#F5F0EB]`}>
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="block py-2 px-6 text-sm uppercase" onClick={() => setIsMenuOpen(false)}>{link.title}</a>
                ))}
            </div>
        </header>
    );
};

export default Header;