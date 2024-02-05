"use client"
import React, { useState } from 'react'
import GithubIcon from '../../../public/github-mark.png'
import LinkedInIcon from '../../../public/linkedIn.webp'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = '/api/send';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();
        

        if (response.status === 200) {
            console.log('Email sent');
            setEmailSubmitted(true)
        }

    }

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>
                    Let's Connect!
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-wb'>
                    Thank you reviewing my portfolio. I'm always open to new opportunities and meeting new people. Feel free to reach out to me!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href='https://github.com/Vamonosraza'>
                        <Image src={GithubIcon} alt='github' width={40} height={40} />
                    </Link>
                    <Link href='https://www.linkedin.com/in/jessy-martinez-72b70a195/'>
                        <Image src={LinkedInIcon} alt='linkedin' width={40} height={40} />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <label htmlFor='email' className='text-white block text-small font-medium'>
                        Your email
                    </label>
                    <input 
                    name='email'
                    type='email' 
                    id='email'
                    required
                    placeholder='username@email.com' className='bg-[#181818] border-[#ADB7BE] border-2 rounded-md py-2 px-4 text-white mb-3' />
                    <label htmlFor='email' className='text-white block text-small font-medium'>
                        Subject
                    </label>
                    <input 
                    name='subject'
                    type='text' 
                    id='subject'
                    required
                    placeholder='Subject of your message' className='bg-[#181818] border-[#ADB7BE] border-2 rounded-md py-2 px-4 text-white mb-3' />
                    <label htmlFor='email' className='text-white block text-small font-medium'>
                        Message
                    </label>
                    <textarea
                    name='message'
                    id='message'
                    required
                    placeholder='Type your message here' className='bg-[#181818] border-[#ADB7BE] border-2 rounded-md py-2 px-4 text-white mb-3' />
                    
                    <button type='submit' className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded-md'>
                        Send
                    </button>

                    {
                        emailSubmitted && ( <p className=' text-purple-400 text-sm mt-4'>Email sent successfully</p>)
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection