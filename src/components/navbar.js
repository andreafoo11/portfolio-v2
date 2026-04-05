import { Link, withPrefix } from "gatsby";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResumeClick = () => {
    window.open(withPrefix(`/AndreaFooResume.pdf`), "_blank");
  };

  const linkClass =
    "text-ink transition-colors hover:text-ink-muted dark:hover:text-gray-300";

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-ink/10 bg-page/90 px-4 py-4 backdrop-blur-md dark:border-white/10 dark:bg-page/90">
      <div className="flex items-center justify-end gap-4 pr-2 md:gap-6 md:pr-16">
        <ul className="hidden items-center gap-16 text-lg md:flex">
          <li>
            <Link to="/" className={linkClass}>
              WORK
            </Link>
          </li>
          <li>
            <Link to="/about" className={linkClass}>
              ABOUT
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={handleResumeClick}
              className={`cursor-pointer ${linkClass}`}
            >
              RESUME
            </button>
          </li>
        </ul>

        <ThemeToggle />

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-ink focus:outline-none dark:text-white"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-6 w-6"
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
      </div>

      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center gap-8 border-t border-ink/10 bg-page py-6 text-lg dark:border-white/10`}
      >
        <li>
          <Link to="/" className={linkClass} onClick={() => setIsMenuOpen(false)}>
            WORK
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={linkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              handleResumeClick();
              setIsMenuOpen(false);
            }}
            className={`cursor-pointer ${linkClass}`}
          >
            RESUME
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
