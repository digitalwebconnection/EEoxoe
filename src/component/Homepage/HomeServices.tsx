"use client";

import React, { useRef } from "react";
import {
  Code,
  Palette,
  Smartphone,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  type Variants,
  useMotionValue,
  useTransform,
} from "framer-motion";

// === Service Data ===
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Create beautiful, user-centric designs that engage and inspire .",
    image:
      "https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA=",
  },
  {
    icon: Palette,
    title: "Product Design",
    description:
      "Create beautiful, user-centric designs that engage and inspire .",
    image:
      "https://as1.ftcdn.net/jpg/02/59/51/26/1000_F_259512677_UynSpsczLyClBmci2W2lewuAutVsTlpo.jpg",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Build powerful applications for iOS, Android, and Web platforms.",
    image:
      "https://www.mindinventory.com/blog/wp-content/uploads/2018/12/benefits-of-mobile-app-for-business.webp",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description:
      "Seamlessly integrate cloud solutions for scalability and reliability.",
    image:
      "https://bernardmarr.com/img/The%205%20Biggest%20Cloud%20Computing%20Trends%20In%202021.jpg",
  },
];

// ===== Animations =====
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 12 },
  },
};

// use easing array instead of "easeInOut" for TS safety
const iconFloat: Variants = {
  float: {
    y: [0, -8, 0],
    transition: {
      duration: 3.2,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

// ===== Tilt wrapper (3D hover) =====
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-50, 50], [8, -8]);
  const rotateY = useTransform(mx, [-50, 50], [-8, 8]);

  return (
    <motion.div
      ref={ref}
      style={{ perspective: 1000 }}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        mx.set((px - 0.5) * 100);
        my.set((py - 0.5) * 100);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" as const }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#f8f8fc] px-4 py-10 sm:px-6 lg:px-0 md:py-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: "spring", stiffness: 90, damping: 12 }}
            className="mb-4 text-4xl font-extrabold text-[#262755] md:text-5xl"
          >
            Crafting Custom Software To Meet Challenges
          </motion.h2>

          {/* Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
            className="mx-auto mb-5 h-[3px] w-28 rounded-full"
            style={{
              background: "linear-gradient(90deg, #262755, #ffd740)",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-[#555]"
          >
            We specialize in creating tailored solutions for your unique business
            needs.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item} className="flex">
              <TiltCard>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="group relative flex-1"
                >
                  {/* Shimmer border */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "conic-gradient(from 180deg at 50% 50%, rgba(38,39,85,0.25), rgba(255,215,64,0.25), rgba(38,39,85,0.25))",
                      filter: "blur(8px)",
                    }}
                  />

                  {/* Card container (replaces shadcn Card) */}
                  <div
                    className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
                    style={{
                      borderColor: "#26275533",
                      transform: "translateZ(30px)",
                    }}
                  >
                    {/* Hover background image */}
                    <div
                      className="absolute inset-0 z-0 rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 z-1 rounded-2xl bg-[#262755] transition-colors duration-500 group-hover:bg-[#000000ad]" />

                    {/* Content */}
                    <div className="relative z-2 flex h-full flex-col justify-between text-white">
                      <motion.div
                        variants={iconFloat}
                        animate="float"
                        className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ffd74022]"
                        style={{ transform: "translateZ(40px)" }}
                      >
                        <service.icon size={28} style={{ color: "#ffd740" }} />
                      </motion.div>

                      <div>
                        <h3 className="mb-2 text-xl font-bold text-[#ffd740]">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#f3f3f3]">
                          {service.description}
                        </p>
                      </div>

                      <div
                        className="mt-6 h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #ffd740, #ffffff)",
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
