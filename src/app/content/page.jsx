import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-purple-500 to-blue-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We would love to hear from you! Whether you have a question about our services, need support, or just want to say hello, feel free to reach out.
            </p>
          </div>
        </header>
  
        {/* Contact Information Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Office
              </h3>
              <p className="text-gray-600 mb-4">1234 Example Street, Suite 567<br />City, State, Zip Code</p>
              <p className="text-gray-600 mb-4">Phone: (123) 456-7890</p>
              <p className="text-gray-600">Email: contact@nexthero.com</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Follow Us
              </h3>
              <div className="flex justify-center gap-4">
                <Link href="https://twitter.com/yourprofile" target="_blank">
                  <p className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-twitter text-2xl"></i>
                  </p>
                </Link>
                <Link href="https://facebook.com/yourprofile" target="_blank">
                  <p className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-facebook text-2xl"></i>
                  </p>
                </Link>
                <Link href="https://linkedin.com/in/yourprofile" target="_blank">
                  <p className="text-blue-700 hover:text-blue-900">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
  
        {/* Contact Form Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-8">Get in Touch</h2>
            <form className="max-w-3xl mx-auto">
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
  
        {/* Map Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold mb-8">Find Us</h2>
            <div className="max-w-3xl mx-auto">
              <Image
                src="https://quotefancy.com/media/wallpaper/3840x2160/6735904-Jane-Green-Quote-The-best-things-in-life-always-find-us-when-we-re.jpg"
                alt="Our Location"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
              {/* Replace with an actual map component if available */}
            </div>
          </div>
        </section>
      </div>
        
    );
};

export default page;