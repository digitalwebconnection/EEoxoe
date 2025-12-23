
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export const services = [
  {
    id: "web-application",
    label: "Service 01",
    title: "Web Application ",
    tagline: "From idea to a full-featured, secure web platform.",
    description:
      "Exochos designs and develops custom web applications that match your exact business process.",
    imageUrl:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "mobile-application",
    label: "Service 02",
    title: "Mobile Application ",
    tagline: "Android & iOS apps built around real user journeys.",
    description:
      "We create mobile applications that feel simple for users and powerful for your business.",
    imageUrl:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "odoo",
    label: "Service 03",
    title: "Odoo ",
    tagline: "One system to manage sales, inventory, accounts and more.",
    description:
      "Exochos helps you set up Odoo as the central system for your business operations.",
    imageUrl:
      "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "digital-marketing",
    label: "Service 04",
    title: "Digital Marketing",
    tagline: "Strategy, content and campaigns designed to bring results.",
    description:
      "We focus on performance-based digital marketing to grow your brand and leads.",
    imageUrl:
      "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f4f7fb] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-0">

        {/* SECTION HEADER */}
        <div className="mb-16 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            Our Services
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
          </div>

          <h2 className="text-3xl max-w-5xl mx-auto font-bold text-gray-900 sm:text-4xl">
            Exochos turns your ideas into working digital systems that connect technology and growth.
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* ICON BADGE */}
                <div className="absolute -bottom-2 -left-2 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg transition-transform duration-300 group-hover:rotate-6">
                  <span className="text-sm font-bold">
                    {service.label.split(" ")[1]}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-6 pb-8 pt-10 transition-colors duration-300 group-hover:bg-blue-950">
                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 transition-colors duration-300 group-hover:text-blue-100">
                  {service.tagline}
                </p>

                <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* HOVER BORDER */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition duration-300 group-hover:ring-blue-400/40"></div>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
