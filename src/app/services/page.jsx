import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our wide range of services designed to help your
            business succeed.
          </p>
        </div>
      </header>

      {/* Services Overview */}
      <section className="container mx-auto px-6 py-16 text-gray-800">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          What We Offer
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg p-6 max-w-sm"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } items-center mb-16`}
            >
              <div className="md:w-1/2 p-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {service.detailedDescription}
                </p>
                <Link href="/content">
                  <p className="text-blue-600 hover:underline">
                    Learn more about {service.title}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Get Started with Us
          </h2>
          <p className="text-xl mb-8">
            Ready to take your business to the next level? Contact
            us today to learn how we can help you achieve your
            goals.
          </p>
          <Link href="/content">
            <p className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300">
              Contact Us
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Dummy services data
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Creating responsive and modern websites.",
    icon: "https://www.opstechsolution.com/assets/images/about/web-design.png",
    image:
      "https://cdn.dribbble.com/users/5265391/screenshots/14183222/media/e31df7c926a25f6325964945cd236658.png",
    detailedDescription:
      "We offer top-notch web development services using the latest technologies. Our team specializes in creating responsive, user-friendly, and visually appealing websites that meet your business needs.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Building intuitive mobile applications.",
    icon: "https://static.vecteezy.com/system/resources/previews/006/430/483/original/flat-app-development-icon-app-coding-and-app-settings-concept-vector.jpg",
    image:
      "https://d2ms8rpfqc4h24.cloudfront.net/mobile_application_development_ad3f711b7d.jpg",
    detailedDescription:
      "Our mobile app development services include creating feature-rich and intuitive applications for both iOS and Android platforms. We focus on delivering seamless user experiences.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing engaging user interfaces.",
    icon: "https://nyusoft.com/wp-content/themes/twentytwentyone-child/images/services/UI-UX-design-services/banner-image-ui-ux.png",
    image:
      "https://media.licdn.com/dms/image/D5612AQFwV7zzF8PreQ/article-cover_image-shrink_720_1280/0/1691465286767?e=2147483647&v=beta&t=glX0RA_O8iJ1zU1rwTikBf_oGzV9csXunhc-PwZbPnU",
    detailedDescription:
      "Our design team excels in crafting engaging and user-friendly interfaces. We prioritize usability and aesthetics to ensure that your digital products are not only functional but also delightful to use.",
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    description: "Developing secure online stores.",
    icon: "https://kgntechnologies.com/wp-content/uploads/2023/09/toolzbuy869135-removebg-preview.png",
    image: "https://www.nextechar.com/hubfs/Boosting_Sales_With_3D_ECommerce..webp",
    detailedDescription:
      "We provide comprehensive e-commerce solutions, including online store setup, payment gateway integration, and custom feature development. Our goal is to help you sell your products effectively online.",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description: "Promoting your brand online.",
    icon: "https://www.elephantintheboardroom.com.au/sites/default/files/2022-08/digital-marketing__1_-removebg-preview.png",
    image: "https://assetdigitalcom.com/wp-content/uploads/2023/05/B2B-Digital-Marketing-Agency-scaled.jpeg",
    detailedDescription:
      "Our digital marketing services include SEO, social media marketing, and PPC advertising. We help you reach your target audience and grow your online presence.",
  },
  {
    id: 6,
    title: "Cloud Services",
    description: "Offering scalable cloud solutions.",
    icon: "https://static-00.iconduck.com/assets.00/cloud-service-icon-2048x1723-rjjzpblg.png",
    image: "https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing-900x600.jpg",
    detailedDescription:
      "We offer cloud services that include cloud hosting, data migration, and management. Our solutions are designed to be scalable and secure, helping you leverage the power of cloud computing.",
  },
  {
    id: 7,
    title: "IT Consulting",
    description: "Providing expert IT advice.",
    icon: "https://png.pngtree.com/png-clipart/20230824/original/pngtree-it-consulting-services-concept-icon-picture-image_8326942.png",
    image: "https://miro.medium.com/v2/resize:fit:800/0*U5rxF-b6iC2ulWYR.jpg",
    detailedDescription:
      "Our IT consulting services provide expert guidance on technology strategy, IT infrastructure, and system integration. We help you make informed decisions to achieve your business objectives.",
  },
];

export default page;
