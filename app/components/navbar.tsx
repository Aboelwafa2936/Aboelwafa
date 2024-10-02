"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("Home");

  useEffect(() => {
    // Ensure we're in the browser environment
    if (typeof window !== "undefined") {
      // Check if we're at the top of the page on initial load
      const updateActiveSection = () => {
        if (window.scrollY === 0) {
          setActiveSection("Home");
          localStorage.setItem("activeSection", "Home");
        } else {
          links.forEach((link) => {
            const section = document.querySelector(link.hash);
            if (section) {
              const rect = section.getBoundingClientRect();
              if (rect.top <= 100 && rect.bottom >= 100) {
                setActiveSection(link.name);
                localStorage.setItem("activeSection", link.name); // Save to localStorage
              }
            }
          });
        }
      };

      // Initialize active section on mount
      updateActiveSection();

      // Add scroll event listener
      window.addEventListener("scroll", updateActiveSection);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("scroll", updateActiveSection);
      };
    }
  }, []);

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    localStorage.setItem("activeSection", section); // Save to localStorage
  };

  return (
    <>
      <header className="z-[999] relative">
        <motion.div
          className="dark:bg-gray-950 dark:border-gray-950 fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>

        <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex list-none w-[22rem] flex-wrap items-center text-[0.9rem] font-medium text-gray-500 justify-center gap-y-1 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link, index) => (
              <motion.li
                key={index}
                className="h-3/4 flex justify-center items-center relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  data-id={link.name}
                  onClick={() => handleLinkClick(link.name)} // Update on click
                  href={link.hash}
                  className={`${
                    activeSection === link.name ? "text-gray-950 dark:text-gray-700" : ""
                  } flex items-center justify-center w-full px-3 py-3 hover:text-gray-950 transition-all dark:hover:text-gray-700`}
                >
                  {link.name}
                  {activeSection === link.name && (
                    <motion.span
                      layoutId="activeLink"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}


