import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  // You can replace these URLs with your preferred images (or local imports)
  // 1) Example: screenshot / hero image (you provided one at /mnt/data)
  "https://thumbs.dreamstime.com/b/management-team-meeting-45717787.jpg",

  // 2) Resource Allocation
  "https://cuttingedgepr.com/wp-content/uploads/2022/12/Resource-allocation-3-AdobeStock_420664886.jpeg",

  // 3) Workflow Automation
  "https://miro.medium.com/v2/resize:fit:1224/0*PtODZg1PWfA2nVTr.png",

  // 4) Client Communication
  "https://www.lystloc.com/blog/wp-content/uploads/2023/07/How-To-Prepare-Effectively-For-A-Client-Sales-Meetings.webp",
];

const SolutionsSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  // auto-rotate every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="solutions"
      className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 md:py-6"
      style={{ backgroundColor: "#f9f9fb" }}
    >
      {/* Soft decorative blobs (brand-tinted) */}
      <motion.div
        className="absolute -top-32 -left-32 h-[400px] w-[400px] -z-10 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,215,64,0.45), transparent 70%)",
        }}
        animate={{ x: [0, 18, 0], y: [0, -18, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-[400px] w-[400px] -z-10 rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(38,39,85,0.35), transparent 70%)",
        }}
        animate={{ x: [0, -18, 0], y: [0, 16, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <h2
                className="mb-4 text-4xl font-extrabold md:text-5xl"
                style={{
                  color: "#262755",
                  fontFamily: "'Alegreya Sans SC', sans-serif",
                }}
              >
                Distribution &amp; Resource Administration
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{
                  color: "#4b4b6b",
                  fontFamily: "'Sirin Stencil', sans-serif",
                }}
              >
                Manage your teams, workflows, and clients efficiently with our
                comprehensive platform.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Team Management",
                "Resource Allocation",
                "Workflow Automation",
                "Client Communication",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                >
                  <div
                    className="flex h-6 w-6 items-center justify-center text-xs font-bold shadow-md"
                    style={{
                      backgroundColor: "#ffd740",
                      color: "#262755",
                      borderRadius: "9999px",
                    }}
                  >
                    ✓
                  </div>
                  <span
                    className="font-medium"
                    style={{
                      color: "#262755",
                      fontFamily: "'Alegreya Sans SC', sans-serif",
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Dashboard Preview (auto-rotating images) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
          >
            {/* Glow underlay */}
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-80"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,215,64,0.28), rgba(38,39,85,0.18))",
              }}
            />

            <motion.div
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative"
            >
              {/* Card wrapper */}
              <div
                className="group relative flex h-96 items-center justify-center overflow-hidden rounded-3xl border bg-white p-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
                style={{
                  borderColor: "#26275533",
                }}
              >
                {/* Animated image swap using AnimatePresence */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={index}
                    src={images[index]}
                    alt={`preview-${index}`}
                    className="absolute inset-0 h-full w-full object-cover rounded-3xl"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    style={{ willChange: "opacity, transform" }}
                  />
                </AnimatePresence>

                {/* subtle overlay for better contrast (keeps same look as screenshot) */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  initial={{ opacity: 0.06 }}
                  animate={{ opacity: 0.08 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.06))",
                  }}
                />

                {/* Optionally: corner watermark or subtle caption */}
                <div className="absolute left-4 bottom-4 rounded-md bg-white/80 px-3 py-1 text-xs font-medium text-slate-700">
                  {/* show label that maps to the left list */}
                  {["Team Management", "Resource Allocation", "Workflow Automation", "Client Communication"][index]}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
