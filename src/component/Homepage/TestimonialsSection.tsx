import React from "react";
import { motion, type Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content:
      "SaaSoft transformed our development process. The results exceeded our expectations.",
    avatar: "👩‍💼",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "CTO, Innovate Ltd",
    content:
      "Outstanding service and support. Highly recommend for any enterprise solution.",
    avatar: "👨‍💻",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Lead, StartupX",
    content:
      "Worked with SaaSoft on our biggest project. They delivered on time and beyond scope.",
    avatar: "👩‍🔬",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Head of Platform, OrbitAI",
    content:
      "From discovery to rollout, the team was world-class. Our velocity doubled in two sprints.",
    avatar: "🧑‍🚀",
    rating: 5,
  },
];

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative overflow-visible bg-white px-4 py-20 text-[#262755] sm:px-6 lg:px-8 md:py-32">
      {/* soft backdrop + accents */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#fffef6] via-white to-white" />
      <div
        className="absolute -top-24 -right-24 h-[520px] w-[520px] -z-10 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle,#ffd74055,#ffd74000 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-12 text-center"
        >
          <motion.h2
            variants={item}
            className="mb-3 text-4xl font-extrabold md:text-5xl"
          >
            Success Stories From Our{" "}
            <span className="text-[#ffd740]">Clients</span>
          </motion.h2>
          <motion.p
            variants={item}
            className="mx-auto max-w-2xl text-lg text-[#262755]/70"
          >
            See what our partners say about building with SaaSoft.
          </motion.p>
          <motion.div
            variants={item}
            className="mx-auto mt-6 h-1 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg,#ffd740,#262755)",
            }}
          />
        </motion.div>

        {/* Grid on desktop */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="hidden grid-cols-3 gap-6 md:grid"
        >
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </motion.div>

        {/* Mobile marquee carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <ul className="flex gap-4 animate-marquee mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {testimonials.concat(testimonials).map((t, i) => (
                <li key={`${t.name}-${i}`} className="w-[85%] shrink-0">
                  <TestimonialCard t={t} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust strip */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-[#262755]/5 px-4 py-2 ring-1 ring-[#262755]/10"
          >
            <span className="inline-block size-2 rounded-full bg-[#ffd740]" />
            98% would recommend SaaSoft to a colleague
          </motion.div>
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-[#262755]/5 px-4 py-2 ring-1 ring-[#262755]/10"
          >
            <span className="inline-block size-2 rounded-full bg-[#ffd740]" />
            Avg. rating 4.9/5 across 250+ reviews
          </motion.div>
        </motion.div>
      </div>

      {/* Local marquee animation */}
      <style>{`
        .animate-marquee {
          animation: marquee 24s linear infinite;
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

interface TestimonialCardProps {
  t: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ t }) => {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="relative h-full rounded-2xl bg-white p-6 ring-2 ring-gray-900/50 shadow-sm"
    >
      {/* top accent */}
      <div className="absolute -top-1 left-6 h-1 w-24 rounded-full bg-[#ffd740]" />

      {/* floating quote */}
      <Quote className="absolute -right-2 -top-2 size-8 text-[#262755]/10" />

      {/* rating */}
      <div className="mb-3 flex gap-1">
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star
            key={j}
            className="size-4 fill-[#ffd740] text-[#ffd740]"
          />
        ))}
      </div>

      {/* content */}
      <p className="mb-5 italic leading-relaxed text-[#262755]">
        “{t.content}”
      </p>

      {/* person */}
      <div className="flex items-center gap-3">
        <div className="grid size-12 place-items-center rounded-full bg-linear-to-br from-[#ffd740] to-[#ffd740]/60 text-2xl shadow-sm">
          {t.avatar}
        </div>
        <div>
          <p className="font-bold">{t.name}</p>
          <p className="text-xs text-[#262755]/70">{t.role}</p>
        </div>
      </div>

      {/* hover shine */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-24 -top-24 h-24 rotate-6 bg-linear-to-r from-transparent via-[#ffd740]/20 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"
      />
    </motion.article>
  );
};

export default TestimonialsSection;
