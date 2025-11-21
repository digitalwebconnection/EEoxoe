import React from "react";
import { motion } from "framer-motion";

const SolutionsSection: React.FC = () => {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 md:py-12"
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

          {/* Right - Dashboard Preview */}
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
              {/* Card replacement (no UI library) */}
              <div
                className="group relative flex h-96 items-center justify-center overflow-hidden rounded-3xl border bg-white p-8 shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
                style={{
                  backgroundImage:
                    "url('https://as1.ftcdn.net/jpg/02/59/51/26/1000_F_259512677_UynSpsczLyClBmci2W2lewuAutVsTlpo.jpg'), linear-gradient(135deg,#ffffff,#f7f7fa)",
                  backgroundSize: "cover, auto",
                  backgroundPosition: "center, center",
                  backgroundRepeat: "no-repeat, no-repeat",
                  borderColor: "#26275533",
                }}
              >
                {/* Readability overlay (visible, stronger on hover) */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  initial={{ opacity: 0.35 }}
                  whileHover={{ opacity: 0.55 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background:
                      "linear-gradient(80deg, #000000, #000000 85%, #000000)",
                  }}
                />
                {/* You can add inner content here if needed */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
