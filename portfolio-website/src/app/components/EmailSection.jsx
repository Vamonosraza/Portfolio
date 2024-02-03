import React from 'react'
import GithubIcon from '../../public/github-mark.png'
import LinkedInIcon from '../../public/images/linkedIn.webp'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>
                    Let's Connect!
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-wb'>
                    Thank you fo rreaching out. I'm always open to new opportunities and meeting new people. Feel free to reach out to me!
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
                <form className='flex flex-col gap-4'>
                    <label htmlFor='email' className='text-white'>Your email</label>
                    <input 
                    type='email' 
                    id='email'
                    required
                    placeholder='Email' className='bg-[#181818] border-[#ADB7BE] border-2 rounded-md py-2 px-4 text-white' />
                    <textarea placeholder='Message' className='bg-[#181818] border-[#ADB7BE] border-2 rounded-md py-2 px-4 text-white'></textarea>
                    <button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded-md'>
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection