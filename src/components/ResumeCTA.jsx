import React from 'react';

const ResumeCTA = () => {
    return (
        <section id="resume" className="py-20 md:py-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-clash mb-8">Interested in My Full Story?</h2>
            <a href="https://drive.google.com/file/d/1IlOBuor2XoxRcOh5Z0EOXkMRHGAkbhUD/view?usp=sharing" // Link to your resume file here
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1A1A1A] text-[#F5F0EB] px-8 py-4 uppercase tracking-widest text-sm font-semibold rounded-4xl">
                Download My Resume
            </a>
        </section>
    );
};

export default ResumeCTA;
