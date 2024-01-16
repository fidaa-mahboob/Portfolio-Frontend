import React from "react";
import styled from "styled-components";

const StyledTitleText = styled.header`
  font-family: "Georgia", sans-serif;
  font-size: 20px;
`;


const About = () => {
   
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <StyledTitleText>
                        {" "}
                        <h1 className="title-font sm:text-6xl text-3xl mb-9 font-bold text-black">
                Hi 👋🏼 there,{" "}
                        </h1>
                    </StyledTitleText>
                    <StyledTitleText>
                        {" "}
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-black sm:text-md">
                My name is Fidaa Mahboob.{" "}
                            {"I'm a full stack software engineer."}
                        </h1>
                    </StyledTitleText>

                    <p className="leading-relaxed text-lg pt-8">
              My love of computers and programming started early back in college
              where I completed a BTEC in software development. Many years
              later, I started a career as a Full Stack Software Engineer @
              Accenture where I worked on many agile projects building my skills
              in backend and frontend development.
                    </p>
                    <p className="pt-4 text-lg">
              Through these projects, I had the opportunity to work with both
              small and large, specialised and cross functional teams across
              different time zones and developed a working style that leans
              towards flexibility, clarity and collaboration.
                    </p>
                    <p className="pt-4 text-lg" id="first">
                        {
                            "When I'm not coding 💻 you'll find me watching Star Trek TNG episodes because they're awesome, and playing football ⚽ at my local sports center. I also have a thing for italian food especially pizza 🍕."
                        }
                    </p>
                    <p className="py-4 text-lg">
                        {
                            "I look forward to my next software engineering challenge. Hire me? "
                        }{" "}
                    </p>

                    <p className="pb-4 text-lg">
              Get in touch 👉🏻{" "}
                        <u className="underline decoration-red-500">
                fidaamahboob@gmail.com
                        </u>
                    </p>

                    <div className="flex justify-between">
                        <a
                            href="https://github.com/fidaa-mahboob"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex text-white font-semibold bg-orange-500 border-0 mt-2 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg hover:shadow-lg"
                        >
                Github
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fidaa-mahboob/"
                            target="_blank"
                            rel="noreferrer"
                            className="ml-6 inline-flex text-gray-400 bg-gray-800 border-0 mt-2 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg font-semibold hover:shadow-lg"
                        >
                LinkedIn
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full outline outline-2 shadow-2xl shadow-orange-300"
                        alt="hero"
                        src="./640by640.jpeg"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
