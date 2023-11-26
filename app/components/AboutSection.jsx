"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Information",
        id: "information",
        content: (
            <ul>
                <li><b className="text-[#FFCD4B]">Birthdate: </b>09/11/2004</li>
                <li><b className="text-[#FFCD4B]">Father: </b> Randy Lina</li>
                <li><b className="text-[#FFCD4B]">Mother: </b>Maria Maribeth Caballero</li>
                <li><b className="text-[#FFCD4B]">Nationality: </b>Filipino</li>
                <li><b className="text-[#FFCD4B]">Residence: </b>Quezon City</li>
            </ul>
        )
    },
    {
        title: "Schools",
        id: "school",
        content: (
            <ul>
                <li><b className="text-[#FFCD4B]">Elementary: </b>Paltok Elementary School</li>
                <li><b className="text-[#FFCD4B]">High School: </b>Judge Juan Luna High School</li>
                <li><b className="text-[#FFCD4B]">Senior High School: </b> Arellano University</li>
            </ul>
        )
    },
    {
        title: "Hobbies",
        id: "hobbies",
        content:(
            <ul className="pl-5 list-disc">
                <li>Reading manhwa and manga</li>
            </ul>
        )
    },
    {
        title: "Skilss",
        id: "skills",
        content:(
            <ul className="pl-5 list-disc">
                <li>Photoshop</li>
                <li>Web Developing</li>
                <li>Sketching</li>
                <li>Creating Creative Powerpoint Presentations                                  </li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab ] = useState("information");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });

    }
    return (
    <section id="about" className='text-white mb-10'>
        <div className="md:grid md:grid-cols-2 gap-8 items-center px-8 py-8 xl:gap-16 sm:py-16 xl:px-16">
            <Image src={"/images/QCU2.jpg"} width={500} height={400}/>

            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className='text-3xl py-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD4B] to-[#FF4B91] mb-4'>About Me!</h2>
                <p className="text-base lg:text-lg">
                    I am Jhan Russel C. Lina.
                    I live in Quezon City. I am 19 years old.
                    I am taking Bachelor of Science in Computer Science at QCU.
                    I took Information and Computer Technology in senior high school.

                </p>
                <div className="flex flex-row mt-8">
                    <TabButton selectTab={() => handleTabChange("information")} active={tab === "information"}>
                        {" "}
                        Information{" "}
                    </TabButton>
                    <TabButton className="pr-3" selectTab={() => handleTabChange("school")} active={tab === "school"}>
                        {" "}
                        Schools{" "}
                    </TabButton>
                    <TabButton className="pr-3" selectTab={() => handleTabChange("hobbies")} active={tab === "hobbies"}>
                        {" "}
                        Hobbies{" "}
                    </TabButton>
                    <TabButton className="pr-3" selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                </div>
                <div className="mt-4 tracking-wide font-mono">{TAB_DATA.find((t) => t.id === tab).content}</div>

            </div>
        </div>   
    </section>
  )
}

export default AboutSection