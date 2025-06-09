import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  useEffect(() => {
    // Initialize EmailJS with your user ID (public key)
    emailjs.init("D-VB2nLjThQRdzC63");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_ls5hptl",      // e.g. "service_xxx"
        "template_twndp9t",     // e.g. "template_yyy"
        formRef.current
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section className="flex  md:flex-row min-h-screen justify-center">

      {/* Right side: form */}
      <div className="w-[800px] md:w-1/2 bg-[#e8e4df] flex flex-col items-center justify-center px-8 py-12 md:py-0">
        <h1 className="text-[3rem] md:text-[4rem] font-serif text-black leading-[0.8] mb-[1rem]">
          Get in touch
        </h1>
        <p className="text-lg text-neutral-800 mb-4">
          I’d love to hear from you. Drop me a message below and I’ll get back
          to you soon.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4 max-w-lg"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full h-[20px] px-4 py-3 border border-neutral-200 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full h-[20px] px-4 py-3 border border-neutral-200 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full h-[100px] px-4 py-3 border border-neutral-200 rounded h-32 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />

          <button
            type="submit"
            className="w-full bg-black text-beige px-6 py-3 font-medium rounded hover:bg-neutral-800 transition"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>

        {/* Status messages */}
        {status === "success" && (
          <p className="mt-4 text-green-600">
            Thanks for your message! I’ll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600">
            Oops, something went wrong. Please try again or email me directly at{' '}
            <a href="mailto:monica.samaan@outlook.com" className="underline">
              monica.samaan@outlook.com
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
