"use client";

import { motion } from "framer-motion";
import Link from "next/link";
const Blog = () => {
  return (
    <div className="p-12 bg-gray-100 min-h-screen">
      <Link href="/blog/spesialblog">
        <p className="block max-w-sm mx-auto text-center text-2xl font-bold text-blue-500 hover:text-blue-700 transition-colors duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500 pb-2">
          Special Blogs Details
        </p>
      </Link>
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, id) => (
          <motion.div
            key={id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">
                {blog.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {blog.description}
              </p>
              <Link href={`/blog/${blog?.slug}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const blogs = [
  {
    id: 1,
    slug: "next-js-introduction",
    title: "Next.js Introduction",
    description:
      "An introduction to Next.js, a React framework for server-side rendering and static site generation.",
  },
  {
    id: 2,
    slug: "react-hooks-overview",
    title: "React Hooks Overview",
    description:
      "A comprehensive guide to understanding React hooks and their usage in functional components.",
  },
  {
    id: 3,
    slug: "tailwind-css-styling",
    title: "Tailwind CSS Styling",
    description:
      "Learn how to style your applications using Tailwind CSS, a utility-first CSS framework.",
  },
  {
    id: 4,
    slug: "javascript-es6-features",
    title: "JavaScript ES6 Features",
    description:
      "Explore the new features introduced in ECMAScript 6 and how they enhance JavaScript development.",
  },
  {
    id: 5,
    slug: "node-js-server-side",
    title: "Node.js Server-Side Development",
    description:
      "Understand the fundamentals of server-side development using Node.js and Express.",
  },
  {
    id: 6,
    slug: "graphql-basics",
    title: "GraphQL Basics",
    description:
      "A basic introduction to GraphQL, a query language for APIs, and how to implement it in your projects.",
  },
  {
    id: 7,
    slug: "web-performance-optimization",
    title: "Web Performance Optimization",
    description:
      "Techniques and best practices for optimizing the performance of web applications.",
  },
];
export default Blog;
