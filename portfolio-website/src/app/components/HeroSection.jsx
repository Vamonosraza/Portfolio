"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="lg:py-16 ">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1}}
                transition={{ duration:1}} 
                className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Hello, I'm {""}
                        </span> 
                        <br></br>
                        <TypeAnimation
                        sequence={[
                            'Jessy :)',
                            1000,
                            'Web Developer',
                            1000,
                            'Mobile Developer',
                            1000,
                            'UX/UI Designer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                    </h1>

                    <p className="text-[#ADB7Be] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my portfolio! Explore below to discover more about me, browse through my projects, and find out how to get in touch. Thank you for stoping by!
                    </p>
                    <div>
                        <Link href='/#contact' className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-200 text-white">
                            Hire Me!
                        </Link>
                        <Link href='/' className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> Download CV</span>
                        </Link>
                    </div>
                </motion.div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#1818118] w-[250px] h-[250px] relative">
                        <Image
                        src="/images/watercolorSelf.jpg"
                        alt="selfie"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                        width={300}
                        height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
