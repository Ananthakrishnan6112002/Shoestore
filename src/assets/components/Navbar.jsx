import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Men from "./Men";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [showmen, setShowmen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/images/logo.png" alt="SOPA Logo" className="h-8" />
          <span className="font-DMSerif text-2xl tracking-widest">SOPA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => setShowmen(true)}>Men</button>
          <a href="#">Women</a>
          <a href="#">Accessories</a>
          <a href="#">About</a>
          <button className="text-lime-400 border border-lime-400 rounded-2xl px-3 py-1 text-sm">
            Shoe Finder Quiz
          </button>
        </div>

        {/* Hamburger Button (Mobile only) */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white text-black z-50 p-6 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            className="absolute top-6 right-6 text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

          <div className="flex flex-col space-y-6 mt-12 text-lg">
            <button
              onClick={() => {
                setShowmen(true);
                setIsOpen(false);
              }}
            >
              Men
            </button>
            <a href="#" onClick={() => setIsOpen(false)}>Women</a>
            <a href="#" onClick={() => setIsOpen(false)}>Accessories</a>
            <a href="#" onClick={() => setIsOpen(false)}>About</a>
            <button className="text-lime-400 border border-lime-400 rounded-2xl px-3 py-1 text-sm">
              Shoe Finder Quiz
            </button>
          </div>
        </div>
      </nav>

      {/* Men Overlay */}
     {showmen && <Men isOpen={showmen} onClose={() => setShowmen(false)} />}

    </>
  );
};

export default Navbar;
