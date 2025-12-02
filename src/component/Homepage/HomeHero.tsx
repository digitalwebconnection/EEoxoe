import React from "react";
import { Play, ArrowRight, BarChart2, Code } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// Animation Variants for staggered content
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

// Card Animation Variants (for the right side)
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: 50, rotate: -5 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

// Circular Badge Animation Variants
const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.1, rotate: 90 },
  show: {
    opacity: 1,
    scale: 1.1,
    rotate: 0,
    transition: { duration: 0.1, type: "spring", stiffness: 200 },
  },
};

// Background blob animation variants (using easing array instead of string)
const blobVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    x: [0, 10, 0],
    y: [0, -10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1], // similar to easeInOut
    },
  },
};

// Floating animation for cards
const floatingVariants: Variants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

interface CircularPlayBadgeProps {
  className?: string;
  variants: Variants;
}

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-8 md:pt-30">
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          variants={blobVariants}
          animate="animate"
          className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-linear-to-br from-[#E8F4FF] to-[#F7E9FF] blur-3xl opacity-80"
        />
        <motion.div
          variants={blobVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-linear-to-tr from-[#FFF0E1] to-[#EAF7FF] blur-3xl opacity-70"
        />
      </div>

      {/* Main Content Grid */}
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* LEFT: copy + CTAs */}
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          {/* Pre-Header */}
          <motion.p
            variants={itemVariants}
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-slate-500"
          >
            BUILDING SOFTWARE, BUILDING SUCCESS
          </motion.p>

          {/* H1 Title */}
          <motion.h1
            variants={itemVariants}
            className="mb-4 font-extrabold leading-[1.1] text-[#262755] text-4xl sm:text-5xl md:text-6xl"
          >
            Transform Ideas<br />
            <span className="text-[#FDD53D]">Into Powerful</span><br />
            <span>Digital Solutions</span>
          </motion.h1>


          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-xl text-lg text-slate-600"
          >
            We turn your ideas into high-performance software built for scalability and business growth. At EXOCHOS, our experts blend technology and creativity to deliver solutions that give you a competitive edge.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button className="h-12 rounded-full bg-[#262755] px-6 text-sm font-semibold text-white transition hover:bg-[#1b1e48]">
              Get Started
            </button>
            <button className="inline-flex h-12 items-center rounded-full px-6 text-sm font-semibold text-[#262755] transition hover:bg-[#262755]/5">
              Know More <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT: decorative badge + overlapping cards */}
        <div className="relative mx-auto w-full max-w-2xl">
          {/* Circular text badge with play */}
          <CircularPlayBadge
            className="absolute  -right-6 -top-7 z-10 hidden sm:block"
            variants={badgeVariants}
          />

          {/* big card: Digital Marketing */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            className="relative z-0 -top-28 ml-auto w-[80%] rounded-3xl border border-slate-500/50 bg-white/90 p-6 shadow-2xl shadow-black/80 backdrop-blur sm:p-7"
          >
            <motion.div variants={floatingVariants} animate="float" className="h-full">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#1C2250]">software development  </h3>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#262755]">
                  <BarChart2 className="h-4 w-4" />
                  Read More
                </span>
              </div>
              <p className="mb-5 max-w-[34ch] text-sm text-slate-600">
                Websites & media that move users to action. Plans and creatives that+
                scale.
              </p>

              {/* Illustration Placeholder — image fills the whole box */}
              <div className="relative grid grid-cols-12 items-center gap-3 rounded-2xl border border-slate-500 bg-linear-to-br from-slate-50 to-purple-50 p-0 overflow-hidden">
                {/* left: image (fills) */}
                <div className="col-span-12 w-full h-40 sm:h-36 md:h-44 lg:h-52 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dbyrbuqbg/image/upload/v1742114306/web-dev-banner_gyciet.png"
                    alt="Illustration"
                    className="w-full h-full object-cover object-center block"
                    loading="lazy"
                  />
                </div>


              </div>


              <div className="mt-2 text-center text-xs text-slate-500" />
            </motion.div>
          </motion.div>

          {/* Programming card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.6 }}
            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            className="absolute bottom-0 left-0 w-[68%] rounded-3xl border border-slate-800/50 bg-white p-3 shadow-2xl shadow-black/80 sm:p-5"
          >
            <motion.div
              variants={floatingVariants}
              animate="float"
              transition={{ delay: 1 }}
              className="h-full"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#1C2250]">Programming</h3>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#262755]">
                  <Code className="h-4 w-4" />
                  Read More
                </span>
              </div>

              <p className="mb-1 max-w-[50ch] text-sm text-slate-600">
                Modern stacks, clean patterns & scalable codebase.
              </p>

              {/* Illustration Placeholder — image fills the whole box */}
              <div className="relative grid grid-cols-12 items-center gap-3 rounded-2xl border border-slate-500 bg-linear-to-br from-slate-50 to-purple-50 p-0 overflow-hidden">
                {/* left: image (fills) */}
                <div className="col-span-12 h-20 sm:h-24 md:h-28 lg:h-32 overflow-hidden">
                  <img
                    src="https://www.bmcoder.com/storage/images/4.jpg"
                    alt="Illustration"
                    className="w-full h-full object-cover object-center block"
                    loading="lazy"
                  />
                </div>


              </div>
              <div className="mt-2 text-center text-xs text-slate-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/**
 * Circular text badge with a centered play button.
 */
const CircularPlayBadge: React.FC<CircularPlayBadgeProps> = ({
  className = "",
  variants,
}) => {
  const text = " THE INTELLIGENCE REVOLUTION WITH AI •";
  const repeated = Array(6).fill(text).join("");

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className={`relative h-40 w-40 ${className}`}
    >
      {/* circle outline */}
      <div className="absolute inset-0 rounded-full bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur" />

      {/* circular text via SVG */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        style={{ overflow: "visible" }} // <-- important so text isn’t clipped
      >
        <defs>
          {/* slightly smaller radius so text sits further inside */}
          <path
            id="circlePath"
            d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          />
        </defs>

        <motion.text
          fill="#1C2250"
          fontSize="10"
          fontWeight={700}
          letterSpacing="1.5"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <textPath href="#circlePath">{repeated}</textPath>
        </motion.text>
      </svg>

      {/* play button */}
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#262755] text-white shadow-md transition"
        aria-label="Play"
      >
        <Play className="mx-auto h-5 w-5" />
      </motion.button>
    </motion.div>
  );
};

export default HeroSection;
