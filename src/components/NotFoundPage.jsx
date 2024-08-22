"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link href="/">
          <p className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Go Home
          </p>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
