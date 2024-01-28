import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Jessy{" "}
                    </h1>

                    <p className="text-[#ADB7Be] text-lg mb-6 lg:text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            doloribus non tempora architecto minima quibusdam officiis dolores
            suscipit! Eius doloribus rerum quo reprehenderit. Facere commodi
            adipisci blanditiis eum minus nihil!
                    </p>
                    <div>
                        <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
                            Hire Me!
                        </button>
                        <button className="px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-color-white ">
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#1818118] w-[250px] h-[250px] relative">
                        <Image
                        src="/images/selfNobackground.jpeg"
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
