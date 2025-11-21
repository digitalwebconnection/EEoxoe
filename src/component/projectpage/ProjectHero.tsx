import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#b3b3b3] text-[#262755]">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-[#262755]/8 via-[#ffd740]/10 to-white" />

      {/* Soft blurred orbs */}
      <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-64 w-64 rounded-full bg-[#262755]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-56 w-56 rounded-full bg-[#ffd740]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#262755]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-0">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT TEXT CONTENT */}
          <div>
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#262755]/70 shadow-sm ring-1 ring-[#262755]/10"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#21c55d]" />
              Building scalable digital products
            </motion.div>

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
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button className="rounded-full bg-[#262755] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#262755]/40 transition-all hover:-translate-y-0.5 hover:bg-[#ffd740] hover:text-[#262755]">
                View Projects
              </button>

              <button className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#262755] ring-1 ring-[#262755] transition-all hover:-translate-y-0.5 hover:bg-[#ffd740]/15">
                Get a Quote
              </button>

              {/* Small inline reassurance */}
              <span className="text-xs text-[#262755]/60">
                No spam. Just thoughtful solutions for your next project.
              </span>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-6 text-sm text-[#262755]/70"
            >
              <div>
                <p className="text-base font-semibold text-[#262755]">50+ </p>
                <p className="text-xs uppercase tracking-wide">
                  digital products shipped
                </p>
              </div>
              <div>
                <p className="text-base font-semibold text-[#262755]">7+ yrs</p>
                <p className="text-xs uppercase tracking-wide">
                  of product experience
                </p>
              </div>
              <div>
                <p className="text-base font-semibold text-[#262755]">98%</p>
                <p className="text-xs uppercase tracking-wide">
                  client retention rate
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE OR SHOWCASE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* subtle floating animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/sites/www.builtin.com/files/2023-05/largest%20software%20companies.jpg"
                alt="Projects Showcase"
                className="rounded-3xl shadow-xl ring-2 ring-[#262755]/10"
              />
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              whileHover={{ y: -4 }}
              className="absolute -bottom-6 -left-6 w-40 rounded-xl bg-white p-4 text-sm shadow-lg ring-1 ring-gray-800/40"
            >
              <p className="font-bold text-[#262755]">50+ Projects</p>
              <p className="mt-1 text-xs text-gray-500">Delivered successfully</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              whileHover={{ y: -4 }}
              className="absolute top-4 -right-6 w-44 rounded-xl bg-white p-4 text-sm shadow-lg ring-1 ring-gray-800/40"
            >
              <p className="font-bold text-[#262755]">Trusted by 30+ brands</p>
              <p className="mt-1 text-xs text-gray-500">Across 7+ regions</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
