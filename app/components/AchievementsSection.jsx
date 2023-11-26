"use client";
import React from 'react'
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
    () => {
        return import ("react-animated-numbers")
    },
    {ssr: false}
);

const achievementsList = [
    {
        metric: "Projects",
        value: "2",
    },
    {
        metric: "Activities",
        value: "7",
    },
    {
        metric: "Absents",
        value: "0",
    },
    {
        metric: "GWA",
        value: "95"
    }
    
];

const AchievementsSection = () => {
  return (
    <section className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className="border-[#33353f] border rounded-md py-10 px-17 flex flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
            return (
                <div key={index} className='flex flex-col items-center justify-center mx-4'>
                    <h2 className='text-white text-4xl font-bold'>
                        <AnimatedNumbers
                            includeComma
                            animateToNumber={parseInt(achievement.value)}
                            locale='tl-PH'
                            className='text-white text-4xl font-bold'
                            config={(_, index) => {
                                return{
                                    mass:1,
                                    friction: 100,
                                    tensions: 140 * (index + 1),

                                };
                            }}
                        />
                    </h2>
                    <p className='text-[#adb7be] text-base'>{achievement.metric}</p>
                
                </div>
            )
        })}
        </div>
    </section>
  )
}
export default AchievementsSection;