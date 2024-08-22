"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/content" },
    { title: "Categories", path: "/categories" },
    { title: "Dashboard", path: "/dashboard" },
  ];

  // Close the menu when the escape key is pressed
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  if(pathname.includes("dashboard")){
    return null
  }

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-3xl font-bold text-white">
          <Link href="/">NextHero</Link>
        </div>

        {/* Hamburger Icon and Navigation Links */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Navigation Links */}
        <ul
          className={`fixed top-0 right-0 w-2/3 h-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg p-4 transform transition-transform duration-300 ease-in-out lg:relative lg:flex lg:space-x-6 lg:items-center lg:w-auto lg:h-auto lg:p-0 lg:bg-transparent z-20 ${
            isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          } lg:bg-none lg:shadow-none`}
        >
          {links.map((link, key) => (
            <li key={key} className="lg:inline-block">
              <Link
                href={link.path}
                className={`text-lg font-medium transition-transform transform ${
                  pathname === link.path
                    ? "text-white scale-105 border-b-2 border-white"
                    : "text-gray-200 hover:text-white hover:scale-110"
                } duration-200 ease-in-out block p-2`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
