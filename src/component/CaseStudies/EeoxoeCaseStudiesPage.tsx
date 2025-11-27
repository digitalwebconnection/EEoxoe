"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

// Framer Motion configuration
const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectionContainer: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

// --- Data ---
const caseStudies = [
  {
    id: "fintech",
    sector: "Fintech",
    title: "Automating approvals for a lending team",
    summary:
      "Email-driven approvals became a single workflow portal with mobile nudges, taking decisions from days to hours.",
    metric: "+62% faster approvals",
    stack: "React · Node · Odoo · REST APIs",
    imageUrl:
      "https://images.pexels.com/photos/6693658/pexels-photo-6693658.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "retail",
    sector: "Retail & Inventory",
    title: "Real-time stock visibility across 8 locations",
    summary:
      "POS, warehouse and Odoo now speak the same language, with one live view for stock, reservations and orders.",
    metric: "–40% stock-outs",
    stack: "Odoo · Postgres · Custom dashboards",
    imageUrl:
      "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "saas",
    sector: "SaaS",
    title: "Redesigning onboarding for a B2B platform",
    summary:
      "A simpler journey from sign-up to first value reduced confusion, tickets and drop-offs in the first week.",
    metric: "+27% paid activation",
    stack: "React · TypeScript · Analytics",
    imageUrl:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const impactMetrics = [
  {
    label: "Average workflow speed-up",
    value: "2.7×",
    detail: "after launch of custom tools",
  },
  {
    label: "Projects delivered",
    value: "40+",
    detail: "across SaaS, ERP & mobile",
  },
  {
    label: "Automation coverage",
    value: "60–80%",
    detail: "of repetitive operations",
  },
  {
    label: "Client satisfaction",
    value: "94%",
    detail: "CSAT across last 24 projects",
  },
];

const processSteps = [
  {
    title: "Understand the real workflow",
    body: "We map how work actually moves across tools, chats and spreadsheets – not just the official process diagram.",
    icon: "🧭",
  },
  {
    title: "Shape a lean solution",
    body: "We sketch flows and clickable prototypes tied to your metrics so teams can react early and honestly.",
    icon: "✏️",
  },
  {
    title: "Build & connect the stack",
    body: "We implement web or mobile apps, wire up Odoo and integrations, and migrate data with minimal disruption.",
    icon: "⚙️",
  },
  {
    title: "Launch, train & tune",
    body: "We ship, train teams, track adoption and refine based on what people actually do inside the system.",
    icon: "📈",
  },
];

const testimonials = [
  {
    name: "Head of Operations, Fintech client",
    quote:
      "“Once eeoxoe launched the new approval portal, we finally saw where requests were stuck. Our team stopped chasing emails and started focusing on quality.”",
  },
  {
    name: "Founder, B2B SaaS platform",
    quote:
      "“We thought we needed more features. eeoxoe showed us we needed a clearer onboarding. The numbers changed in weeks, not months.”",
  },
];

// --- Main Component ---
const EeoxoeCaseStudiesPage: React.FC = () => {
  return (
    <main className="bg-white text-slate-900">
      {/* animated background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#0B1531]/6 blur-3xl"
          animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-[#FACC15]/30 blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1.05, 0.97, 1.05] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pt-12 lg:pt-14">
        {/* 1. Enhanced Hero Section */}
        <motion.section
          className="grid gap-8 rounded-3xl px-6 py-10 sm:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] sm:px-10 sm:py-0"
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div
            className="space-y-4 text-center max-w-7xl"
            variants={item}
            // slight parallax movement on scroll
            whileInView={{ x: [10, 0] }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
          >
            <motion.p
              className="inline-flex items-center rounded-full bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-yellow-400 ring-1 ring-yellow-400/50"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              eeoxoe · Results & case studies
            </motion.p>
            <motion.h1
              className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl"
              variants={item}
              animate={{ opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              Turning{" "}
              <span className="text-yellow-400">spreadsheet chaos</span> into
              quietly predictable systems.
            </motion.h1>
          </motion.div>


        </motion.section>

        {/* 2. Metrics strip */}
        <motion.section
          className="mb-14 rounded-3xl bg-slate-50 px-5 py-8 shadow-inner sm:px-7 sm:py-9"
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="mb-6 text-center" variants={item}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Impact at a glance
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6 sm:grid-cols-4"
            variants={sectionContainer}
          >
            {impactMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={item}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                  boxShadow: "0 18px 40px rgba(15,23,42,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 140 }}
                className="rounded-full border border-slate-600/50 bg-white p-4 text-center shadow-lg hover:shadow-yellow-400/40 transition-all duration-300"
              >
                <p className="text-3xl font-bold text-[#0B1531] sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {metric.label}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  {metric.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 3. Case Studies Grid */}
        <motion.section
          className="mb-14 space-y-6 text-center"
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="space-y-2" variants={item}>
            <h2 className="text-3xl font-bold text-[#0B1531]">
              A few of the systems we’ve shipped
            </h2>
            <p className="mx-auto max-w-4xl text-base text-slate-700">
              Different industries, same idea: fewer manual steps, clearer data,
              and tools that match how people actually work.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            variants={sectionContainer}
          >
            {caseStudies.map((cs) => (
              <motion.article
                key={cs.id}
                variants={item}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(250, 202, 21, 0.25)",
                  borderColor: "#FACC15",
                  rotateX: 2,
                  rotateY: -2,
                }}
                whileTap={{ scale: 0.99, rotateX: 0, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 160, damping: 15 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl hover:ring-2 hover:ring-yellow-400 transition-all duration-300"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <motion.img
                    src={cs.imageUrl}
                    alt={cs.title}
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.05 }}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6, ease: easeOutExpo }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
                  <motion.div
                    className="absolute left-4 bottom-4 rounded-full bg-yellow-400 px-3 py-1 text-[11px] font-bold text-slate-900 shadow-lg"
                    whileHover={{ y: -2 }}
                  >
                    {cs.metric}
                  </motion.div>
                </div>
                <div className="flex flex-1 flex-col px-5 py-5 text-left">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-yellow-600">
                    {cs.sector}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1531]">
                    {cs.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate-700">
                    {cs.summary}
                  </p>
                  <p className="mt-4 text-xs font-medium text-slate-500">
                    Stack:{" "}
                    <span className="font-semibold text-slate-700">
                      {cs.stack}
                    </span>
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        {/* 4. Process cards */}
        <motion.section
          className="mb-14 space-y-8 text-center"
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="space-y-2" variants={item}>
            <h2 className="text-3xl font-bold text-[#0B1531]">
              How eeoxoe usually works with teams
            </h2>
            <p className="mx-auto max-w-4xl text-base text-slate-700">
              No black-box, year-long projects. Just a clear sequence that takes
              you from “everything is in email and Excel” to “this mostly runs
              itself”.
            </p>
          </motion.div>

          <motion.div
            className="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-4"
            variants={sectionContainer}
          >
            {/* connector for desktop */}
            <motion.div
              className="absolute inset-x-12 top-10 hidden h-1 rounded-full bg-slate-200/60 md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
            />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={item}
                whileHover={{
                  y: -6,
                  boxShadow: "0 16px 32px rgba(15,23,42,0.18)",
                  backgroundColor: "#fefce8",
                }}
                whileTap={{ scale: 0.97 }}
                className="relative flex h-full flex-col items-center rounded-3xl bg-white px-5 py-6 text-sm text-slate-700 ring-1 ring-slate-600/50 shadow-lg transition-all duration-300 hover:bg-yellow-500/50"
              >
                <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-2xl font-bold text-[#0B1531] shadow-xl ring-4 ring-white">
                  <span className="z-10">{step.icon}</span>
                  <div className="absolute top-1 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#0B1531] text-[11px] font-extrabold text-white">
                    {index + 1}
                  </div>
                </div>

                <p className="mt-2 text-lg font-bold text-[#0B1531]">
                  {step.title}
                </p>
                <p className="mt-2 px-2 text-center text-xs">{step.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 5. Testimonials + CTA */}
        <motion.section
          className="relative mt-10 overflow-hidden rounded-3xl bg-white p-6  sm:p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* soft background accents */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#0B1531]/5 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-[#FACC15]/15 blur-2xl" />
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">
            {/* LEFT: Heading + testimonials */}
            <div className="flex flex-1 flex-col justify-between gap-6">
              {/* heading + intro */}
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  CLIENT STORIES
                </p>
                <h2 className="mt-2 text-3xl font-bold text-[#0B1531]">
                  What eeoxoe’s clients say
                </h2>
                <p className="mt-3 text-sm text-slate-700">
                  We judge success by how much calmer your day feels – not just by how
                  polished the interface looks. The real win is when approvals, inventory
                  and reporting stop feeling “heavy”.
                </p>
              </div>

              {/* testimonials cards */}
              <div className="mt-2 grid gap-4 md:grid-cols-2">
                {testimonials.slice(0, 4).map((t, index) => (
                  <motion.blockquote
                    key={t.name + index}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 18px 40px rgba(15,23,42,0.18)",
                    }}
                    className={`relative flex h-full flex-col rounded-2xl bg-slate-50 p-5 text-sm text-slate-700 ring-1 ring-slate-200 ${index === 0 ? "md:col-span-2" : ""
                      }`}
                  >
                    <span className="absolute -top-4 left-4 text-4xl font-serif text-yellow-400/70">
                      “
                    </span>
                    <p className="pt-2 text-sm italic leading-relaxed">{t.quote}</p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold text-[#0B1531]">
                        {t.name}
                      </p>
                      <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-slate-500 ring-1 ring-slate-200">
                        Verified client
                      </span>
                    </div>
                  </motion.blockquote>
                ))}
              </div>
            </div>

            {/* RIGHT: Image + CTA card */}
            <div className="flex w-full flex-col gap-4 lg:w-[40%]">
              {/* image block */}
              <div className="relative mt-15 h-46 overflow-hidden rounded-3xl bg-slate-900 sm:h-54 lg:h-[200px]">
                {/* TODO: replace src with your real eeoxoe image / illustration */}
                <img
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Product team reviewing eeoxoe dashboards"
                  className="h-full w-full object-cover opacity-75"
                />

                {/* overlay gradient */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-[#0B1531]/80 via-transparent to-transparent" />

                {/* small label */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
                  From chaos to calm workflows
                </div>

                {/* mini before/after text */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 text-xs text-slate-700 shadow-lg">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    BEFORE → AFTER
                  </p>
                  <div className="mt-2 flex flex-col gap-2 text-[11px] sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#0B1531]">
                        Before eeoxoe
                      </p>
                      <p className="text-slate-500">
                        Approvals in email threads, inventory in spreadsheets, reporting in
                        5 different tools.
                      </p>
                    </div>
                    <div className="hidden h-10 w-px bg-slate-200 sm:block" />
                    <div>
                      <p className="text-xs font-semibold text-[#0B1531]">
                        After eeoxoe
                      </p>
                      <p className="text-slate-500">
                        One calm, trackable system your whole team actually likes using.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <motion.div
                className="rounded-3xl bg-[#0B1531] px-5 py-5 text-white shadow-xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-yellow-300">
                  READY FOR YOUR BEFORE / AFTER?
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Tell us where things feel slow – approvals, inventory, reporting,
                  onboarding – and we’ll map a realistic path to a working system,
                  not a never-ending project.
                </p>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                  <motion.a
                    href="mailto:info@eeoxoe.com"
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "#FACC15",
                      boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-yellow-400 px-5 py-2.5 text-xs font-bold text-[#0B1531]"
                  >
                    Schedule a 20-min intro call
                  </motion.a>
                  <motion.button
                    type="button"
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "#020617",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-500 bg-transparent px-5 py-2.5 text-xs font-semibold text-slate-100"
                  >
                    Send us your brief →
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default EeoxoeCaseStudiesPage;
