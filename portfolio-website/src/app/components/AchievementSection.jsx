"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), { ssr: false });

const achievementsList = [
    {
        metric: 'Projects',
        value: 10,
<<<<<<< HEAD
        prefix: '+',
=======
        postfix: '+',
>>>>>>> 22f09c2 (rebasing)
    },
    {
        metric: 'Years of Experience',
        value: 2,
<<<<<<< HEAD
        postfix: '',
=======
        postfix: '~',
>>>>>>> 22f09c2 (rebasing)
    },

]

const AchievementSection = () => {
    return (
        <div className='py-8 px-8 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between'>{
                achievementsList.map((achievement, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center mx-4'>
<<<<<<< HEAD
                            <h2 className='text-4xl font-bold text-white flex flex-row'>
                                {achievement.prefix}
=======
                            <h2 className='text-4xl font-bold text-white'>
                                {achievement.postfix}
>>>>>>> 22f09c2 (rebasing)
                                <AnimatedNumbers 
                                includeComma
                                animateToNumber={parseInt(achievement.value)}
                                locale='en-US'
                                className='text-4xl font-bold text-white'
                                configs={(_, index) => {
                                    return{
                                        mass:1,
                                        friction: 100,
                                        tensions: 140 * (index+1),
                                    };}
                                    }
                                />
                                    {achievement.postfix}
                            </h2>
                            <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default AchievementSection