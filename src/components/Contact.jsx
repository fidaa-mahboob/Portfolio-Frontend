import React, { useRef } from 'react'
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Contactnew = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section id="contact">
            <div className="my-6">
                <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white  text-[#333] font-[sans-serif]">
                    <div>
                        <h1 className="text-3xl font-extrabold">Get in touch</h1>
                        <p className="text-sm text-gray-400 mt-3">
                Have some big idea or brand to develop and need help? Then reach
                out wed love to hear about your project and provide help.
                        </p>
                        <div className="mt-12">
                            <h2 className="text-lg font-extrabold">Email</h2>
                            <ul className="mt-3">
                                <li className="flex items-center">
                                    <div className="bg-yellow-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <IoMailOutline size={25} />
                                    </div>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-orange-600 text-sm ml-3"
                                    >
                                        <small className="block">Mail</small>
                                        <strong>fidaamahboob@gmail.com</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12">
                            <h2 className="text-lg font-extrabold">Socials</h2>
                            <ul className="flex mt-3 space-x-4">
                                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="javascript:void(0)">
                                        <FaLinkedin size={25} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <form className="ml-auo space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                        />
                        <textarea
                            placeholder="Message"
                            rows="6"
                            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
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
}

export default Contactnew