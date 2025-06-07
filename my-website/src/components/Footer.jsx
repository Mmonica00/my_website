import React from "react";

export default function Footer() {
  return (
    <footer className="bg-beige border-t border-neutral-200 mt-16">
      <div className="container mx-auto px-6 py-4 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} Monica Samaan. All rights reserved.
      </div>
    </footer>
  );
}