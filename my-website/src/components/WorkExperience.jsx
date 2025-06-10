import React from "react";
import Valeo from "../assets/Valeo.png";
import CDT from "../assets/CDT.png"


export default function WorkExperience() {
  return (
    <section className="flex flex-col min-h-screen bg-lightgray ">
      <div className="w-screen h-[10rem] top-[4rem] flex items-center justify-center  pt-40">
      <h1 className="text-[3rem] md:text-[4rem] font-serif text-black leading-[0.8] mb-[1rem]">
        Work Experience
      </h1>
      </div>
      <div className="flex two-col md:flex-row items-center flex-grow">
        {/* Item 1 */}
        <div className="left-section left-0 w-[50%] md:w-1/2 flex flex-col items-center justify-center">
        <img
          src={Valeo}
          alt="Valeo"
          className="object-cover w-[400px] md:w-1/2 h-[192px]"
        />
          <h3 className="font-medium text-lg mb-1">
            Software Engineering Intern, Valeo Egypt
          </h3>
          <p className="text-neutral-600 text-sm">July 2024 – August 2024</p>
        </div>
        {/* Item 2 */}
        <div className="right-section right-0 w-[50%] md:w-1/2 flex flex-col items-center justify-center">
        <img
          src={CDT}
          alt="CDT solutions"
          className=" object-cover w-[400px] md:w-1/2 h-[192px]"
        />
          <h3 className="font-medium text-lg mb-1">
            .Net Developer Intern, CDT Solutions
          </h3>
          <p className="text-neutral-600 text-sm">Jul 2023 – August 2023</p>
        </div>
      </div>
    </section>
  );
}