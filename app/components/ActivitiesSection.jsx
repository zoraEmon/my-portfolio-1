"use client";
import React, { useState, useRef} from 'react'
import ActivityCard from './ActivityCard'
import ActivityTag from './ActivityTag'
import { motion, useInView } from 'framer-motion';

const activitiesData = [
    {
        id: 1,
        title: "Programming Activity 1",
        description: "This is programming activity 1",
        image: "/images/computing1.png",
        tag: ["All", "Programming"],
        gitUrl: "/images/computing1.png",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Programming Activity 2",
        description: "This is programming activity 2",
        image: "/images/computing2.png",
        tag: ["All", "Programming"],
        gitUrl: "/images/computing2.png",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Computing Activity 1",
        description: "This is computing activity 1",
        image: "/images/programming1.png",
        tag: ["All", "Computing"],
        gitUrl: "/images/programming1.png",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Computing Activity 2",
        description: "This is computing activity 2",
        image: "/images/programming2.png",
        tag: ["All", "Computing"],
        gitUrl: "/images/programming2.png",
        previewUrl: "/",
    }
]


const ActivitiesSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag)
    };

    const filteredActivities = activitiesData.filter((activity) => 
        activity.tag.includes(tag)    
    );

    const cardVariants ={
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1}
    }
    return (
        <section>
            <h2 id="activities "className='font-bold  text-center md:text-6xl text-3xl uppercase text-[#FFCD4B]'>My Activities</h2>
            <div className='text-slate-300 flex flex-row justify-center items-center gap-2 font-semibold py-6'>
                <ActivityTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag === "All"} 
                />
                <ActivityTag 
                    onClick={handleTagChange} 
                    name="Programming" 
                    isSelected={tag === "Programming"} 
                />
                <ActivityTag 
                    onClick={handleTagChange} 
                    name="Computing" 
                    isSelected={tag === "Computing"} 
                />
            </div>
            <ul  id="activities" ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredActivities.map((activity, index) => (
                    <motion.li 
                        key={index}
                        variants={cardVariants} 
                        initial="initial" 
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4}}
                    >
                        <ActivityCard 
                            key={activity.id} 
                            title={activity.title} 
                            description={activity.description} 
                            imgUrl={activity.image} 
                            gitUrl={activity.gitUrl}
                            previewUrl={activity.previewUrl}
                            tags={activity}
                        />
                    </motion.li>
                ))}    
            </ul>
        </section>
  )
}

export default ActivitiesSection