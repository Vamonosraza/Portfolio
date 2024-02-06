'use client';
import React, {useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView} from 'framer-motion';


const projectsData = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Added soon',
        image: 'images/projects/project1.jpg',
        tag: ['All', 'Web'],
        gitUrl:'/',
        previewUrl:'/'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Added soon',
        image: 'images/projects/project2.jpg',
        tag: ['All', 'Web'],
        gitUrl:'/',
        previewUrl:'/'
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Added soon',
        image: 'images/projects/project3.jpeg',
        tag: ['All', 'Mobile'],
        gitUrl:'/',
        previewUrl:'/'
    },
    ]

const ProjectSection = () => {
const ref = useRef(null);
const isInView = useInView(ref, {once:true})

    const [tag, setTag] = useState('All');
    const handleTagChange= (newTag) => {
        setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

const cardVariants = {
    initial: {y:50, opacity:0},
    animate: {y:0, opacity:1, transition:{duration:3}}
}

    return (
        <section ref={ref} id='projects'>
        <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
            <ProjectTag 
            onClick={handleTagChange} 
            name='All' 
            isSelected={tag === 'All'} />
            <ProjectTag 
            onClick={handleTagChange} 
            name='Web' 
            isSelected={tag === 'Web'} />
            <ProjectTag 
            onClick={handleTagChange} 
            name='Mobile' 
            isSelected={tag === 'Mobile'} />
        </div>
        <ul className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project) => (
                <motion.li variants={cardVariants} initial='initial' animate={isInView ? 'animate': 'initial'}>
                    <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    />
                </motion.li>
            ))}
        </ul>
        </section>
    )
}

export default ProjectSection