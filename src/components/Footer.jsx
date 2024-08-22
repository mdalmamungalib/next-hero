"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.includes("dashboard")) {
    return null;
  }
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <!-- Logo and Description --> */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2">NextHero</h1>
          <p className="text-gray-400">
            Your trusted source for Next.js tutorials and resources.
            Building the web, one component at a time.
          </p>
        </div>
        {/* <!-- Navigation Links --> */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="/content" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Social Media and Contact --> */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">
            Connect With Us
          </h2>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="text-gray-400">1234 Main St, City, Country</p>
          <p className="text-gray-400">
            Email:{" "}
            <a
              href="mailto:info@nexthero.com"
              className="hover:text-white"
            >
              info@nexthero.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        <p>&copy; 2024 NextHero. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
