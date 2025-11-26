"use client";

import { motion } from "framer-motion";
import { Globe2, Smartphone, Boxes, Megaphone } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

const services = [
  {
    title: "Web Application",
    desc: "Scalable, secure web apps that match your business logic.",
    icon: Globe2,
    tag: "Custom frontend & backend",
  },
  {
    title: "Mobile Application",
    desc: "Smooth Android & iOS apps built for performance and UX.",
    icon: Smartphone,
    tag: "Native & cross-platform",
  },
  {
    title: "Odoo",
    desc: "Implement, customize and integrate Odoo to automate your ops.",
    icon: Boxes,
    tag: "ERP, CRM & workflows",
  },
  {
    title: "Digital Marketing",
    desc: "ROI-focused campaigns to boost traffic, leads and revenue.",
    icon: Megaphone,
    tag: "Performance & branding",
  },
];

export default function ServicesHero() {
  const backgroundUrl =
    "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600";

  return (
    <section className="relative overflow-hidden text-slate-50">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={backgroundUrl}
          alt="Digital services background"
          className="h-full w-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950/55 via-slate-950/65 to-slate-900/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.28),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(45,212,191,0.18),transparent_55%)]" />

        {/* Floating orbs */}
        <div className="absolute -left-10 top-24 h-40 w-40 rounded-full bg-black/25 blur-xl" />
        <div className="absolute -right-10 bottom-10 h-44 w-44 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      {/* Grain / noise layer (optional visual texture) */}
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light [background-image:radial-gradient(circle,_rgba(255,255,255,0.09)_1px,_transparent_0)],[background-size:4px_4px]" />

      {/* Main content */}
      <motion.div
        className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 sm:py-16 lg:flex-row lg:items-center lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Text + CTA */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white  ring-1 ring-white/10 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            End-to-end digital solutions
          </div>

          <motion.h1
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            variants={itemVariants}
          >
            Build, launch & grow your
            <span className="block bg-linear-to-r  from-blue-600 via-sky-300 to-yellow-500 bg-clip-text text-transparent">
              complete digital ecosystem.
            </span>
          </motion.h1>

          <motion.p
            className="max-w-2xl text-sm text-slate-200/90 sm:text-base"
            variants={itemVariants}
          >
            Web & mobile applications, Odoo implementations and performance
            marketing — all under one expert team, so your business stays fast,
            automated and visible online.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={itemVariants}
          >
            <button className="rounded-full bg-blue-900 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/40 transition hover:-translate-y-0.5  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Book a strategy call
            </button>
            <button className="rounded-full border border-white/25 bg-black/30 px-6 py-2.5 text-sm font-medium text-slate-100/90 backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-white">
              Download services deck
            </button>
          </motion.div>

          <motion.div
            className="mt-2 flex flex-wrap gap-3 text-xs text-slate-300/90"
            variants={itemVariants}
          >
            <span className="rounded-full bg-black/40 px-3 py-1 ring-1 ring-white/10">
              Product + marketing under one roof
            </span>
            <span className="rounded-full bg-black/40 px-3 py-1 ring-1 ring-white/10">
              Custom, not copy-paste solutions
            </span>
          </motion.div>
        </motion.div>

        {/* Right: Service cards */}
        <div className="lg:w-1/2">
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="relative group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-md transition hover:-translate-y-2 hover:border-indigo-300 hover:bg-white/12"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {/* Glow border on hover */}
                  <div className="pointer-events-none absolute inset-px rounded-2xl opacity-0 group-hover:opacity-100 group-hover:bg-linear-to-br from-indigo-400/40 via-sky-300/30 to-emerald-300/40 transition" />

                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/15 ring-1 ring-indigo-300/40">
                      <Icon className="h-5 w-5 text-indigo-200" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold sm:text-base">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-200/90 sm:text-sm">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-4 flex items-center justify-between text-xs text-slate-200/80">
                    <span className="inline-flex items-center rounded-full bg-black/35 px-2.5 py-1 text-[11px] ring-1 ring-white/10">
                      {service.tag}
                    </span>
                    <span className="inline-flex items-center text-[11px] font-medium text-indigo-200 group-hover:translate-x-0.5 group-hover:text-indigo-100 transition">
                      Explore service
                      <span className="ml-1 text-xs">→</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
