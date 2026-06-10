import React from "react";
import { motion, type Variants } from "framer-motion";

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
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const logos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    w: 90,
    h: 28,
    alt: "Google",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    w: 30,
    h: 30,
    alt: "Apple",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Corporate_logo.svg",
    w: 60,
    h: 30,
    alt: "Adobe",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    w: 80,
    h: 28,
    alt: "Figma",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
    w: 90,
    h: 20,
    alt: "YouTube",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    w: 80,
    h: 28,
    alt: "Meta",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    w: 80,
    h: 28,
    alt: "Netflix",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    w: 30,
    h: 30,
    alt: "Spotify",
  },
];

const WorkflowSection: React.FC = () => {
  return (
    <section className="relative bg-white px-4 py-10 sm:px-6 lg:px-8 md:py-12">
      {/* soft split background tint */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#fffef6] via-white to-white" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-16 text-center"
        >
          <motion.p
            variants={item}
            className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#262755]/60"
          >
            USER-CENTERED DESIGN
          </motion.p>
          <motion.h2
            variants={item}
            className="mb-4 text-4xl font-extrabold text-[#262755] md:text-6xl"
          >
            Efficient Workflows With{" "}
            <span className="text-[#ffd740]">High-Quality</span>
          </motion.h2>
          <motion.p
            variants={item}
            className="mx-auto max-w-2xl text-[#262755]/70"
          >
            Ship faster with clear metrics and reusable building blocks.
          </motion.p>
        </motion.div>

        {/* Stats cards */}
        <div className="relative">
          {/* Prev/Next buttons (non-functional placeholders) */}
          <button className="absolute left-0 top-1/2 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 ring-1 ring-[#262755]/10 shadow-sm hover:bg-white md:flex">
            <span className="-ml-0.5 text-[#262755]">←</span>
          </button>
          <button className="absolute right-0 top-1/2 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 ring-1 ring-[#262755]/10 shadow-sm hover:bg-white md:flex">
            <span className="ml-0.5 text-[#262755]">→</span>
          </button>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mb-14 grid gap-6 md:grid-cols-3 md:gap-8"
          >
            {[
              {
                value: ">1.30M",
                labelTop: "Views",
                copy: "Grow your audience with content that resonates and converts.",
                tint: "bg-[#ffeef4] ring-[#ffd740]/20",
                logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Quora_logo_2015.svg",
              },
              {
                value: "3x",
                labelTop: "Faster time to launch",
                copy: "Ship MVPs quicker with our templates and SDKs.",
                tint: "bg-[#fff9de] ring-[#ffd740]/25",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Zuddl_logo.svg",
              },
              {
                value: "4x",
                labelTop: "Faster speed to market",
                copy: "Automate reviews, QA, and rollouts with guardrails.",
                tint: "bg-[#eafff4] ring-[#ffd740]/20",
                logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Madgicx_logo.svg",
              },
            ].map((card) => (
              <motion.div
                key={card.labelTop}
                variants={item}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Card replacement */}
                <div
                  className={`rounded-2xl border border-gray-200 p-8 text-center ring-1 shadow-sm ${card.tint}`}
                >
                  <p className="mb-1 text-5xl font-extrabold text-[#262755]">
                    {card.value}
                  </p>
                  <p className="mb-3 text-sm font-bold text-[#262755]">
                    {card.labelTop}
                  </p>
                  <p className="mb-6 text-[#262755]/70">{card.copy}</p>
                  {card.logo && (
                    <div className="relative mx-auto h-6 w-24 opacity-80">
                      <img
                        src={card.logo}
                        alt="logo"
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider label */}
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#262755]/60">
            YOUR APP AT A GLANCE
          </p>
        </div>

        {/* Logos marquee */}
        <div className="relative overflow-hidden rounded-2xl bg-[#262755]/5 p-4 ring-1 ring-[#262755]/10">
          <div className="mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <ul className="flex items-center gap-10 animate-marquee">
              {logos.concat(logos).map((l, i) => (
                <li
                  key={`${l.alt}-${i}`}
                  className="flex h-10 shrink-0 items-center justify-center"
                >
                  <div className="flex items-center justify-center rounded-full bg-white px-5 py-2 ring-1 ring-gray-200 shadow-sm">
                    <img
                      src={l.src}
                      alt={l.alt}
                      width={l.w}
                      height={l.h}
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* marquee animation CSS */}
      <style>{`
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default WorkflowSection;
