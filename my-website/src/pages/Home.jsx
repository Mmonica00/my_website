import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      {/* Left: Hero image (50% width on md+) */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen overflow-hidden bg-gray-100">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to My Website</h1>
        </div>
      </div>

      {/* Right: Content area (50% width on md+) */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 py-12 md:py-0">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Franklin Reynolds
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          BFA Creative Writing Undergraduate
        </p>
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Email me
        </a>
      </div>
    </section>
  );
}