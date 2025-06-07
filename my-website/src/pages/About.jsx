import React from "react";
import WorkExperience from "../components/WorkExperience";

export default function About() {
  return (
    <>
      <section className="flex two-col md:flex-row min-h-screen bg-[#e8e4df] items-center">
        {/* Left: Black “Hello there!” */}
        <div className="left-section left-0 w-[50%] md:w-1/2 bg-[#e8e4df] flex flex-col items-center justify-center px-8 py-12">
        <h1 className="text-[4rem] md:text-[8rem] font-serif text-black leading-[0.8] mb-[0rem]">          
            Hello there!
          </h1>
        </div>

        {/* Right: Beige background with about text */}
        <div className="right-section right-0 w-[50%] md:w-1/2 bg-[#e8e4df] flex flex-col items-center justify-center px-8 py-12">
        <p className="text-xl text-black leading-relaxed">
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