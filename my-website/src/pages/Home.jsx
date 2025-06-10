import React from "react";
import heroImage from "../assets/heroImage.png";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="flex two-col md:flex-row min-h-screen bg-[#e8e4df] items-center">
      {/* === Left: Hero image === */}
      <div className="left-section left-0 w-[50%] md:w-1/2 h-screen md:h-screen overflow-hidden justify-center">
        <img
          src={heroImage}
          alt="Franklin Reynolds"
          className="object-cover w-full h-full"
        />
      </div>

      {/* === Right: Taupe background with text & button === */}
      <div className="right-section right-0 w-[50%] md:w-1/2 bg-[#e8e4df] flex flex-col items-center justify-center px-8 py-12">
        <h1 className="text-[4rem] md:text-[8rem] font-serif text-black leading-[0.8] mb-[0rem]">          
          Monica Samaan
        </h1> 
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Computer Science & Engineering Undergraduate
        </p>
        <a
          href="/contact"
          className="w-[100px] h-[50px] inline-flex items-center gap-2 border border-black text-black px-6 py-3 font-medium rounded hover:bg-[#d4cfc8] hover:text-white transition"
        >
          <ArrowRight size={20} />
          Email me
        </a>
      </div>
    </section>
  );
}