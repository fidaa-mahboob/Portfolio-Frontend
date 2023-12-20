import { CodeIcon } from "@heroicons/react/solid";
import React, {useEffect, useState} from "react";
import { data } from "../data/data";

const Projects = () => {
    const [projects, setProjects] = useState([])

    const setProjectData = () => {
        setProjects(data)
    }
    
    useEffect(() => {
        setProjectData()
    }, [])
    
    return <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                  Projects
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
                </p>
            </div>
            <div className="flex flex-col items-center">
                {projects.map((project) => (
                    <div key={project.name} className="flex flex-row justify-between p-8">
                        <img alt="project screenshot"
                            className="inset-0 object-scale-down h-60 w-102 rounded-lg"
                            src={project.image}/>
                        <div>
                            <h1 className="sm:text-2xl text-3xl font-medium title-font mb-4 text-white">{project.title}</h1>
                            <p className="ps-8">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
};

export default Projects;
