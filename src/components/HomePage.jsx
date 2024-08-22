import Link from "next/link";

const HomePage = () => {
  return (
    <div className=" bg-gray-100">
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to NextHero
          </h1>
          <p className="text-xl mb-8">
            Discover the latest trends in web development and
            design.
          </p>
          <Link href="/blog">
            <p className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300">
              Explore Our Blog
            </p>
          </Link>
        </div>
      </header>
      {/* Featured Blogs */}
      <section className="mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-12">
          Featured Blogs
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Dummy blog data */}
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg p-6 max-w-sm"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {blog.description}
              </p>
              <Link href={`/blog/${blog.slug}`}>
                <p className="text-blue-600 hover:underline">
                  Read More
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-xl mb-8">
            Stay updated with the latest blog posts and
            announcements.
          </p>
          <form className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-800"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 px-4 py-3 rounded-lg font-semibold transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Dummy blog data
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
  // Add more blog entries here...
];

export default HomePage;
