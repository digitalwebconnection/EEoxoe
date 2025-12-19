"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "web-application",
    label: "Service 01",
    title: "Web Application Development",
    tagline: "From idea to a full-featured, secure web platform.",
    description:
      "Exochos designs and develops custom web applications that match your exact business process. Instead of forcing your work into a ready-made tool, we build portals, dashboards and platforms that fit the way your team already works.",
    bullets: [
      "Custom business portals, admin panels and dashboards.",
      "Responsive design that works on desktop, tablet and mobile.",
      "API-first architecture for easy integration with other tools.",
      "Focus on security, speed and long-term maintainability.",
    ],
    highlight:
      "Ideal for companies that outgrew spreadsheets and basic websites.",
    imageUrl:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "mobile-application",
    label: "Service 02",
    title: "Mobile Application Development",
    tagline: "Android & iOS apps built around real user journeys.",
    description:
      "We create mobile applications that feel simple for users and powerful for your business. From customer-facing apps to internal tools, eeoxoe focuses on clean UX, performance and analytics from day one.",
    bullets: [
      "Native and cross-platform app development (Android & iOS).",
      "User flows designed to reduce friction and confusion.",
      "Integration with your existing APIs and backend systems.",
      "App store publishing, updates and basic support guidelines.",
    ],
    highlight:
      "Perfect for brands that want to live on their customer’s home screen.",
    imageUrl:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "odoo",
    label: "Service 03",
    title: "Odoo Implementation & Customization",
    tagline: "One system to manage sales, inventory, accounts and more.",
    description:
      "Exochos helps you set up Odoo as the central system for your business operations. We map your current process, configure the right Odoo apps and customize only where it truly adds value.",
    bullets: [
      "Odoo for CRM, sales, inventory, accounting and HR.",
      "Custom modules based on your internal workflow.",
      "Smooth data migration from older systems or spreadsheets.",
      "User training and ongoing functional support options.",
    ],
    highlight:
      "Best for teams that want all operations under a single, flexible ERP.",
    imageUrl:
      "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "digital-marketing",
    label: "Service 04",
    title: "Digital Marketing",
    tagline: "Strategy, content and campaigns designed to bring results.",
    description:
      "Once your product is ready, Exochos helps you get it in front of the right people. We focus on performance-based digital marketing, combining content, ads and landing pages to attract leads and grow your brand.",
    bullets: [
      "Social media management and content calendars.",
      "Search and social ad campaigns focused on ROI.",
      "Landing pages designed for higher conversions.",
      "Detailed reporting and monthly optimisation suggestions.",
    ],
    highlight:
      "Ideal for businesses that want both visibility and measurable leads.",
    imageUrl:
      "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export default function EeoxoeServicesPage() {
  const [activeService, setActiveService] = React.useState<null | (typeof services)[number]>(
    null
  );

  return (
    <main className="bg-white text-slate-900">
      {/* Soft background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl" />
      </div>

      <motion.div
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16"
        initial="hidden"
        animate="visible"
        variants={containerStagger}
      >
        {/* 1. Intro section */}
        <motion.section
          className="mb-10 border-b border-slate-200 pb-10 sm:mb-12 sm:pb-12"
          variants={fadeUp}
        >
          <div className="mx-auto max-w-7xl space-y-4 text-center">
            <motion.p
              className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-600 ring-1 ring-slate-200"
              variants={fadeUp}
            >
              Exochos · Services
            </motion.p>

            <motion.h1
              className="mx-auto max-w-4xl text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
              variants={fadeUp}
            >
              Exochos turns your{" "}
              <span className="bg-linear-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
                ideas into working digital systems
              </span>{" "}
              that connect technology and growth.
            </motion.h1>

            <motion.p
              className="text-sm text-slate-600 sm:text-base"
              variants={fadeUp}
            >
              We focus on four main pillars –{" "}
              <strong>Web Applications</strong>,{" "}
              <strong>Mobile Applications</strong>, <strong>Odoo</strong>, and{" "}
              <strong>Digital Marketing</strong>. Each service can stand alone,
              but they are designed to support each other so your product,
              operations and marketing stay aligned on one side.
            </motion.p>
          </div>
        </motion.section>

        {/* 2. Services one by one */}
        <section className="space-y-10 sm:space-y-12">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id}
              className={`flex cursor-pointer flex-col gap-6 rounded-2xl border border-slate-800/30 bg-white p-5 shadow-lg shadow-slate-200/80 transition sm:p-7 md:flex-row md:items-stretch ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 22px 40px rgba(15,23,42,0.16)" }}
              onClick={() => setActiveService(service)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveService(service);
                }
              }}
              role="button"
              tabIndex={0}
            >
              {/* Image / label column */}
              <div className="flex flex-col md:w-1/2">
                <div className="inline-flex items-center rounded-full bg-blue-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-400 ring-1 ring-blue-900/10">
                  {service.label}
                </div>

                <h2 className="mt-3 text-xl font-semibold text-slate-900 sm:text-2xl">
                  {service.title}
                </h2>

                <p className="mt-2 text-sm font-medium text-blue-900 sm:text-base">
                  {service.tagline}
                </p>

                <motion.div
                  className="mt-4 overflow-hidden rounded-xl ring-1 ring-slate-200/80"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="relative h-40 w-full overflow-hidden sm:h-48">
                    <motion.img
                      src={service.imageUrl}
                      alt={service.title}
                      className="h-full w-full object-cover"
                      initial={{ scale: 1.05 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm">
                      Exochos · {service.title}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Text / details column */}
              <div className="md:w-1/2 md:px-2">
                <p className="text-sm text-slate-600 sm:text-base">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700 sm:text-base">
                  {service.bullets.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-indigo-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
                  <span className="font-semibold text-slate-900">
                    Where this helps most:&nbsp;
                  </span>
                  {service.highlight}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>Click to view full details</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-[11px] text-slate-700">
                    View more →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* 3. Extra details / process section */}
        <motion.section
          className="mt-14 border-t border-slate-200 pt-10 sm:mt-16 sm:pt-12"
          variants={fadeUp}
        >
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              How Exochos works with your team
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Whether it’s a web app, mobile app, Odoo rollout or performance
              marketing, our approach stays consistent: understand, design,
              build, then optimise.
            </p>
          </div>

          <motion.div
            className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-3"
            variants={containerStagger}
          >
            <motion.div
              className="rounded-2xl bg-slate-50 px-4 py-5 text-sm text-slate-700 ring-1 ring-slate-600/30 shadow-sm"
              variants={fadeUp}
            >
              <div className="mb-2 text-2xl">🧭</div>
              <h3 className="text-sm font-semibold text-slate-900">
                Discover & Align
              </h3>
              <p className="mt-1 text-xs sm:text-sm">
                We map your current tools, bottlenecks and goals so the solution
                fits your reality, not a theoretical flow.
              </p>
            </motion.div>
            <motion.div
              className="rounded-2xl bg-slate-50 px-4 py-5 text-sm text-slate-700 ring-1 ring-slate-600/30 shadow-sm"
              variants={fadeUp}
            >
              <div className="mb-2 text-2xl">🧩</div>
              <h3 className="text-sm font-semibold text-slate-900">
                Design & Build
              </h3>
              <p className="mt-1 text-xs sm:text-sm">
                UX, architecture and development go hand-in-hand, with regular
                check-ins so you see progress early.
              </p>
            </motion.div>
            <motion.div
              className="rounded-2xl bg-slate-50 px-4 py-5 text-sm text-slate-700 ring-1 ring-slate-600/30 shadow-sm"
              variants={fadeUp}
            >
              <div className="mb-2 text-2xl">📈</div>
              <h3 className="text-sm font-semibold text-slate-900">
                Launch & Grow
              </h3>
              <p className="mt-1 text-xs sm:text-sm">
                We help you roll out, train teams and set up analytics so your
                product keeps improving after launch.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>

      {/* POPUP MODAL FOR FULL DETAILS */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-7"
              initial={{ y: 40, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 40, scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${activeService.id}-title`}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
                aria-label="Close"
              >
                ✕
              </button>

              {/* Modal header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="inline-flex items-center rounded-full bg-blue-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-400">
                    {activeService.label}
                  </p>
                  <h2
                    id={`${activeService.id}-title`}
                    className="mt-3 text-xl font-semibold text-slate-900 sm:text-2xl"
                  >
                    {activeService.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-blue-900 sm:text-base">
                    {activeService.tagline}
                  </p>
                </div>
              </div>

              {/* Hero image */}
              <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-slate-200/90">
                <div className="relative h-44 w-full overflow-hidden sm:h-56">
                  <motion.img
                    src={activeService.imageUrl}
                    alt={activeService.title}
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/15 to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm">
                    Exochos · {activeService.title}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="mt-5 space-y-4">
                <p className="text-sm text-slate-700 sm:text-base">
                  {activeService.description}
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      What we usually deliver
                    </h3>
                    <ul className="mt-2 space-y-2 text-sm text-slate-700">
                      {activeService.bullets.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-indigo-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Is this the right fit?
                    </h3>
                    <div className="mt-2 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
                      <span className="font-semibold text-slate-900">
                        Where this helps most:&nbsp;
                      </span>
                      {activeService.highlight}
                    </div>
                    <p className="mt-3 text-xs text-slate-500 sm:text-sm">
                      Not sure if it matches your use-case? Share what you’re
                      building and we’ll suggest the right mix of product,
                      automation and marketing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer actions */}
              <div className="mt-6 flex flex-col gap-3 border-t border-slate-600/50 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs text-slate-500 sm:text-sm">
                  Ready to discuss this service for your business?
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <motion.a
                    href="#contact"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center rounded-full bg-blue-900 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-900/30 sm:text-sm"
                    onClick={() => setActiveService(null)}
                  >
                    Book a free consultation
                  </motion.a>
                  <button
                    onClick={() => setActiveService(null)}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
