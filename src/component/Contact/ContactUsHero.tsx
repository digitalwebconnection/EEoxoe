"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactUsHero: React.FC = () => {
  return (
    <section className="relative py-22 overflow-hidden bg-slate-900 text-white">
      {/* Animated background image */}
      <div className="absolute inset-0">
        <motion.img
          src="https://wordpress.themehour.net/webteck/wp-content/uploads/2024/02/breadcumb-bg.jpg"
          alt="Team working on software"
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1.05] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/55" />
      </div>

      {/* Floating background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-yellow-400/30 blur-3xl"
          animate={{ y: [0, 25, 0], opacity: [0.6, 0.95, 0.6] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-x-10 top-1/2 h-40 rounded-full bg-slate-900/40 blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:py-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.p
          className="text-lg font-semibold uppercase tracking-[0.2em] text-slate-200/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          Contact Éxochos
        </motion.p>

        <motion.h1
          className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          Let’s talk about your next software project.
        </motion.h1>

        <motion.p
          className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          Share your requirements and our team at Exochos will get back to you
          with the next steps.
        </motion.p>


      </motion.div>

      {/* Bottom SVG wave / design */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          className="block h-16 w-full text-white"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,165.3C672,160,768,160,864,176C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default ContactUsHero;
