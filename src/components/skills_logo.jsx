import React from 'react';

// --- SVG Icons for the Tech Stack ---
const PythonIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full"><path d="M11.23 8.351a.36.36 0 01.36-.36h5.05a.36.36 0 01.36.36v1.948a.36.36 0 01-.36.36h-2.525v1.263h2.165a.36.36 0 01.36.36v1.948a.36.36 0 01-.36.36h-5.05a.36.36 0 01-.36-.36v-1.948a.36.36 0 01.36-.36h2.525v-1.263H11.23a.36.36 0 01-.36-.36V8.35zm-3.18 7.378a.36.36 0 01.36-.36h5.05a.36.36 0 01.36.36v1.948a.36.36 0 01-.36.36h-2.525v1.262h2.165a.36.36 0 01.36.36v1.949a.36.36 0 01-.36.36h-5.05a.36.36 0 01-.36-.36v-1.949a.36.36 0 01.36-.36h2.525v-1.262H8.05a.36.36 0 01-.36-.36v-1.948zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-3.92-12.28a.36.36 0 01.36-.36h2.526v-1.263H6.79a.36.36 0 01-.36-.36V8.05a.36.36 0 01.36-.36h5.05a.36.36 0 01.36.36v1.948a.36.36 0 01-.36.36H9.035v1.263h2.166a.36.36 0 01.36.36v1.688a.36.36 0 01-.36.36H6.79a.36.36 0 01-.36-.36v-1.948z M15.95 3.65a.36.36 0 01.36-.36h2.525v-1.263h-2.165a.36.36 0 01-.36-.36V.02a.36.36 0 01.36-.36h5.05a.36.36 0 01.36.36v1.948a.36.36 0 01-.36.36h-2.525v1.263h2.165a.36.36 0 01.36.36v1.688a.36.36 0 01-.36.36h-5.05a.36.36 0 01-.36-.36V3.65z" /></svg>;
const PandasIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full"><path d="M1.385 1.385v21.23h5.923V1.385zm7.308 0v10.615h5.923V1.385zm7.307 0v21.23h5.923V1.385z" /></svg>;
const NumpyIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full"><path d="m11.583 17.802 8.41-11.52h-5.26L11.58 11.2zM3.32 17.8l8.26-11.52H6.32L3.32 11.2zM2.01 19.2l9.57-13.2h1.41l-8.15 11.23zM20.58 5.92l-9.56 13.2h-1.41l8.15-11.23z" /></svg>;
const SqlIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full"><path d="M4.23 12.261c-1.32.761-1.32 1.522 0 2.283l7.925 4.565c1.32.761 2.64 0 2.64-1.141V8.837c0-1.141-1.32-1.902-2.64-1.141L4.23 12.26zM2.87 21.141c-1.32.761-2.64 0-2.64-1.141V4.087c0-1.141 1.32-1.902 2.64-1.141l7.925 4.565a1.32 1.32 0 01.66.869v7.925a1.32 1.32 0 01-.66.87L2.87 21.14zM16.92 20.087V3.043c0-1.521 1.52-2.282 2.64-1.141l1.52.87c1.32.76 1.32 1.9 0 2.64l-1.52.87c-1.14.761-1.14 1.9 0 2.64l1.52.87c1.32.76 1.32 1.9 0 2.64l-1.52.87c-1.14.761-1.14 1.9 0 2.64l1.52.87c1.32.76 1.32 1.9 0 2.64l-1.52.87c-1.141.761-2.64 0-2.64-1.141z" /></svg>;
const ExcelIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full"><path d="M22.5 0H14L8 12l6 12h8.5l-6-12 6-12zM1.5 0h8.5l-6 12 6 12H1.5L8 12 1.5 0z" /></svg>;
const PowerBIIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full"><path d="M12.43 2.98c-1.28 0-2.56.02-3.84.02C4.19 3 1 6.19 1 10.59v2.82c0 4.4 3.19 7.59 7.59 7.59h3.84c4.4 0 7.59-3.19 7.59-7.59V6.83c0-2.1-1.7-3.83-3.81-3.85H12.43zm-2.19 2.19h2.17c.92 0 1.66.74 1.66 1.66v7.31c0 .92-.74 1.66-1.66-1.66h-2.17c-.92 0-1.66-.74-1.66-1.66V6.83c0-.92.74-1.66 1.66-1.66z" /></svg>;
const TensorFlowIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full"><path d="m11.944 12.33.002-4.112L4.69 3.987l.002 4.113zm.112 0 .002 4.112-7.254 4.232.002-4.113zm-7.368 4.233 7.254 4.23.002-4.112-7.256-4.23zm7.368-8.463L19.31 3.987l.002 4.113L12.056 12.33zm7.368-4.23.002 4.113-7.256 4.23.002-4.112z" /></svg>;
const ScikitLearnIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full"><path d="M18.83 10.155c.34-.583.53-1.26.53-1.98 0-1.04-.4-1.988-1.08-2.716-.67-73-1.57-1.15-2.6-1.15-1.01 0-1.92.42-2.58 1.15-.68.73-1.08 1.68-1.08 2.71 0 .72.19 1.4.53 1.98L4.62 17.65c.1.17.23.31.39.42l.09.06c.19.13.4.2.62.2h12.55c.22 0 .43-.07.62-.2l.09-.06c.16-.1.29-.25.39-.42l-7.45-7.495zM9.5 21.375a1.725 1.725 0 110-3.45 1.725 1.725 0 010 3.45zm5-10.87a1.72 1.72 0 110-3.45 1.72 1.72 0 010 3.45z" /></svg>;
const MySqlIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15.586v-3.04l-2.439 1.742c-.293.21-.69.21-.982 0l-1.536-1.098c-.293-.21-.488-.553-.488-.93v-3.92c0-.377.195-.72.488-.93l1.536-1.098c.293-.21.69-.21.982 0L11 11.547V8.414c0-.495.53-.825.952-.553l4.048 2.53c.422.272.422.87 0 1.14l-4.048 2.53c-.422.273-.952-.058-.952-.554z" /></svg>;
const SqlServerIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full"><path d="M17.21 2.33a1.1 1.1 0 00-1.08-.2L2.33 6.79a1.1 1.1 0 00-.77 1.04v8.34a1.1 1.1 0 00.77 1.04l13.8 4.66a1.1 1.1 0 001.08-.2l3.86-3.86a1.1 1.1 0 000-1.55l-3.86-3.86a1.1 1.1 0 00-1.55 0l-1.63 1.63V7.22l1.63 1.63a1.1 1.1 0 001.55 0l3.86-3.86a1.1 1.1 0 000-1.55l-3.86-3.86zM6 12a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>;
const LlmIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-full h-full"><path d="M12 2a10 10 0 0 0-3.16 19.49 10 10 0 0 0 12.32-12.32A10 10 0 0 0 12 2zm-1 5h2v2h-2zm4 10h-2v-1a4 4 0 0 0-4-4H7v-2h2a2 2 0 0 1 2 2v1h2v-1a2 2 0 0 1 2-2h1zm-5-3.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /></svg>;


