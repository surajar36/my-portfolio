import React from 'react';
import { portfolioData } from '../data/portfolioData';

// This is a "sub-component" just for the project card.
// It keeps the code clean.
const ProjectCard = ({ title, description, tags, link }) => (
    <a href={link} className="block project-card">
        <div className="border-b border-[#1A1A1A]/20 pb-8">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-3xl md:text-4xl font-bold font-clash">{title}</h3>
                    <p className="mt-2 text-[#1A1A1A]/80">{description}</p>
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


const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto">
                <p className="text-xs uppercase tracking-widest mb-4">My Work</p>
                <h2 className="text-4xl md:text-5xl font-bold font-clash mb-16">Selected Works</h2>
                <div className="space-y-12">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;