"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CategoriesPage = () => {
  return (
    <div className="p-12 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Explore Our Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={`/categories/${category.slug}`}>
              <div>
                <div
                  className="bg-cover bg-center h-48"
                  style={{
                    backgroundImage: `url(${category.image})`,
                  }}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Dummy data for categories
const categories = [
  {
    id: 1,
    slug: "web-development",
    title: "Web Development",
    description:
      "Explore the latest in web development including frameworks, tools, and best practices.",
    image:
      "https://cdn.dribbble.com/users/5265391/screenshots/14183222/media/e31df7c926a25f6325964945cd236658.png",
  },
  {
    id: 2,
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Discover trends, techniques, and resources for modern graphic design.",
    image:
      "https://cdn.prod.website-files.com/63a0097c0612e3dd77433b37/646f1c10726b3eb6a03c0bb6_The-Rise-of-3D-in-Graphic-Design-How-to-Incorporate-3D-Elements-in-Your-Designs.webp",
  },
  {
    id: 3,
    slug: "data-science",
    title: "Data Science",
    description:
      "Dive into data science topics, including machine learning, data analysis, and visualization.",
    image:
      "https://www.actu-environnement.com/images/illustrations/news/43173_large.jpg",
  },
  {
    id: 4,
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Learn about digital marketing strategies, SEO, and social media management.",
    image:
      "https://i.pinimg.com/736x/de/b4/92/deb49275940716d5e0d5bdaf6a3bce15.jpg",
  },
  // Add more categories as needed
];

export default CategoriesPage;
