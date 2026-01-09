"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

/* =====================================================
   INDUSTRY CONSTANTS
===================================================== */
const INDUSTRY_KEYS = {
  ALL: "All",
  RETAIL: "Retail",
  REAL_ESTATE: "Real Estate",
  AUTOMOBILE: "Automobile",
  FINANCE: "Finance",
  EDUCATION: "Education",
  JEWELRY: "Diamond & Jewelry",
  HEALTHCARE: "Health Care & Life Science",
  MEDIA: "Media & Entertainment",
  LOGISTICS: "Logistics",
  ADVERTISING: "Advertising",
  SOCIAL: "Social Network",
  MANUFACTURING: "Manufacturing",
  OTHERS: "Others",
} as const;

const INDUSTRIES = Object.values(INDUSTRY_KEYS);

/* =====================================================
   ANIMATIONS
===================================================== */
const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalCard: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 30,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

/* =====================================================
   TYPES
===================================================== */
type CaseStudy = {
  id: string;
  industry: string;
  client: string;
  category: string;
  description: string;
  image: string;
  users: string;
  bounceDrop: string;
};

/* =====================================================
   DATA
===================================================== */

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "retail-commerce",
    industry: INDUSTRY_KEYS.RETAIL,
    client: "Omni Retail Group",
    category: "Retail & eCommerce",
    description:
      "Built a high-performance omnichannel retail platform integrating inventory, POS, and customer data to improve conversions and repeat purchases.",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200",
    users: "18M",
    bounceDrop: "35%",
  },
  {
    id: "real-estate",
    industry: INDUSTRY_KEYS.REAL_ESTATE,
    client: "Global Realty",
    category: "Real Estate",
    description:
      "Developed a scalable real estate platform that improved property discovery and lead conversion.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    users: "12M",
    bounceDrop: "42%",
  },
  {
    id: "automobile-platform",
    industry: INDUSTRY_KEYS.AUTOMOBILE,
    client: "AutoSphere",
    category: "Automobile & Mobility",
    description:
      "Created a digital automobile marketplace enabling vehicle comparison and dealer integration.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200",
    users: "14M",
    bounceDrop: "39%",
  },
  {
    id: "fintech",
    industry: INDUSTRY_KEYS.FINANCE,
    client: "Fintech Suite",
    category: "Finance & Banking",
    description:
      "Automated finance workflows and reporting dashboards for enterprise teams.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    users: "9.5M",
    bounceDrop: "38%",
  },
  {
    id: "education-edtech",
    industry: INDUSTRY_KEYS.EDUCATION,
    client: "EduLearn",
    category: "Education & EdTech",
    description:
      "Designed a digital learning platform with LMS integration and analytics.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200",
    users: "7.8M",
    bounceDrop: "44%",
  },
  {
    id: "diamond-jewelry",
    industry: INDUSTRY_KEYS.JEWELRY,
    client: "Luxora Jewels",
    category: "Diamond & Jewelry",
    description:
      "Built a premium jewelry eCommerce platform with secure checkout.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200",
    users: "4.2M",
    bounceDrop: "31%",
  },
  {
    id: "healthcare-life-science",
    industry: INDUSTRY_KEYS.HEALTHCARE,
    client: "MediCore",
    category: "Healthcare & Life Science",
    description:
      "Developed a healthcare system for appointments and compliance reporting.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200",
    users: "6.5M",
    bounceDrop: "47%",
  },
  {
    id: "fox-sports",
    industry: INDUSTRY_KEYS.MEDIA,
    client: "FOX SPORTS",
    category: "Media & Entertainment",
    description:
      "Revamped a sports portal with real-time updates and high engagement.",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1200",
    users: "28M",
    bounceDrop: "60%",
  },
  {
    id: "logistics-supply-chain",
    industry: INDUSTRY_KEYS.LOGISTICS,
    client: "TransMove",
    category: "Logistics & Supply Chain",
    description:
      "Implemented logistics tracking and fleet optimization.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    users: "5.9M",
    bounceDrop: "34%",
  },
  {
    id: "advertising-digital",
    industry: INDUSTRY_KEYS.ADVERTISING,
    client: "AdVanta",
    category: "Advertising & Marketing",
    description:
      "Built a data-driven advertising automation platform.",
    image:
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1200",
    users: "11M",
    bounceDrop: "41%",
  },
  {
    id: "social-network",
    industry: INDUSTRY_KEYS.SOCIAL,
    client: "Connectly",
    category: "Social Networking",
    description:
      "Developed a scalable social networking platform.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
    users: "22M",
    bounceDrop: "36%",
  },
  {
    id: "manufacturing-erp",
    industry: INDUSTRY_KEYS.MANUFACTURING,
    client: "InduWorks",
    category: "Manufacturing",
    description:
      "Implemented ERP-driven manufacturing workflows.",
    image:
      "https://katanamrp.com/wp-content/uploads/2022/10/shutterstock_732811756-scaled.jpg",
    users: "3.8M",
    bounceDrop: "29%",
  },
  {
    id: "others-enterprise",
    industry: INDUSTRY_KEYS.OTHERS,
    client: "Enterprise Solutions",
    category: "Enterprise Systems",
    description:
      "Delivered custom enterprise software solutions.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
    users: "6.1M",
    bounceDrop: "40%",
  },
];

