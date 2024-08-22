import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn more about our company, our mission, and the
            talented team that drives our success.
          </p>
        </div>
      </header>

      {/* Company Overview */}
      <section className="container mx-auto px-6 py-16 text-gray-800">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Our Story
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
          Founded in 2024, NextHero has been at the forefront of web
          development, providing cutting-edge solutions and
          innovative designs. Our journey started with a simple
          goal: to empower businesses with technology that drives
          success. Over the years, we've grown into a passionate
          team of experts dedicated to delivering exceptional
          results for our clients.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-8">
            Our Mission
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            At NextHero, our mission is to innovate and inspire. We
            believe in the power of technology to transform
            businesses and lives. Our goal is to create digital
            experiences that are not only beautiful but also
            functional, scalable, and user-friendly.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-16 text-gray-800">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Meet the Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-lg rounded-lg p-6 max-w-sm"
            >
              <div className="w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {member.name}
              </h3>
              <p className="text-gray-600 text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Join Our Journey
          </h2>
          <p className="text-xl mb-8">
            We are always looking for talented individuals to join
            our team. If you're passionate about web development and
            want to be part of a dynamic company, get in touch!
          </p>
          <Link href="/contact">
            <p className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300">
              Contact Us
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Dummy team members data
const teamMembers = [
  {
    id: 1,
    name: "Jane Doe",
    role: "CEO & Founder",
    image: "https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Chief Technology Officer",
    image:
      "https://t4.ftcdn.net/jpg/04/78/09/03/360_F_478090301_WFqaTlDzHaY2eXwz6I00xcgwqpVsAVLO.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Lead Designer",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/036/751/168/small_2x/ai-generated-face-portrait-manager-and-happy-black-woman-business-leader-or-employee-smile-for-startup-photo.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Marketing Director",
    image:
      "https://www.realmenrealstyle.com/wp-content/uploads/2023/08/Attractive-Older-Men-Are-Confident.jpg",
  },
  // Add more team members as needed
];

export default page;
