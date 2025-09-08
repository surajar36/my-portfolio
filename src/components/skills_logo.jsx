import React from "react";
import {
    SiPython,
    SiPandas,
    SiTensorflow,
    SiScikitlearn,
    SiMysql,
    SiNumpy,
} from "react-icons/si";
import { FaFileExcel, FaChartBar } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { RiGeminiFill } from "react-icons/ri";

const Skillss = () => {
    const skills = [
        { name: "Python", icon: <SiPython /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "SQL", icon: <BsFiletypeSql /> },
        { name: "Excel", icon: <FaFileExcel /> },
        { name: "Power BI (DAX)", icon: <FaChartBar /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "LLMs", icon: <RiGeminiFill /> },
        { name: "MySQL", icon: <SiMysql /> },
    ];

    return (
        <section
            id="skills"
            className="py-20 md:py-32 bg-[#e8dcd3] overflow-hidden"
        >
            <div className="container mx-auto px-4 text-center">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
                    My Toolkit
                </p>
                <h2 className="text-3xl md:text-4xl font-bold font-clash mb-12 text-zinc-800">
                    Skills & Technologies
                </h2>
            </div>

            {/* Change 1: Increased the overall height of the marquee container */}
            <div className="w-full flex items-center h-28">
                <div className="w-full flex items-center animate-marquee whitespace-nowrap">
                    {skills.concat(skills).map((skill, index) => (
                        // Change 2: Increased the spacing between each skill item
                        <div key={index} className="flex items-center mx-12">
                            {/* Change 3: Made icons MUCH larger using text-5xl and removed fixed w/h */}
                            <div className="mr-4 text-3xl font-bold text-zinc-600">{skill.icon}</div>
                            {/* Change 4: Increased font size for the skill name */}
                            <span className="text-3xl font-medium text-zinc-700">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* I replaced the non-standard <style jsx> tag with a regular <style> tag which works everywhere. */}
            <style>{`
                @keyframes marquee {
                  0% {
                    transform: translateX(0%);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-marquee {
                  animation: marquee 40s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Skillss;