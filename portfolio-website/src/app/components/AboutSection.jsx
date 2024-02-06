"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'Skills',
        content: (
            <ul className='list-disc list-inside'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>MongoDB</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'Education',
        content: (
            <ul className='list-disc list-inside'>
                <li>Bachelor's Degree in Computer Science</li>
                <li>San Francisco State Spring 2024</li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'Experience',
        content: (
            <ul className='list-disc list-inside'>
                <li>Frontend Developer at Company A</li>
                <li>Backend Developer at Company B</li>
                <li>Fullstack Developer at Company C</li>
            </ul>
        )
    },
    

]

const AboutSection = () => {
    const [tab, setTab] = useState('Skills')
    const [isPending, startTransition] = useTransition({ timeoutMs: 3000 })

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        });
    };

    return (
        <section className='text-white' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 xl:py-16'>
                <div className='flex flex-col'>
                    <Image src='/images/Computer.jpg' alt='Computer' width={500} height={500}/>
                </div>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold mb-4'>About Me</h2>
                    <p className='text-base md:text-lg'>
                        I am a developer who likes to code and build things. I have experience in web development, mobile development, data analytics, and UX/UI design. I am always willing to work with others and learn new things. I am grateful to live in San Francisco where I can collaborate with other talented developers and designers. I am currently looking for new opportunities to work on exciting projects and grow my skills.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange('Skills')} active ={tab === 'Skills'}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange('Experience')} active ={tab === 'Experience'}>Experience</TabButton>
                        <TabButton selectTab={() => handleTabChange('Education')} active ={tab === 'Education'}>Education</TabButton>
                    </div>
                    <div className='mt-4'>
                        {isPending ? 'Loading...' : TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
            </section>
    )
}

export default AboutSection