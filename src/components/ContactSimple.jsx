import React from 'react'

const ContactSimple = () => {
    return (
        <section className="py-4">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                    <strong>{"Let's Talk"}</strong>
                </h1>

           
                <p className="pb-4 text-lg">
            Contact me on 👉🏻{" "}
                    <u className="underline decoration-red-500">
              fidaamahboob@gmail.com
                    </u>
                </p>
            </div>
        </section>
    );
}

export default ContactSimple