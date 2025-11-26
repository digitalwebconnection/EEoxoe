import React from "react";

const CaseStudiesHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900/40 via-sky-50/30 to-slate-400/60">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#0B1531]/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-[#FACC15]/20 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:gap-14 lg:py-20">
        {/* LEFT: Copy */}
        <div className="max-w-xl space-y-5">
          <p className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B1531] shadow-sm ring-1 ring-slate-200">
            Case Studies · Real Results
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-[#0B1531] sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            Proof that{" "}
            <span className="text-[#FACC15]">smart software</span>{" "}
            grows real businesses.
          </h1>

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore how we helped teams modernise their systems, automate
            manual work and unlock new revenue – with web, mobile, Odoo and
            data-driven marketing working together.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="inline-flex items-center justify-center rounded-full bg-[#0B1531] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#0B1531]/40 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1531] focus-visible:ring-offset-2">
              View All Case Studies
            </button>

            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-semibold text-[#0B1531] shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1531] focus-visible:ring-offset-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FACC15] text-[#0B1531] shadow">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 7.5v9l7-4.5-7-4.5z" />
                </svg>
              </span>
              Watch Client Story
            </button>
          </div>

          {/* Small stats row */}
          <div className="mt-4 flex flex-wrap gap-6 text-xs text-slate-600 sm:text-sm">
            <div>
              <p className="font-semibold text-[#0B1531]">40+ projects</p>
              <p>Delivered across SaaS, ERP & mobile.</p>
            </div>
            <div>
              <p className="font-semibold text-[#0B1531]">Up to 3× faster</p>
              <p>Workflows after rollout on average.</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Visual / 3D style card */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Floating dots */}
          <span className="absolute -top-4 right-10 h-2 w-2 rounded-full bg-[#FACC15]" />
          <span className="absolute bottom-6 -left-2 h-1.5 w-1.5 rounded-full bg-[#030c25]" />
          <span className="absolute top-10 left-8 h-1 w-1 rounded-full bg-[#FACC15]" />

          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-0.5 rounded-4xl bg-linear-to-tr from-[#0B1531]/20 via-[#FACC15]/40 to-transparent blur-lg" />
            <div className="relative overflow-hidden rounded-4xl bg-white px-6 pb-6 pt-7 shadow-2xl shadow-slate-300/80">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Featured Case Study
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#0B1531]">
                    Fintech workflow automation
                  </p>
                </div>
                <span className="rounded-full bg-[#FACC15]/20 px-3 py-1 text-[11px] font-semibold text-[#0B1531]">
                  +62% efficiency
                </span>
              </div>

              <div className="mt-5 flex items-center justify-center">
                <div className="relative h-40 w-40 sm:h-74 sm:w-64">
                  <div className="absolute inset-0  " />
                  {/* Illustration placeholder */}
                  <img
                    src="https://img.freepik.com/free-photo/happy-young-man-using-laptop-computer_171337-19581.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Happy client using laptop"
                    className="relative z-10 h-full w-full  object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
