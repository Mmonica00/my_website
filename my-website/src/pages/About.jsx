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
        I'm Monica Samaan, a third-year Computer Engineering student at the German University in Cairo, passionate about software development and innovation. With a 3.7 GPA, I'm eager to apply my skills to real-world tech challenges and drive positive change.
          </p>
        </div>
      </section>

      {/* Optional: Work Experience & Qualifications sections */}
      <WorkExperience />
    </>
  );
}