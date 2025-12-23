"use client";

import { CheckCircle } from "lucide-react";
import { motion, type Variants } from "framer-motion";

/* ===============================
   Animation Config
=================================*/
const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

const imageAnim: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

export default function ServiceAboutSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center"
        >
          {/* LEFT – IMAGE */}
          <motion.div variants={imageAnim} className="relative flex justify-center lg:justify-start">
            <div className="relative h-[500px] overflow-hidden rounded-3xl  group">
              <img
                src="https://bluemoontech.co.uk/wp-content/uploads/2024/12/business-meeting.png"
                alt="Software team working"
                className="
                  h-full w-full object-cover
                  transition-transform duration-700 ease-out
                  
                "
              />

              {/* Soft overlay for premium look */}
              <div className="absolute inset-0  opacity-0 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* RIGHT – CONTENT */}
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#0a1f44]"
            >
              <span className="h-2 w-2 rounded-full bg-[#0a1f44]" />
              About Us
              <span className="h-2 w-2 rounded-full bg-[#0a1f44]" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            >
              Turning Ideas Into <br />
              Scalable Digital Experiences
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-gray-600"
            >
              We help brands and startups transform ideas into reliable digital
              products — combining clean design, strong engineering, and
              growth-focused execution.
            </motion.p>

            <motion.div
              variants={container}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {[
                "End-to-End Product Development",
                "Modern Web & Mobile Apps",
                "Design-Led UX & Interfaces",
                "Growth Marketing & SEO",
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="
                    flex items-center gap-3 rounded-xl border
                    bg-gray-50 px-5 py-4
                    transition-shadow duration-300
                    hover:shadow-lg
                  "
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle className="h-5 w-5 text-[#0a1f44]" />
                  </motion.div>

                  <span className="text-sm font-medium text-gray-800">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
