"use client";

import { useEffect, useRef, useState } from "react";
import { motion ,type Variants } from "framer-motion";

/* ===============================
   CONFIG
=================================*/
const NAV_HEIGHT = 72;


/* ===============================
   CARD ANIMATION VARIANTS
=================================*/
const cardVariants: Variants = {
  hiddenLeft: { opacity: 0, x: -40 },
  hiddenRight: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

/* ===============================
   SERVICES DATA
=================================*/
const SERVICES = [
  {
    id: "ecommerce",
    nav: "eCommerce",
    title: "eCommerce Development Services",
    description:
      "We design and build scalable eCommerce platforms focused on performance, conversions, and long-term growth.",
    image:
      "https://radiancesolution.com/wp-content/uploads/2025/03/Why-Is-Ecommerce-Web-Development-the-Backbone-of-Modern-Online-Businesses.jpg.webp",
    addons: [
      "Custom Storefronts",
      "Payment Gateway Integration",
      "Marketplace Development",
      "Performance Optimization",
    ],
  },
  {
    id: "mobile",
    nav: "Mobile",
    title: "Mobile App Development Services",
    description:
      "High-performance mobile applications built around real user journeys and measurable business outcomes.",
    image:
      "https://www.chlsoftech.com/images/UploadedImages/thumbs/0000071_Mobile-app-development-company.jpeg",
    addons: [
      "iOS & Android Apps",
      "UI/UX Design",
      "API Integrations",
      "App Maintenance",
    ],
  },
  {
    id: "fullstack",
    nav: "Full Stack",
    title: "Full Stack Development Services",
    description:
      "End-to-end web solutions using modern frontend frameworks and scalable backend architectures.",
    image:
      "https://www.brainvire.com/blog/wp-content/uploads/2023/10/Pros-and-Cons-of-Hiring-Full-Stack-Developer-1-1024x573.jpg",
    addons: [
      "React & Next.js",
      "Node & Laravel",
      "Database Architecture",
      "System Integrations",
    ],
  },
  {
    id: "ai-ml",
    nav: "AI & ML",
    title: "AI & ML Development Services",
    description:
      "Transform data into intelligence with AI-powered systems that automate decisions and unlock insights.",
    image:
      "https://councils.forbes.com/hs-fs/hubfs/X%20-%20Can%20We%20Delete/Imported_Blog_Media/ai-machine-learning-opportunities-2.jpg?width=788&name=ai-machine-learning-opportunities-2.jpg",
    addons: [
      "Predictive Analytics",
      "AI Automation",
      "Data Engineering",
      "Model Deployment",
    ],
  },
  {
    id: "microsoft",
    nav: "Microsoft",
    title: "Microsoft Development Services",
    description:
      "Enterprise-grade solutions built on Microsoft technologies for security, performance, and scale.",
    image:
      "https://www.ituonline.com/wp-content/uploads/2023/10/What-Does-It-Mean-for-Computers.jpg",
    addons: [
      ".NET Applications",
      "Power BI",
      "SharePoint Solutions",
      "Azure Integrations",
    ],
  },
  {
    id: "cloud",
    nav: "Cloud",
    title: "Cloud Services",
    description:
      "Modern cloud infrastructure designed for reliability, scalability, and cost efficiency.",
    image:
      "https://www.ccsipro.com/wp-content/uploads/2023/04/iStock-943065362-scaled.jpg",
    addons: [
      "Cloud Migration",
      "AWS & Azure",
      "DevOps Automation",
      "Cloud Security",
    ],
  },
];

/* ===============================
   PAGE
=================================*/
export default function ServicesPage() {
  const [active, setActive] = useState<string>(SERVICES[0].id);
  const [showNav, setShowNav] = useState<boolean>(false);

  const servicesWrapperRef = useRef<HTMLDivElement | null>(null);

  
  /* -------- Scroll Spy + Navbar Toggle -------- */
  useEffect(() => {
    const onScroll = () => {
      const wrapperEl = servicesWrapperRef.current;
      if (!wrapperEl) return;

      setShowNav(wrapperEl.getBoundingClientRect().top <= 80);

      SERVICES.forEach((service) => {
        const sectionEl = document.getElementById(service.id);
        if (!sectionEl) return;

        const rect = sectionEl.getBoundingClientRect();
        const offset = NAV_HEIGHT + 40;

        if (rect.top <= offset && rect.bottom >= offset) {
          setActive(service.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 scroll-smooth">
      <div ref={servicesWrapperRef} className="relative">
        {/* ===== FLOATING NAV ===== */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: showNav ? 1 : 0,
            y: showNav ? 0 : -10,
          }}
          transition={{ duration: 0.3 }}
          className="fixed left-1/5 z-40"
          style={{ transform: "translateX(-50%)", top: "4rem" }}
        >
          <div className="rounded-full bg-blue-950 border shadow-lg px-16 py-3">
            <nav className="flex gap-10 whitespace-nowrap">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`text-lg font-semibold transition ${active === s.id
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                    }`}
                >
                  {s.nav}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* ================= SERVICE SECTIONS ================= */}
        {SERVICES.map((service, index) => (
        <motion.section
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`py-14 scroll-mt-35 ${
              index % 2 === 0
                ? "bg-linear-to-r from-[#f8fbff] via-[#e6eeff] to-[#a9c6fc]"
                : "bg-linear-to-r from-[#bdd4ffd3] via-[#dbe7ff] to-[#f8fbff]"
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">

              {/* MAIN CARD CONTENT */}
              <motion.div
                className={`relative overflow-hidden ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
                whileHover="hover"
              >
                {/* HOVER GRADIENT */}
                <motion.div
                  variants={{
                    initial: { x: "-100%" },
                    hover: { x: "100%" },
                  }}
                  initial="initial"
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-[#FDD53D]/35 to-transparent"
                />

                {/* BIG BACKGROUND NUMBER */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute -top-16 -right-2 text-shadow-black text-[100px] lg:text-[160px] font-extrabold text-[#00000050] pointer-events-none select-none"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="mt-4 text-gray-600 max-w-xl">
                    {service.description}
                  </p>

                  <div className="mt-6 px-2 grid grid-cols-2 gap-6">
                    {service.addons.map((addon, i) => (
                      <motion.div
                        key={addon}
                         variants={cardVariants}
                        initial={i % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="cursor-pointer rounded-xl bg-[#262755] p-px text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#ffd740] hover:text-[#262755] hover:shadow-lg hover:shadow-[#ffd740]/50"
                      >
                        <div className="rounded-xl px-4 py-2 text-white hover:text-black transition">
                          <p className="font-semibold">{addon}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* IMAGE */}
              <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl w-full h-full shadow-lg"
                />
              </div>

            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
