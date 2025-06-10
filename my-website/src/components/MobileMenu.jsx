import React from "react";
import { Home, User, Mail, Github, Linkedin } from "lucide-react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-300
        ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={() => setMenuOpen(false)}
      />

      {/* Menu Panel */}
      <div 
        style={{ right: menuOpen ? '0' : '-350px' }}
        className={`fixed top-[39px] h-[calc(100vh-39px)] w-[350px] bg-[#e8e4df]/80 shadow-xl
          transition-all duration-300 ease-out overflow-y-auto`}
      >
        {/* Menu Content */}
        <div className="py-4">
          {/* Main Navigation */}
          <div className="mb-4">
            <h2 className="px-6 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Navigation
            </h2>
            <ul className="flex flex-col">
              <li>
                <a
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center h-10 px-4 text-base text-black hover:bg-black/5 transition-colors duration-200 cursor-pointer"
                >
                  <Home className="w-6 h-6 mr-4" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center h-10 px-4 text-base text-black hover:bg-black/5 transition-colors duration-200 cursor-pointer"
                >
                  <User className="w-6 h-6 mr-4" />
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h2 className="px-6 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact
            </h2>
            <ul className="flex flex-col">
              <li>
                <a
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center h-10 px-4 text-base text-black hover:bg-black/5 transition-colors duration-200 cursor-pointer"
                >
                  <Mail className="w-6 h-6 mr-4" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Mmonica00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center h-10 px-4 text-base text-black hover:bg-black/5 transition-colors duration-200 cursor-pointer"
                >
                  <Github className="w-6 h-6 mr-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/monica-samaan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center h-10 px-4 text-base text-black hover:bg-black/5 transition-colors duration-200 cursor-pointer"
                >
                  <Linkedin className="w-6 h-6 mr-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;