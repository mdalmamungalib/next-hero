"use client";

import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6">
            <svg
              className="w-16 h-16 text-blue-500 animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12a8 8 0 018-8V0a12 12 0 00-12 12h4zm4-4a4 4 0 00-4 4h4V8z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-700 mb-4">Loading...</h1>
          <p className="text-lg text-gray-600">
            Please wait while we fetch the content.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingPage;
