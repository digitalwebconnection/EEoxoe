import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden text-[#262755]">
      {/* ===== Background Image with subtle motion ===== */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://d2ms8rpfqc4h24.cloudfront.net/software_product_development_d00ced022e.jpg')",
        }}
      />

      {/* ===== Gradient Overlay (animated) ===== */}
      <motion.div
        animate={{ opacity: [0.75, 0.9, 0.75] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-20 bg-[#000000]/40 "
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-28 lg:px-0">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* ===== LEFT CONTENT ===== */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#262755]/70 shadow-sm ring-1 ring-[#262755]/10"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#21c55d]" />
              Building scalable digital products
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-extrabold leading-tight md:text-6xl text-white"
            >
              We Build <span className="text-[#ffd740]">Impactful</span>
              <br />
              Excelint- CRM Portal for Agents
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-5 max-w-xl text-lg text-white "
            >
              From concept to deployment — we deliver modern, scalable and
              user-focused digital solutions tailored to your business.
            </motion.p>

            {/* ===== CTA ===== */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button className=" px-9 py-3 rounded-full bg-[#262755] text-sm font-semibold text-white transition-all duration-300 hover:scale-110 hover:bg-[#ffd740] hover:text-[#262755] hover:shadow-lg hover:shadow-[#ffd740]/50">
                View Projects
              </button>

              
            </motion.div>
          </div>

          {/* ===== RIGHT SHOWCASE ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative pt-10"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/sites/www.builtin.com/files/2023-05/largest%20software%20companies.jpg"
                alt="Projects Showcase"
                className="rounded-3xl shadow-2xl shadow-yellow-500/20 ring-2 ring-[#262755]/30"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
