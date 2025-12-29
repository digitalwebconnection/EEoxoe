"use client";

import { motion, type Variants, cubicBezier } from "framer-motion";

/* -----------------------------
   Animation Variants
--------------------------------*/

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.16, 1, 0.3, 1), // ✅ FIX
    },
  },
};

const BlogHero = () => {
  return (
    <section
      className="relative min-h-[60vh] flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.intuji.com/2022/08/Software-development-digital-transformation_comp-scaled-1.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/80" />

      <motion.div
        className="relative max-w-7xl mx-auto px-0 py-20 md:py-28"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl ">
          <motion.span
            variants={fadeUp}
            className="inline-block mb-4 rounded-full bg-yellow-400/20 px-4 py-1 text-sm font-semibold text-yellow-300"
          >
            ✨ Insights • Trends • Guides
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl text-white md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Smart Ideas That Shape{" "}
            <span className="text-yellow-400">Better Decisions</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-200 mb-8"
          >
            Practical insights, industry trends, and expert opinions to help
            you stay ahead and make informed choices.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4">
            <a className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-blue-900 hover:bg-yellow-300 transition">
              Explore Blogs
            </a>
            <a className="rounded-lg border text-white border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition">
              Get Expert Advice
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogHero;
