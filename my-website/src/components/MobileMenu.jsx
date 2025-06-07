import { useEffect } from "react";
import { X } from "lucide-react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-[45px] right-[0px] w-[100%] h-screen bg-[#e8e4df]/60 backdrop-blur-md z-30 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                   `}
    >

      <nav className="flex flex-col items-center space-y-8">
        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-large text-beige-400 hover:text-beige-800 transition-colors"
        >
          Home
        </a>
        <a
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-large text-beige-400 hover:text-beige-800 transition-colors"
        >
          About
        </a>
        <a
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-large text-beige-400 hover:text-beige-800 transition-colors"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;