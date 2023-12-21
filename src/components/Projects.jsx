import { CodeIcon } from "@heroicons/react/solid";
import React, {useEffect, useState} from "react";
import { data } from "../data/data"; 
import { BsGithub } from "react-icons/bs";
import { DiGithubFull } from "react-icons/di";

const Projects = () => {
    const [projects, setProjects] = useState([])

    const setProjectData = () => {
        setProjects(data)
    }
    
    useEffect(() => {
        setProjectData()
    }, [])
    
    return <section id="projects" >
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                  Projects
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
                </p>
            </div>
            <div className="flex flex-col items-center">
                {projects.map((project, idx) => (
                    <div key={project.name} className="flex flex-col justify-between">
                        <img alt="project screenshot"
                            className="inset-0 object-scale-down h-60 w-102 rounded-lg"
                            src={project.image}/>
                        <h1 className="sm:text-2xl text-3xl font-medium title-font mb-4 text-white pt-4">{idx + 1}. {project.title}</h1>
                        <p  >{project.description}</p>
                        <div className="flex justify-even justify-center py-6">
                            <a
                                href="#contact"
                                className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                                <DiGithubFull size={40}/>
                            </a>
                            <a
                                href="#projects"
                                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
                            </a>
                        </div> 
                        
                        
                    
                    </div>
                ))}
            </div>
        </div>
    </section>
};

export default Projects;
