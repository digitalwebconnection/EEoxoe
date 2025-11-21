import React, { useEffect, useMemo, useRef } from "react";
import {
  motion,
  useInView,
  useSpring,
  useTransform,
  useMotionValue,
  type Variants,
  useScroll,
} from "framer-motion";

// --- Constants ---
const stats = [
  { value: "90K+", label: "Projects Delivered" },
  { value: "2000000+", label: "Lines of Code" },
  { value: "16K+", label: "Happy Clients" },
  { value: "95%", label: "Client Retention" },
];

// --- Helpers ---
function parsePrettyNumber(input: string) {
  const s = input.trim();
  const hasPlus = s.endsWith("+");
  const percent = s.endsWith("%");
  const core = s.replace(/[+%]/g, "");
  const match = core.match(/^(\d+(\.\d+)?)([KkMm])?$/);

  if (!match) {
    return {
      num: Number(core) || 0,
      suffix: percent ? "%" : hasPlus ? "+" : "",
      multiplier: 1,
    };
  }

  const base = parseFloat(match[1]);
  const scale = match[3]?.toUpperCase();
  const multiplier = scale === "K" ? 1_000 : scale === "M" ? 1_000_000 : 1;
  const suffix = `${scale ?? ""}${percent ? "%" : hasPlus ? "+" : ""}`;

  return { num: base, suffix, multiplier };
}

function formatNumber(n: number) {
  if (n < 10000) return Math.round(n).toString();
  return Math.round(n).toLocaleString();
}

// --- Variants ---
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 110, damping: 14 },
  },
};

// --- Counter ---
function Counter({ to }: { to: string }) {
  const { num, suffix, multiplier } = useMemo(
    () => parsePrettyNumber(to),
    [to]
  );

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 80, damping: 18, mass: 0.5 });
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -10% 0px" });

  const targetRaw = num * multiplier;

  useEffect(() => {
    if (inView) mv.set(targetRaw);
  }, [inView, targetRaw, mv]);

  const display = useTransform(spring, (latest) => formatNumber(latest));

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      <span className="ml-0.5">{suffix}</span>
    </span>
  );
}

// --- Sparkles background ---
function Sparkles() {
  const dots = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full"
          style={{
            left: `${(i * 73) % 100}%`,
            top: `${(i * 37) % 100}%`,
            background: i % 2
              ? "rgba(38,39,85,.35)"
              : "rgba(255,215,64,.35)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{
            duration: 3 + (i % 5),
            repeat: Infinity,
            delay: i * 0.18,
          }}
        />
      ))}
    </div>
  );
}

// --- Tilt Card for stats ---
function StatCardWithTilt({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [-4, 4]);
  const rotateY = useTransform(x, [0, 1], [4, -4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" as const }}
      variants={item}
      className="relative rounded-2xl border border-black/50 bg-white p-4 text-center shadow-[0_10px_25px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Glow ring */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(38,39,85,0.12), rgba(255,215,64,0.25), rgba(38,39,85,0.12))",
          filter: "blur(8px)",
          zIndex: -1,
        }}
      />
      {children}
    </motion.div>
  );
}

// --- Main Section ---
export default function StatsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundYInv = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 md:py-12"
    >
      {/* Background blobs + sparkles */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute left-0 top-0 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(255,215,64,.25), transparent)",
            y: backgroundYInv,
          }}
          animate={{
            x: [0, 10, 0],
            y: [0, -12, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(38,39,85,.22), transparent)",
            y: backgroundY,
          }}
          animate={{
            x: [0, -12, 0],
            y: [0, 10, 0],
            scale: [1, 1.07, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />
        <Sparkles />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: "spring", stiffness: 110, damping: 14 }}
            className="mb-4 text-4xl font-bold md:text-5xl"
            style={{ color: "#262755" }}
          >
            Innovate, Integrate With Our Software Solutions
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="mx-auto mb-5 h-[3px] w-28 rounded-full"
            style={{
              background: "linear-gradient(90deg, #262755, #ffd740)",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-slate-600"
          >
            Trusted by industry leaders for exceptional results
          </motion.p>
        </div>

        {/* Stats grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <StatCardWithTilt key={stat.label}>
              <p
                className="mb-2 text-4xl font-extrabold md:text-5xl bg-clip-text text-[#262755]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#262755,#ffd740)",
                  position: "relative",
                  zIndex: 10,
                }}
              >
                <Counter to={stat.value} />
              </p>
              <p className="text-slate-500">{stat.label}</p>
            </StatCardWithTilt>
          ))}
        </motion.div>

        {/* CTA button (no UI library) */}
        <div className="relative mx-auto inline-block text-center">
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, rgba(255,215,64,.25), transparent)",
              filter: "blur(14px)",
            }}
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden rounded-full bg-[#262755] px-8 py-3 text-lg font-semibold text-white"
          >
            <motion.span
              initial={{ x: "-120%" }}
              whileHover={{ x: "120%" }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #ffd740, transparent)",
              }}
            />
            <span className="relative z-10">Let&apos;s Build Together</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
