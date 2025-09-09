import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const ProjectCard = ({ title, description, tags, link }) => (
    <a href={link} className="block project-card">
        <div className="border-b border-[#1A1A1A]/20 pb-8">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-3xl md:text-4xl font-bold font-clash" style={{ fontFamily: "Poppins" }}>{title}</h3>
                    <p className="mt-2 text-[#1A1A1A]/80" style={{ fontFamily: 'Poppins' }}>{description}</p>
                </div>
                <div className="text-2xl project-arrow transition-transform duration-300">→</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold border border-[#1A1A1A] rounded-full px-3 py-1">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </a>
);
// --- Define motion variants ---
const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15, // delay between each child
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};


const Projects = () => {
    const { projects } = portfolioData;

    const infoRef = useRef(null);
    const isInView = useInView(infoRef, { once: true, margin: '-100px' });

    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto flex flex-col space-y-16">

                {/* --- Sticky Info Panel --- */}
                <motion.div
                    ref={infoRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    // This parent container is full-width and has no horizontal padding
                    className="sticky top-20 bg-[#e8dcd3] pb-4"
                >
                    <div className="space-y-6 px-6 md:px-12">
                        <p className="text-xs uppercase tracking-widest text-zinc-500">My Works</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-zinc-800" style={{ fontFamily: 'Poppins' }}>
                            Selected Works
                        </h2>
                        <p className="text-zinc-600" style={{ fontFamily: 'Poppins' }}>
                            Here are some of my key projects that showcase my skills and the range of work I have contributed to.
                        </p>
                    </div>
                    <div className="w-full border-b border-zinc-400 mt-4"></div>
                </motion.div>


                {/* --- Projects List --- */}
                <motion.div
                    className="flex flex-col space-y-12"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={cardVariants}>
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                link={project.link}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