/* =====================================================
   COMPONENT
===================================================== */
const OurWork = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>(
    INDUSTRY_KEYS.ALL
  );
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  const filteredData =
    activeIndustry === INDUSTRY_KEYS.ALL
      ? CASE_STUDIES
      : CASE_STUDIES.filter(
        (item) => item.industry === activeIndustry
      );

  const getCount = (industry: string) =>
    industry === INDUSTRY_KEYS.ALL
      ? CASE_STUDIES.length
      : CASE_STUDIES.filter(
        (item) => item.industry === industry
      ).length;

  useEffect(() => {
    document.body.style.overflow = activeCase ? "hidden" : "auto";
  }, [activeCase]);

  return (
    <>
      {/* MAIN SECTION */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="bg-slate-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-5xl text-center font-bold text-[#262755]"
          >
            Our Work
          </motion.h2>

          {/* Industry Tabs – Pill Style */}
          <motion.div
            variants={fadeUp}
            className="mt-16 flex flex-wrap gap-3"
          >
            {INDUSTRIES.map((industry) => (
              <motion.button
                key={industry}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveIndustry(industry)}
                className={`rounded-full px-4 py-1.5 text-sm transition ${activeIndustry === industry
                    ? "bg-[#262755] text-white shadow"
                    : "bg-white text-[#262755] border hover:bg-slate-100"
                  }`}
              >
                {industry} ({getCount(industry)})
              </motion.button>
            ))}
          </motion.div>

          {/* CARDS */}
          <motion.div
            variants={container}
            className="mt-35 space-y-10"
          >
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                onClick={() => setActiveCase(item)}
                className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition"
              >
                <div className="grid lg:grid-cols-5">
                  {/* IMAGE */}
                  <div className="relative lg:col-span-2 h-84">
                    <img
                      src={item.image}
                      alt={item.client}
                      className="h-full w-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase text-[#262755]">
                        {item.client}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-[#262755]">
                        {item.category}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex gap-6 text-sm">
                        <div>
                          <p className="font-bold text-[#262755]">
                            {item.users}
                          </p>
                          <p className="text-xs text-slate-500">
                            Monthly Users
                          </p>
                        </div>
                        <div>
                          <p className="font-bold text-[#262755]">
                            {item.bounceDrop}
                          </p>
                          <p className="text-xs text-slate-500">
                            Bounce Drop
                          </p>
                        </div>
                      </div>

                      <span className="text-sm font-semibold text-[#262755] group-hover:underline">
                        View Case Study →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* MODAL (UNCHANGED – STABLE) */}
      <AnimatePresence>
        {activeCase && (
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setActiveCase(null)}
          >
            <motion.div
              variants={modalCard}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full overflow-hidden rounded-2xl bg-white"
            >
              <img
                src={activeCase.image}
                alt={activeCase.client}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  {activeCase.client}
                </p>
                <h3 className="mt-1 text-2xl font-bold text-[#262755]">
                  {activeCase.category}
                </h3>
                <p className="mt-4 text-sm text-slate-600">
                  {activeCase.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-2xl font-bold">
                      {activeCase.users}
                    </p>
                    <p className="text-xs text-slate-500">
                      Monthly Users
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {activeCase.bounceDrop}
                    </p>
                    <p className="text-xs text-slate-500">
                      Bounce Rate Drop
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveCase(null)}
                  className="mt-8 inline-flex rounded-full border px-5 py-2 text-sm font-semibold hover:bg-slate-100"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

};

export default OurWork;
