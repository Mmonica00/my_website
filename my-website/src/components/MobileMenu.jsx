import { useEffect } from "react";
import { X } from "lucide-react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-30 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors"
        aria-label="Close Menu"
      >
        <X size={24} />
      </button>

      <nav className="flex flex-col items-center space-y-8">
        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-medium text-white hover:text-blue-400 transition-colors"
        >
          Home
        </a>
        <a
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-medium text-white hover:text-blue-400 transition-colors"
        >
          About
        </a>
        <a
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-medium text-white hover:text-blue-400 transition-colors"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;