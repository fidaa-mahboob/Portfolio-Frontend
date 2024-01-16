import React from 'react'


const ContactSimple = () => {
    return (
        <section className="py-4">
            <div className="container px-5 pt-4 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-9 h-9 mx-auto inline-block mb-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                    </svg>

                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                        <strong>{"Let's Talk"}</strong>
                    </h1>

                    <p className="text-lg">
              Contact me on 👉🏻{" "}
                        <u className="underline decoration-red-500">
                fidaamahboob@gmail.com
                        </u>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ContactSimple