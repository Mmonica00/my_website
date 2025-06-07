import React from "react";
import WorkExperience from "../components/WorkExperience";

export default function About() {
  return (
    <>
      <section className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Left: Black “Hello there!” */}
        <div className="w-full md:w-1/2 bg-black flex items-center justify-center px-6 py-12">
          <h2 className="text-white text-4xl md:text-5xl font-serif">
            Hello there!
          </h2>
        </div>

        {/* Right: Beige background with about text */}
        <div className="w-full md:w-1/2 bg-beige flex items-center px-8 py-12">
          <p className="text-xl text-neutral-900 leading-relaxed">
            My name is Franklin and I’m a fourth‐year BFA Creative Writing
            student at De Loureigh University. I am currently an intern at
            Carstell Press. I’ve spent the last two years honing my craft—
            writing editorial copy, editing manuscripts, and collaborating with
            a team of passionate creatives. Outside of school, I work on my own
            short‐form fiction and host a weekly literary podcast. I love
            exploring how good storytelling can transform how people think
            about the world.
          </p>
        </div>
      </section>

      {/* Optional: Work Experience & Qualifications sections */}
      <WorkExperience />
    </>
  );
}