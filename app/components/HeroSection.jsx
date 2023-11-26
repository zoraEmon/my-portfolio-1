"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (  
    <section className='lg:py-16 lg:pl-20'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
                initial={{opacity: 0, scale: 0,}}
                animate={{ opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
            >

                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD4B] via-[#FF7676] to-[#FF4B91]">
                        Hello, I&apos;m <br />
                    </span>

                    {/* Text Animation */}
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Russel',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'A Student',
                            1000,
                            'A Friend',
                            1000,
                            'A QCUian',
                            1000
                        ]}
                        wrapper="span"
                        speed={20}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#bab8b8] text-base sm:text-lg mb-6 lg:text-xl">
                    I am currently studying computer science at Quezon City University.
                </p>
                 {/*for buttons*/} 
                <div>
                    <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-[#FFCD4B] via-[#FF7676] to-[#FF4B91] hover:bg-slate-200 text-black" href="">
                        Twitter Account
                    </button>
                    <button className="px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                        My Github
                    </button>
                </div>
            </motion.div>

            {/*For the avatar.*/}
            <div className="col-span-5 lg:col-span-5 pt-3 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#1e013b] w-[250px] h-[250px] relative lg:h-[350px] lg:w-[350px]">
                    <Image
                        src="/images/myself.png"
                        alt="this is me."
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={325}
                        height={325}
                    />
                </div>
            </div>
        </div>
    </section>
  );
}

export default HeroSection;