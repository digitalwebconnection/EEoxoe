import React from "react";
import { motion } from "framer-motion";
// import heroImg from "../assets/project-hero.png"; // make sure this file exists

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f9ff] text-[#262755]">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#262755]/10 to-[#ffd740]/20" />

      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14 lg:px-0">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT TEXT CONTENT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-extrabold leading-tight md:text-6xl"
            >
              We Build <span className="text-[#ffd740]">Impactful</span>
              <br />
              Digital Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-5 max-w-xl text-lg text-[#262755]/80"
            >
              From concept to deployment — our team delivers modern, scalable
              and user-focused digital solutions tailored to your business.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex gap-4"
            >
              <button className="rounded-full bg-[#262755] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#ffd740] hover:text-[#262755]">
                View Projects
              </button>

              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#262755] ring-1 ring-[#262755] transition-all hover:bg-[#ffd740]/20">
                Get a Quote
              </button>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE OR SHOWCASE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/sites/www.builtin.com/files/2023-05/largest%20software%20companies.jpg"
              alt="Projects Showcase"
              className="rounded-3xl shadow-xl ring-2 ring-[#262755]/10"
            />

            {/* Floating Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="absolute -bottom-6 -left-6 w-40 rounded-xl bg-white p-4 text-sm shadow-lg ring-1 ring-gray-800/50"
            >
              <p className="font-bold text-[#262755]">50+ Projects</p>
              <p className="text-xs text-gray-500">Delivered Successfully</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="absolute top-4 -right-6 w-40 rounded-xl bg-white p-4 text-sm shadow-lg ring-1 ring-gray-800/50"
            >
              <p className="font-bold text-[#262755]">Trusted by 30+ Brands</p>
              <p className="text-xs text-gray-500">Across 7 Regions</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
