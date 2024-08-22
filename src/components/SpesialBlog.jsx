"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SpesialBlog = () => {
  return (
    <div className="p-12 bg-gray-100 min-h-screen">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        Special Blogs
      </h1>
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
              <Link href={`/blog/spesialblog/${blog?.id}`}>
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
    specialFeature: {
      title: "Why Choose Next.js?",
      description:
        "Next.js offers automatic server rendering and code splitting, which enhances performance and SEO. Learn how these features can benefit your project.",
    },
  },
  {
    id: 2,
    slug: "react-hooks-overview",
    title: "React Hooks Overview",
    description:
      "A comprehensive guide to understanding React hooks and their usage in functional components.",
    specialFeature: {
      title: "Mastering Hooks",
      description:
        "Hooks are essential for managing state and side effects in functional components. Explore advanced hook patterns to streamline your React applications.",
    },
  },
  {
    id: 3,
    slug: "tailwind-css-styling",
    title: "Tailwind CSS Styling",
    description:
      "Learn how to style your applications using Tailwind CSS, a utility-first CSS framework.",
    specialFeature: {
      title: "Tailwind Tips",
      description:
        "Discover best practices and tips for using Tailwind CSS to create beautiful, responsive designs with minimal effort.",
    },
  },
  {
    id: 4,
    slug: "javascript-es6-features",
    title: "JavaScript ES6 Features",
    description:
      "Explore the new features introduced in ECMAScript 6 and how they enhance JavaScript development.",
    specialFeature: {
      title: "ES6 Essentials",
      description:
        "Learn about the key features of ES6, including arrow functions, classes, and template literals, that make JavaScript more powerful and expressive.",
    },
  },
  {
    id: 5,
    slug: "node-js-server-side",
    title: "Node.js Server-Side Development",
    description:
      "Understand the fundamentals of server-side development using Node.js and Express.",
    specialFeature: {
      title: "Node.js Advantages",
      description:
        "Explore the benefits of using Node.js for server-side development, including its non-blocking I/O model and vibrant ecosystem of modules.",
    },
  },
  {
    id: 6,
    slug: "graphql-basics",
    title: "GraphQL Basics",
    description:
      "A basic introduction to GraphQL, a query language for APIs, and how to implement it in your projects.",
    specialFeature: {
      title: "GraphQL vs REST",
      description:
        "Compare GraphQL with traditional REST APIs and understand why GraphQL might be the better choice for modern web applications.",
    },
  },
  {
    id: 7,
    slug: "web-performance-optimization",
    title: "Web Performance Optimization",
    description:
      "Techniques and best practices for optimizing the performance of web applications.",
    specialFeature: {
      title: "Performance Tips",
      description:
        "Discover actionable tips for improving your web app’s performance, including caching strategies, lazy loading, and efficient asset management.",
    },
  },
];

export default SpesialBlog;
