import React from "react";

export default function WorkExperience() {
  return (
    <section className="bg-lightgray py-12 px-6">
      <h2 className="text-4xl font-serif text-black text-center mb-8">
      Work Experience
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center">
          <h3 className="font-medium text-lg mb-1">
            Editorial Intern, Carstell Press
          </h3>
          <p className="text-neutral-600 text-sm">Feb 2024 – Present</p>
        </div>
        {/* Item 2 */}
        <div className="flex flex-col items-center text-center">
          <h3 className="font-medium text-lg mb-1">
            Copy Intern, Hillstreet Industries
          </h3>
          <p className="text-neutral-600 text-sm">Jul 2023 – Oct 2023</p>
        </div>
        {/* Item 3 */}
        <div className="flex flex-col items-center text-center">
          <h3 className="font-medium text-lg mb-1">
            Copy Assistant, Buckeroo & Partners
          </h3>
          <p className="text-neutral-600 text-sm">Jan 2022 – Jun 2023</p>
        </div>
      </div>
    </section>
  );
}