const Skillss = () => {
    const skills = [
        { name: "Python", icon: <PythonIcon /> },
        { name: "Pandas", icon: <PandasIcon /> },
        { name: "NumPy", icon: <NumpyIcon /> },
        { name: "SQL", icon: <SqlIcon /> },
        { name: "Excel", icon: <ExcelIcon /> },
        { name: "Power BI (DAX)", icon: <PowerBIIcon /> },
        { name: "TensorFlow", icon: <TensorFlowIcon /> },
        { name: "Scikit-learn", icon: <ScikitLearnIcon /> },
        { name: "LLMs", icon: <LlmIcon /> },
        { name: "MySQL", icon: <MySqlIcon /> },
        { name: "SQL Server", icon: <SqlServerIcon /> },
    ];

    return (
        <section id="skills" className="py-20 md:py-32 bg-[#e8dcd3] overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">My Toolkit</p>
                <h2 className="text-3xl md:text-4xl font-bold font-clash mb-12 text-zinc-800">Skills & Technologies</h2>
            </div>

            <div className="w-full flex items-center h-20">
                <div className="w-full flex items-center animate-marquee whitespace-nowrap">
                    {skills.concat(skills).map((skill, index) => (
                        <div key={index} className="flex items-center mx-8">
                            <div className="w-10 h-10 mr-4 text-zinc-600">
                                {skill.icon}
                            </div>
                            <span className="text-xl font-medium text-zinc-700">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* We need a CSS animation for this, which can't be done in inline styles */}
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Skillss;

