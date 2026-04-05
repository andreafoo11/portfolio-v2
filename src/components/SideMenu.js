import React, { useEffect, useState } from "react";

const SideMenu = () => {
  const [activeSection, setActiveSection] = useState("intro");

  // List of sections and their IDs
  const sections = [
    { id: "intro", label: "Intro" },
    { id: "modelo-relaunch", label: "Modelo Relaunch" },
    { id: "modelo-b2c", label: "Modelo B2C" },
    { id: "modelo-growth", label: "Modelo Growth" },
    { id: "we-belong", label: "We Belong" },
    { id: "basil", label: "Basil" },
    { id: "t-lab", label: "T-Lab" },
    { id: "sca", label: "SCA Microservice" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-3"
          >
            <div
              className={`h-2 w-2 rounded-full transition-all duration-300
                ${
                  activeSection === section.id
                    ? "h-3 w-3 bg-ink dark:bg-white"
                    : "bg-ink/25 group-hover:bg-ink/45 dark:bg-white/30 dark:group-hover:bg-white/50"
                }`}
            />
            <span
              className={`text-sm transition-all duration-300 opacity-0 group-hover:opacity-100
                ${
                  activeSection === section.id
                    ? "text-ink dark:text-white"
                    : "text-ink/35 dark:text-white/30"
                }`}
            >
              {section.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
