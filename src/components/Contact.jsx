/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Contactnew = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("") 


    return (
        <section id="contact">
            <div className="my-6">
                <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl   text-[#333] font-[sans-serif]">
                    <div>
                        <h1 className="text-4xl font-extrabold">Get in touch</h1>
                        <p className="text-md text-black-400 mt-3">
              If you would like to have chat please feel free to message me. I
              look forward to hearing from you.
                        </p>
                        <div className="mt-12">
                            <h2 className="text-xl font-extrabold">Email</h2>
                            <ul className="mt-3">
                                <li className="flex items-center">
                                    <div className="bg-yellow-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <IoMailOutline size={25} />
                                    </div>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-orange-600 text-sm ml-3"
                                    >
                                        <small className="block text-sm">Mail</small>
                                        <strong className="text-sm">fidaamahboob@gmail.com</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <form name="contact" className="ml-auo space-y-4" method="POST">
                        <input type="hidden" name="form-name" value="contact"/>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Message"
                            rows="6"
                            id="message"
                            name="message"
                            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button
                            type="button"
                            className="text-white bg-orange-500 hover:bg-orange-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
                        >
              Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contactnew;
