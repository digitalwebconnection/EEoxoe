import React from "react";
import {  ArrowRight} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import logo from "../../assets/image1.png";
interface Logo {
  src: string;
  alt: string;
}
// Play, for lucide react
// Animation Variants for staggered content
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};


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
// Card Animation Variants (for the right side)
;

// Circular Badge Animation Variants
// const badgeVariants: Variants = {
//   hidden: { opacity: 0, scale: 0.1, rotate: 90 },
//   show: {
//     opacity: 1,
//     scale: 1.1,
//     rotate: 0,
//     transition: { duration: 0.1, type: "spring", stiffness: 200 },
//   },
// };

// Background blob animation variants (using easing array instead of string)
const blobVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    x: [0, 10, 0],
    y: [0, -10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1], // similar to easeInOut
    },
  },
};

// Floating animation for cards


// interface CircularPlayBadgeProps {
//   className?: string;
//   variants: Variants;
// }

const HeroSectionhome: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-8 ">
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          variants={blobVariants}
          animate="animate"
          className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-linear-to-br from-[#E8F4FF] to-[#F7E9FF] blur-3xl opacity-80"
        />
        <motion.div
          variants={blobVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-linear-to-tr from-[#FFF0E1] to-[#EAF7FF] blur-3xl opacity-70"
        />
      </div>

      {/* Main Content Grid */}
      <div className="mx-auto grid max-w-7xl items-center py-12 gap-12 md:grid-cols-2">
        {/* LEFT: copy + CTAs */}
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          {/* Pre-Header */}
          <motion.p
            variants={itemVariants}
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-slate-500"
          >
            INNOVATING TOMORROW, TODAY.
          </motion.p>

          {/* H1 Title */}
          <motion.h1
            variants={itemVariants}
            className="mb-4 font-extrabold leading-[1.1] text-[#262755] text-4xl sm:text-5xl md:text-6xl"
          >
            Turning Vision<br />
            <span className="text-[#FDD53D]">Into High-Impact</span><br />
            <span>Digital Reality.</span>
          </motion.h1>


          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-xl text-lg text-slate-600"
          >
            We turn your ideas into high-performance software built for scalability and business growth. At EXOCHOS, our experts blend technology and creativity to deliver solutions that give you a competitive edge.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button className="h-12 rounded-full bg-[#262755] px-6 text-sm font-semibold text-white transition-all duration-300 hover:scale-110 hover:bg-[#ffd740] hover:text-[#262755] hover:shadow-lg hover:shadow-[#ffd740]/50">
              Get Started
            </button>
            <button className="inline-flex h-12 items-center rounded-full px-6 text-sm font-semibold text-[#262755] transition hover:bg-[#262755]/5">
              Know More <ArrowRight className="ml-2 h-5 w-5" />
            </button>
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

/**
 * Circular text badge with a centered play button.
 */
// const CircularPlayBadge: React.FC<CircularPlayBadgeProps> = ({
//   className = "",
//   variants,
// }) => {
//   const text = " THE INTELLIGENCE REVOLUTION WITH AI •";
//   const repeated = Array(6).fill(text).join("");

//   return (
//     <motion.div
//       variants={variants}
//       initial="hidden"
//       animate="show"
//       className={`relative h-40 w-40 ${className}`}
//     >
//       {/* circle outline */}
//       <div className="absolute inset-0 rounded-full bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur" />

//       {/* circular text via SVG */}
//       <svg
//         viewBox="0 0 200 200"
//         className="absolute inset-0 h-full w-full"
//         style={{ overflow: "visible" }} // <-- important so text isn’t clipped
//       >
//         <defs>
//           {/* slightly smaller radius so text sits further inside */}
//           <path
//             id="circlePath"
//             d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
//           />
//         </defs>

//         <motion.text
//           fill="#1C2250"
//           fontSize="10"
//           fontWeight={700}
//           letterSpacing="1.5"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//         >
//           <textPath href="#circlePath">{repeated}</textPath>
//         </motion.text>
//       </svg>

//       {/* play button */}
//       <motion.button
//         whileHover={{
//           scale: 1.1,
//           boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
//         }}
//         whileTap={{ scale: 0.95 }}
//         className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#262755] text-white shadow-md transition"
//         aria-label="Play"
//       >
//         <Play className="mx-auto h-5 w-5" />
//       </motion.button>
//     </motion.div>
//   );
// };

export default HeroSectionhome;
