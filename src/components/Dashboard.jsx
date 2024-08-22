"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseSidebar = () => setIsOpen(false);

  return (
    <div className="relative flex h-screen bg-gray-100">
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
          onClick={handleCloseSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-6 space-y-6 transform transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:w-64 lg:block`}
      >
        <div className="flex justify-between items-center lg:hidden">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <button
            onClick={handleCloseSidebar}
            className="text-white"
            aria-label="Close menu"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-2xl font-semibold hidden lg:inline-block ">
          Dashboard
        </h2>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard/overview">
                <p className="block py-2 px-4 rounded hover:bg-gray-700">
                  Overview
                </p>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/reports">
                <p className="block py-2 px-4 rounded hover:bg-gray-700">
                  Reports
                </p>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings">
                <p className="block py-2 px-4 rounded hover:bg-gray-700">
                  Settings
                </p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p className="block py-2 px-4 rounded hover:bg-gray-700">
                  Home
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="lg:hidden bg-gray-800 text-white p-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button
            onClick={() => setIsOpen(true)}
            className="text-white"
            aria-label="Open menu"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </header>

        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">
            Dashboard Overview
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Total Users
                </h3>
                <p className="text-4xl font-bold text-blue-500">
                  1,245
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Revenue
                </h3>
                <p className="text-4xl font-bold text-green-500">
                  $5,430
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Orders
                </h3>
                <p className="text-4xl font-bold text-orange-500">
                  350
                </p>
              </div>
            </motion.div>
            {/* Add more cards as needed */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
