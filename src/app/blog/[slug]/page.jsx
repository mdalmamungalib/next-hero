import React from "react";

const page = ({ params }) => {
  const blog = blogs.find((blog) => blog.slug === params?.slug);

  if (!blog) {
    return <div className="p-6">Blog post not found.</div>;
  }

  const { title, description } = blog;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-700">{description}</p>
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

export default page;
