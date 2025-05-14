import { Link } from "gatsby";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResumeClick = () => {
    window.open(`${__PATH_PREFIX__}/AndreaFooResume.pdf`, "_blank");
  };

  return (
    <nav className="py-4 px-4 fixed top-0 left-0 right-0 z-50 bg-[#151515]">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end pr-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center gap-8 py-4 text-lg absolute top-16 left-0 right-0 bg-[#151515] shadow-lg`}
      >
        <li>
          <Link to="/" className="hover:text-gray-400">
            WORK
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">
            ABOUT
          </Link>
        </li>
        <li>
          <button
            onClick={handleResumeClick}
            className="hover:text-gray-400 cursor-pointer"
          >
            RESUME
          </button>
        </li>
      </ul>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-16 justify-end items-center pr-16 text-lg">
        <li>
          <Link to="/" className="hover:text-gray-400">
            WORK
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">
            ABOUT
          </Link>
        </li>
        <li>
          <button
            onClick={handleResumeClick}
            className="hover:text-gray-400 cursor-pointer"
          >
            RESUME
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
