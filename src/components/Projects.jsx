import { CodeIcon } from "@heroicons/react/solid";
import React, {useEffect, useState} from "react";
import { data }  from "../data/data"; 
import { BsGithub } from "react-icons/bs";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
} from "@nextui-org/react";


const Projects = () => {
    const [projects, setProjects] = useState([])

    const setProjectData = () => {
        setProjects(data)
    }
    
    useEffect(() => {
        setProjectData()
    }, [])

  
    
    return (
        <section id="projects" className="py-4">
            <div className="container px-5 py-10 mx-auto lg:px-40">
                <div className="flex flex-col text-center mb-6">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-black">
              Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo facilis repellat ab cupiditate alias vero aliquid
              obcaecati quisquam fuga dolore.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 justify-around">
                    {projects.map((project, idx) => (
                        <div key={project.title} className="py-10">
                            <Card className="max-w-[450px]">
                                <CardHeader>
                                    <div className="flex flex-col">
                                        <p className="text-md">{project.title}</p>
                                        <p className="text-small text-default-500">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                </CardHeader>
                                <Divider />
                                <CardBody className="flex flex-col items-between">
                                    <Image
                                        alt="project screenshot"
                                        src={project.image}
                                        className="object-cover rounded-xl"
                                        width={500}
                                    ></Image>
                                    <div>
                                        <p className="pt-3">
                                            {project.description} <Link>Read More</Link>
                                        </p>
                                    </div>
                                </CardBody>
                                <Divider />
                                <CardFooter className="flex flex-row justify-center">
                                    <BsGithub size={25} />
                                    <Link
                                        isExternal
                                        showAnchorIcon
                                        href={project.link}
                                        className="ps-2"
                                    >
                      Visit source code on GitHub.
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
