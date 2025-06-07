import React from "react";

export default function Contact() {
  return (
    <section className="flex flex-col md:flex-row min-h-[80vh]">
      

      {/* Right: Taupe “Get in touch” section */}
      <div className="w-full md:w-1/2 bg-taupe flex flex-col justify-center px-8 py-12">
        <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
          Get in touch
        </h2>
        <p className="text-lg text-neutral-800 mb-6">
          If you want to work together, you can reach me at{" "}
          <a
            href="mailto:youremail@example.com"
            className="font-medium underline"
          >
            hello@reallygreatsite.com
          </a>
          .
        </p>

        {/* Optional: If you want a simple contact form */}
        <form className="flex flex-col space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 border border-neutral-200 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 border border-neutral-200 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-3 border border-neutral-200 rounded h-32 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
          <button
            type="submit"
            className="w-full bg-black text-beige px-6 py-3 font-medium rounded hover:bg-neutral-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}