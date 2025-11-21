import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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

const InterfacesSection: React.FC = () => {
  return (
    <section className="relative overflow-visible bg-white px-4 py-10 text-[#262755] sm:px-6 lg:px-8 md:py-8">
      {/* soft split tint like screenshot */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffef6,white_18%,white_70%,#fff7d1)]" />

      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <div className="mb-8 grid items-start gap-10 lg:grid-cols-2">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.p
              variants={item}
              className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#262755]/60"
            >
              WHAT WE DO
            </motion.p>
            <motion.h2
              variants={item}
              className="mb-3 text-4xl font-extrabold leading-[1.1] md:text-5xl"
            >
              Creating User Interfaces That{" "}
              <span className="text-[#ffd740]">Inspire</span> And Involve
            </motion.h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="flex flex-col gap-4"
          >
            <motion.p variants={item} className="text-[#262755]/70">
              Curabitur finibus odio ac lectus semper; vestibulum sit amet velit
              ligula. Pellentesque posuere diam id ultricies iaculis. Integer
              ipsum lorem, rhoncus eu quam quis.
            </motion.p>
            <motion.div variants={item}>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-[#ffd740]/80 px-4 py-2 text-sm font-semibold text-[#262755] ring-1 ring-[#ffd740]/30 hover:text-[#262755]/80"
              >
                Know More <ArrowRight className="size-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Left column */}
          <div className="grid gap-5">
            <Tile title="Get Busy With Things" tint="bg-[#ffeef4]">
              <BadgeRow />
            </Tile>
            <Tile title="Lay Of The Computing" tint="bg-[#f2f0ff]">
              <MiniTable variant="a" />
            </Tile>
          </div>

          {/* Middle column */}
          <div className="grid gap-5">
            <Tile title="Superb cloud management" tint="bg-[#eafaf3]" size="lg">
              <OrbitPreview />
            </Tile>
            <Tile title="Superb cloud management" tint="bg-white" size="lg">
              <MembersPanel />
            </Tile>
          </div>

          {/* Right column */}
          <div className="grid gap-5">
            <Tile title="Get Busy With Things" tint="bg-[#fff8ec]">
              <BoardPreview />
            </Tile>
            <Tile title="Lay Of The Computing" tint="bg-[#f5f1ff]">
              <SwitchList />
            </Tile>
          </div>
        </div>

        {/* Key Areas band */}
        <div className="mt-10">
          <div className="rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-gray-600/60 md:p-8">
            <div className="mb-5 grid items-center gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-extrabold md:text-3xl">
                  Key Areas Of Work For Software Agencies
                </h3>
              </div>
              <div className="flex md:justify-end">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#262755] hover:text-[#262755]/80"
                >
                  More Details <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Web Development",
                "App Development",
                "UI/UX Design",
                "Cloud Solutions",
                "DevOps",
                "Quality Assurance",
                "IT Consulting",
                "Maintenance",
                "Data Analytics",
                "Cybersecurity",
                "E-commerce",
                "AI Integration",
                "Support",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-black ring-1 ring-[#262755]/90"
                >
                  <CheckCircle2 className="size-4 text-[#262755]" /> {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---- sub components ---- */

interface TileProps {
  title: string;
  tint?: string;
  children?: React.ReactNode;
  size?: "sm" | "lg";
}

const Tile: React.FC<TileProps> = ({ title, tint, children, size = "sm" }) => {
  return (
    <motion.article
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{ y: -4 }}
      className={`relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-2 ring-gray-900/50 ${
        tint ?? "bg-white"
      } ${size === "lg" ? "p-6 md:p-7" : "p-5"}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-base font-bold md:text-lg">{title}</h4>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#262755]/60">
          Details <ArrowRight className="size-3" />
        </span>
      </div>
      {children}
    </motion.article>
  );
};

const BadgeRow: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {["UI kit", "Components", "Digital Marketing", "Figma", "Prototyping"].map(
        (b) => (
          <span
            key={b}
            className="rounded-full bg-white px-3 py-1 text-xs ring-1 ring-gray-600 shadow-sm"
          >
            {b}
          </span>
        )
      )}
    </div>
  );
};

interface MiniTableProps {
  variant?: "a" | "b";
}

const MiniTable: React.FC<MiniTableProps> = () => {
  return (
    <div className="grid grid-cols-2 gap-3 text-xs">
      <div className="rounded-xl bg-white p-3 ring-1 ring-gray-600">
        <p className="mb-1 font-semibold">Sessions</p>
        <div className="h-2 rounded bg-[#ffd740]/80" />
      </div>
      <div className="rounded-xl bg-white p-3 ring-1 ring-gray-600">
        <p className="mb-1 font-semibold">Bounce</p>
        <div className="h-2 rounded bg-[#262755]/80" />
      </div>
      <div className="rounded-xl bg-white p-3 ring-1 ring-gray-600">
        <p className="mb-1 font-semibold">Users</p>
        <div className="h-2 rounded bg-[#ffd740]/80" />
      </div>
      <div className="rounded-xl bg-white p-3 ring-1 ring-gray-600">
        <p className="mb-1 font-semibold">CTR</p>
        <div className="h-2 rounded bg-[#262755]/80" />
      </div>
    </div>
  );
};

const MembersPanel: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-3 text-sm">
      <div className="rounded-xl bg-white p-4 ring-1 ring-gray-600">
        <p className="text-xs text-[#262755]">Manage Members</p>
        <div className="mt-2 flex items-center gap-2">
          <div className="size-8 rounded-full bg-[#262755]/50" />
          <div>
            <p className="font-semibold">Archie</p>
            <p className="text-xs text-[#262755]/90">Admin</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-[#262755] p-4 text-white ring-2 ring-gray-600">
        <p className="text-xs/relaxed text-white/80">Usage</p>
        <p className="mt-2 text-3xl font-extrabold">4751</p>
      </div>
      <div className="rounded-xl bg-white p-4 ring-1 ring-gray-600">
        <p className="text-xs text-[#262755]">Category Mix</p>
        <div className="mt-2 h-2 rounded bg-[#ffd740]/80" />
      </div>
    </div>
  );
};

const BoardPreview: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2 text-xs">
      <div className="col-span-2 h-16 rounded-md bg-white p-2 ring-1 ring-gray-600" />
      <div className="h-16 rounded-md bg-white p-2 ring-1 ring-gray-600" />
      <div className="h-16 rounded-md bg-white p-2 ring-1 ring-gray-600" />
      <div className="col-span-2 h-16 rounded-md bg-white p-2 ring-1 ring-gray-600" />
    </div>
  );
};

const SwitchList: React.FC = () => {
  const items = ["New tasks", "API sync", "Governance"];
  return (
    <div className="space-y-2">
      {items.map((label, i) => {
        const on = i === 1;
        return (
          <div
            key={label}
            className="flex items-center justify-between rounded-xl bg-white p-2 ring-1 ring-gray-600"
          >
            <span className="text-xs font-semibold">{label}</span>
            <span
              className={`relative inline-flex h-5 w-10 items-center rounded-full ${
                on ? "bg-green-400" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block size-4 rounded-full bg-white transition-transform ${
                  on ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
};

const OrbitPreview: React.FC = () => {
  const icons = ["🟨", "📁", "🦊", "⚙️", "🗂️", "🧩", "🪄", "☁️"];
  return (
    <div className="relative flex items-center justify-center py-6">
      <div className="relative h-72 w-72">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200" />
        <div className="absolute inset-8 rounded-full border border-gray-200" />
        <div
          className="absolute inset-16 rounded-full"
          style={{
            boxShadow: "inset 0 0 80px 10px rgba(38,39,85,0.06)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-extrabold ring-1 ring-gray-800/60 shadow-sm">
          SAASOFT
        </div>
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        >
          {icons.map((icon, i) => {
            const angle = (i / icons.length) * 360;
            const r = 110;
            const x = Math.cos((angle * Math.PI) / 180) * r;
            const y = Math.sin((angle * Math.PI) / 180) * r;
            return (
              <motion.div
                key={`${icon}-${i}`}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                  className="flex size-10 items-center justify-center rounded-full bg-white text-base ring-2 ring-gray-900/50 shadow-sm"
                >
                  {icon}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default InterfacesSection;
