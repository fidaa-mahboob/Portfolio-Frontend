import { CodeIcon } from "@heroicons/react/solid";
import React, {useEffect, useState} from "react";
import { data }  from "../data/data"; 


const Projects = () => {
    const [projects, setProjects] = useState([])

    const setProjectData = () => {
        setProjects(data)
    }
    
    useEffect(() => {
        setProjectData()
    }, [])

    return (
        <section id="projects">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                        <strong>Projects</strong>
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-base">
                        {"Some of the projects that I'm currently working on. Hover over to find out more!"}
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project, indx) => (
                        <>
                            <h2 key={project.image}  className="lg:hidden sm:4xl pl-10">
                                <strong>
                                    {indx + 1}.&nbsp;{project.title}
                                </strong>
                            </h2>
                            <a
                                href={project.link}
                                key={project.name}
                                className="sm:w-1/2 w-100 p-4"
                            >
                                <div className="flex relative">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={project.image}
                                    />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-gray-900 opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            <strong>{project.subtitle}</strong>
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            <strong>{project.title}</strong>
                                        </h1>
                                        <p className="leading-relaxed text-white">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
