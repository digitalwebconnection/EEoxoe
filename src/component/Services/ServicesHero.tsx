"use client";

import React, { useRef } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  type Transition,
} from "framer-motion";

/* -------------------- GLOBAL TRANSITION -------------------- */
const globalTransition: Transition = {
  duration: 1.4,
  ease: [0.22, 1, 0.36, 1],
};

/* -------------------- SERVICE CARD -------------------- */
interface ServiceCardProps {
  title: string;
  desc: string;
  delay: number;
  className?: string;
  icon: string;
  active?: boolean;
}

const ServiceCard = ({
  title,
  desc,
  delay,
  className,
  icon,
  active = false,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`flex w-72 items-center gap-4 rounded-2xl border p-5 backdrop-blur-xl transition-colors ${
        active
          ? "bg-white/10 border-white/30 shadow-2xl shadow-indigo-500/20"
          : "bg-white/5 border-white/10 hover:border-white/20"
      } ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500/20 to-emerald-500/20 text-2xl ring-1 ring-white/10">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

/* -------------------- MAIN HERO -------------------- */
export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Mouse motion */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  };

  /* Springs */
  const springX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-40, 40]), {
    stiffness: 80,
    damping: 20,
  });

  const springY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-40, 40]), {
    stiffness: 80,
    damping: 20,
  });

  const reverseX = useTransform(springX, (v) => v * -1);
  const reverseY = useTransform(springY, (v) => v * -1);

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative min-h-[60vh] w-full overflow-hidden bg-black text-white"
    >
      {/* ---------------- BACKGROUND IMAGE ---------------- */}
      <motion.div
        initial={{ scale: 1.15, x: -20 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <motion.img
          src="https://ibrinfotech.b-cdn.net/uploads/csd-compressed.jpg"
          alt="Digital background"
          className="h-full w-full object-cover"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/80 to-black/80" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.85)_75%)]" />

        {/* Soft animated light */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.25),transparent_60%)]"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ---------------- LIGHT & DEPTH EFFECTS ---------------- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Parallax orbs */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute top-[10%] -left-[5%] h-[480px] w-[480px] rounded-full bg-indigo-500/20 blur-[140px]"
        />
        <motion.div
          style={{ x: reverseX, y: reverseY }}
          className="absolute bottom-[10%] -right-[5%] h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[120px]"
        />

        {/* Light sweep */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent"
          animate={{ x: ["-120%", "120%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay 
          bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)]
          bg-size-[3px_3px]"
        />
      </div>

      {/* ---------------- CONTENT ---------------- */}
      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 gap-16 px-6 py-20 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={globalTransition}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400">
              End-to-End Solutions
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05]">
            Modern <br />
            <span className="bg-linear-to-r from-indigo-400 via-white to-emerald-400 bg-clip-text text-transparent">
              Digital Craft.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-lg text-slate-300">
            We design scalable digital ecosystems — from Odoo automation to
            high-performance web & mobile platforms.
          </p>

          <div className="mt-10 flex gap-6">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-indigo-600 px-8 py-4 text-sm font-bold hover:bg-indigo-500"
            >
              Book Strategy Call
            </motion.button>

            <span className="flex items-center gap-2 text-sm text-slate-300">
              Download Deck →
            </span>
          </div>
        </motion.div>

        {/* RIGHT CARDS */}
        <div className="flex flex-col items-center mt-30 lg:items-end gap-5">
          <ServiceCard
            title="Odoo ERP"
            desc="Automated workflows & CRM"
            delay={0.6}
            icon="⚙️"
            className="lg:-rotate-3"
          />
          <ServiceCard
            title="Web & Mobile"
            desc="React, Next & Native apps"
            delay={0.8}
            icon="📱"
            active
            className="lg:scale-110"
          />
          <ServiceCard
            title="Growth"
            desc="Performance marketing"
            delay={1.0}
            icon="📈"
            className="lg:rotate-2"
          />
        </div>
      </div>
    </section>
  );
}
