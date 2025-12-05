
import React from "react";
import { motion, type Variants } from "framer-motion";
import logo from "../../assets/image1.png";
interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4ABCGrqFRMCJaFGeEL6tnPbMu387NHZQKQ&s",
    alt: "python",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3NkSbg9iOD3ZdGDssZpiRjR94S8RgZNr3Ow&s",
    alt: "Django ",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNIdnt1kk5NWuSM91gwvKGUZJP1p2ADDFZA&s",
    alt: "fastapi",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWyRrjrzABhrUhMOyZ8P8fMJ6e8zaEzAgQHw&s",
    alt: "odoo",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJnmLpgWHeDOXireAPVxm8P2zkYPf8QGpuw&s",
    alt: "js",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7ECW4xHgJyeIQexegqGhxgHGknkobmD0xA&s",
    alt: "react js ",
  },
  {
    src: "https://icon2.cleanpng.com/20180315/ifq/avedfehlg.webp",
    alt: "Postgresql",
  },
  {
    src: "https://w7.pngwing.com/pngs/503/133/png-transparent-ubuntu-plain-logo-icon.png",
    alt: "ubuntu",
  },
    {
    src: "https://img.freepik.com/premium-vector/ai-banner-concept-digital-style-generative-ideas-design-element-internet-technology_208588-4267.jpg?semt=ais_se_enriched&w=740&q=80",
    alt: "Ai",
  },
  {
    src: "https://img.icons8.com/color/1200/nginx.jpg",
    alt: "nginx ",
  },
];

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
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ProgramsSection: React.FC = () => {
  return (
    <section className="relative overflow-visible bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-4 md:py-28">
        {/* Left copy */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.p
            variants={item}
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#262755]/60"
          >
            Build Modern Software, Faster — From APIs to AI
          </motion.p>

          <motion.h2
            variants={item}
            className="mb-5 text-4xl font-extrabold leading-[1.05] text-[#262755] md:text-6xl"
          >
            A Smarter Stack for{" "}
            <br className="hidden md:block" />
           <span className="text-[#FDD53D] text-shadow-black text-shadow-md">Faster Development</span> 
          </motion.h2>

          <motion.p
            variants={item}
            className="mb-8 max-w-xl text-base text-[#262755]/70 md:text-lg"
          >
           We combine best-in-class tools to accelerate development, reduce ops friction and unlock intelligent features. Whether you're building enterprise ERPs, high-performance APIs, or interactive frontends, our stack gives your team the speed, stability and observability needed to deliver on time — every time.
          </motion.p>

          {/* Email capture */}
          <motion.div
            variants={item}
            className="flex w-full max-w-xl items-center gap-3"
          >
            <div className="flex-1 rounded-full bg-white px-5 py-3 text-sm text-[#262755] shadow-sm ring-1 ring-[#262755]/85">
              <input
                className="w-full bg-transparent outline-none placeholder:text-[#262755]/40"
                placeholder="Enter your mail…"
                type="email"
              />
            </div>
            <button
              type="button"
              className="rounded-full relative md:-ms-38 bg-[#ffd740] px-8 py-2 text-sm font-semibold text-[#262755] hover:text-[#ffd740]  transition hover:bg-[#262755]/90 hover:shadow-xl hover:shadow-[#ffd740]/80"
            >
              Try for free
            </button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-4 flex items-center gap-2 text-sm text-[#262755]/60"
          >
            <span className="inline-block size-2 rounded-full bg-green-400" />
            2,000+ people started a free trial in the last 30 days
          </motion.div>
        </motion.div>

        {/* Right orbit */}
        <div className="relative flex items-center justify-center">
          <div className="relative h-112 w-md md:h-128 md:w-lg">
            {/* Outer rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200" />
            <div className="absolute inset-10 rounded-full border border-gray-200" />

            {/* Soft inner halo */}
            <div
              className="absolute inset-20 rounded-full"
              style={{
                boxShadow:
                  "inset 0 0 80px 10px rgba(38,39,85,0.08)",
              }}
            />

            {/* Center disk */}
            <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-center ring-1 ring-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <span className=" tracking-wide text-[#262755]">
                 <img src={logo} alt="Logo" className="h-[50px] w-50 " />
              </span>
            </div>

            {/* Rotating frame */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 28,
                ease: "linear",
              }}
            >
              {logos.map((logo, i) => {
                const angle = (i / logos.length) * 360;
                const r = 220;
                const x = Math.cos((angle * Math.PI) / 180) * r;
                const y = Math.sin((angle * Math.PI) / 180) * r;

                return (
                  <motion.div
                    key={logo.alt}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    {/* Counter-rotate so logos stay upright */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 28,
                        ease: "linear",
                      }}
                      className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-gray-900/60 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        width={56}
                        height={56}
                        loading="lazy"
                        className="object-contain  rounded-full"
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
