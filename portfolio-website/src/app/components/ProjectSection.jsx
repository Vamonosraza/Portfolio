'use client';
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: 'Project 1',
        description: 'This is a project description',
        image: 'images/projects/project1.jpg',
        tag: ['All', 'Web'],
        gitUrl:'/',
        previewUrl:'/'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'This is a project description',
        image: 'images/projects/project2.jpg',
        tag: ['All', 'Web'],
        gitUrl:'/',
        previewUrl:'/'
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'This is a project description',
        image: 'images/projects/project3.jpeg',
        tag: ['All', 'Mobile'],
        gitUrl:'/',
        previewUrl:'/'
    },
    ]

const ProjectSection = () => {
    const [tag, setTag] = useState('All');
    const handleTagChange= (newTag) => {
        setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    return (
        <>
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
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project) => (
                <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl} />
            ))}
        </div>
        </>
    )
}

export default ProjectSection