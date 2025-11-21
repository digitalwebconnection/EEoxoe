import React from "react";
import { motion, type Variants } from "framer-motion";

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  {
    src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/openai-icon.png",
    alt: "OpenAI",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s",
    alt: "Google",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    alt: "TensorFlow",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMGPiFs5SYXY6mkKcTIQWDHaoijHwXhNqeg&s",
    alt: "Microsoft Loop",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vpn5kgG_HOT4bK9KnvcE3SpgsAvqoP9sNA&s",
    alt: "Microsoft Edge",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/250px-Firefox_logo%2C_2019.svg.png",
    alt: "Firefox",
  },
  {
    src: "https://images.seeklogo.com/logo-png/44/1/nvidia-logo-png_seeklogo-443363.png",
    alt: "NVIDIA",
  },
  {
    src: "https://icon2.cleanpng.com/lnd/20250227/oj/3097474f030647ff3ddecef3e542e0.webp",
    alt: "Databricks",
  },
];

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ProgramsSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
        {/* Left copy */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.p
            variants={item}
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#262755]/60"
          >
            COLLABORATION TOOLS
          </motion.p>

          <motion.h2
            variants={item}
            className="mb-5 text-4xl font-extrabold leading-[1.05] text-[#262755] md:text-6xl"
          >
            Programs For Modern{" "}
            <br className="hidden md:block" />
            Software Agencies
          </motion.h2>

          <motion.p
            variants={item}
            className="mb-8 max-w-xl text-base text-[#262755]/70 md:text-lg"
          >
            Provides deadlines, task dependencies, and integrations to assist
            teams in managing and coordinating tasks and projects. These
            initiatives aid in streamlining operations for contemporary
            agencies.
          </motion.p>

          {/* Email capture */}
          <motion.div
            variants={item}
            className="flex w-full max-w-xl items-center gap-3"
          >
            <div className="flex-1 rounded-full bg-white px-5 py-3 text-sm text-[#262755] shadow-sm ring-1 ring-[#262755]/85">
              <input
                className="w-full bg-transparent outline-none placeholder:text-[#262755]/40"
                placeholder="Enter your mail…"
                type="email"
              />
            </div>
            <button
              type="button"
              className="rounded-full bg-[#ffd740] px-6 py-3 text-sm font-semibold text-[#262755] transition hover:bg-[#ffd740]/90"
            >
              Try for free
            </button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-4 flex items-center gap-2 text-sm text-[#262755]/60"
          >
            <span className="inline-block size-2 rounded-full bg-green-400" />
            2,000+ people started a free trial in the last 30 days
          </motion.div>
        </motion.div>

        {/* Right orbit */}
        <div className="relative flex items-center justify-center">
          {/* Orbit container – fixed, not huge */}
          <div className="relative h-80 w-[320px] md:h-[380px] md:w-[380px]">
            {/* Outer rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200" />
            <div className="absolute inset-6 md:inset-8 rounded-full border border-gray-200" />

            {/* Soft inner halo */}
            <div
              className="absolute inset-12 md:inset-14 rounded-full"
              style={{
                boxShadow: "inset 0 0 80px 10px rgba(38,39,85,0.08)",
              }}
            />

            {/* Center disk */}
            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-center ring-1 ring-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:h-40 md:w-40">
              <span className="text-xl font-black tracking-wide text-[#262755] md:text-2xl">
                SAASOFT
              </span>
            </div>

            {/* Rotating frame */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 28,
                ease: "linear",
              }}
            >
              {logos.map((logo, i) => {
                const angle = (i / logos.length) * 360;
                const radius = 120; // smaller radius so everything stays inside
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={logo.alt}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    {/* Counter-rotate so logos stay upright */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 28,
                        ease: "linear",
                      }}
                      className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-gray-900/60 shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:h-16 md:w-16"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        width={36}
                        height={36}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
