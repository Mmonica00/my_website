import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-black/90 backdrop-blur-md border-b border-white/20 shadow-xl">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="font-mono text-2xl font-bold text-white hover:text-blue-400 transition-colors">
              {" "}
              pedro<span className="text-blue-500">.tech</span>{" "}
            </a>

            {/* Mobile menu button - only visible on small screens */}
            <button
              className="md:hidden w-8 h-8 relative cursor-pointer z-40 text-white hover:text-blue-400 transition-colors flex items-center justify-center"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop navigation - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-200 hover:text-blue-400 transition-colors font-medium text-lg py-2"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-200 hover:text-blue-400 transition-colors font-medium text-lg py-2"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-200 hover:text-blue-400 transition-colors font-medium text-lg py-2"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}

export default Navbar;