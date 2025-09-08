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
import { motion } from "framer-motion";

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
                <motion.p
                    className="text-xs uppercase tracking-widest text-zinc-500 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    My Toolkit
                </motion.p>

                <motion.h2
                    className="text-3xl md:text-4xl font-bold font-clash mb-12 text-zinc-800"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Skills & Technologies
                </motion.h2>
            </div>

            {/* Marquee container */}
            <motion.div
                className="w-full flex items-center h-28"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="w-full flex items-center animate-marquee whitespace-nowrap">
                    {skills.concat(skills).map((skill, index) => (
                        <div key={index} className="flex items-center mx-12">
                            <div className="mr-4 text-3xl font-bold text-zinc-600">
                                {skill.icon}
                            </div>
                            <span className="text-3xl font-medium text-zinc-700">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>

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
