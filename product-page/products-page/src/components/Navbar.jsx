
import React from "react";
import { productsNav } from "../data.jsx";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo / Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide drop-shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
          🛍️ Purchase<span className="text-yellow-200">Now</span>
        </h2>

        {/* Navigation Links */}
        <div className="hidden sm:flex gap-6 text-lg font-medium">
          {productsNav.map((navLink) => (
            <a
              key={navLink.id}
              href="#"
              className="relative group transition duration-300"
            >
              {navLink.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button className="text-white text-2xl focus:outline-none hover:scale-110 transition-transform duration-200">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

   



