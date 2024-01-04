import React, { useEffect, useState } from "react";
import { ChipIcon } from "@heroicons/react/solid";
import { skills_data } from "../data/data";
import styled from "styled-components";

const StyledText = styled.p`
  font-family: "Georgia:, sans-serif;
  font-size: 30px;
`;

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills(skills_data);
    }, []);

    return (
        <section id="skills" className="py-4">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-bold title-font text-black mb-4">
               Skills 
                    </h1>
                    {" "}
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              These are the technologies that I have used in personal software projects and commercial client projects.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2-mx-2">
                    {skills &&
            skills.map((skill) => (
                <div key={skill.name} className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <img
                            src={skill.icon}
                            className="w-6 h-6 flex-shrink-0 mr-4"
                        />
                        <span className="title-font font-medium text-white">
                            {skill.name}
                        </span>
                    </div>
                </div>
            ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
