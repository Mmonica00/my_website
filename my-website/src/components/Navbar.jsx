import { useState,useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";
import MobileMenu from "./MobileMenu";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-[#e8e4df] backdrop-blur-md border-b border-[#e8e4df] shadow-sm">
        <div className="max-w-screen mx-auto px-4">
          <div className="flex justify-between items-center h-32">
            <a href="/" className="font-mono text-4xl font-bold text-[#2c2c2c] hover:text-[#4a4a4a] transition-colors">
              {" "}
            </a>

            {/* Mobile menu button - only visible on small screens */}
            <button
              className="lg:hidden w-12 h-12 relative cursor-pointer z-40 text-[#2c2c2c] hover:text-[#4a4a4a] transition-colors flex items-center justify-center"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Desktop navigation - hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-[#2c2c2c] hover:text-[#4a4a4a] transition-colors font-medium text-2xl py-4"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-[#2c2c2c] hover:text-[#4a4a4a] transition-colors font-medium text-2xl py-4"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-[#2c2c2c] hover:text-[#4a4a4a] transition-colors font-medium text-2xl py-4"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;