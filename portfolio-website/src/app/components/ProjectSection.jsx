import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: 'Project 1',
        description: 'This is a project description',
        imgUrl: 'images/projects/project1.jpg',
        tag: ['All', 'Web']
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'This is a project description',
        imgUrl: 'images/projects/project2.jpg',
        tag: ['All', 'Web']
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'This is a project description',
        imgUrl: 'images/projects/project3.jpg',
        tag: ['All', 'Web']
    }
    ]

const ProjectSection = () => {
    return (
        <>
        <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {projectsData.map((project) => (
                <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.image} />
            ))}
        </div>
        </>
    )
}

export default ProjectSection