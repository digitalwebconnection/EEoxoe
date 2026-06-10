import React, { useState } from "react";

export interface Feature {
  step: string;
  title: string;
  desc: string;
}

interface FeatureGridProps {
  features: Feature[];
  initialCount?: number; // default 4
  showToggle?: boolean;  // default true
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  initialCount = 4,
  showToggle = true,
}) => {
  const [showAll, setShowAll] = useState(false);

  const visibleFeatures = showAll
    ? features
    : features.slice(0, initialCount);

  return (
    <>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {visibleFeatures.map((item) => (
          <div
            key={item.step}
            className="group relative overflow-hidden rounded-3xl
            bg-linear-to-br from-indigo-50 via-white to-purple-50
            p-8 transition-all duration-500 ease-out
            hover:-translate-y-3 hover:scale-[1.03]
            hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.55)]"
          >
            {/* Animated Gradient Border */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl
              border border-transparent
              bg-[linear-gradient(120deg,transparent,rgba(99,102,241,0.45),transparent)]
              bg-size-[200%_200%]
              opacity-0 group-hover:opacity-100
              animate-none group-hover:animate-[shimmer_1.6s_linear]"
            />

            {/* Glow Ring */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl
              ring-1 ring-gray-800
              group-hover:ring-2 group-hover:ring-indigo-400/50
              transition-all duration-500"
            />

            {/* Light Sweep */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className="absolute -left-1/2 top-0 h-full w-1/2
                bg-linear-to-r from-transparent via-white/40 to-transparent
                skew-x-[-20deg] animate-[sweep_1.2s_ease-out]"
              />
            </div>

            {/* Floating Step Number */}
            <div
              className="absolute -top-6 -right-6 h-28 w-28 rounded-full
              bg-linear-to-br from-indigo-500 to-purple-500
              flex items-center justify-center
              transition-all duration-500
              group-hover:scale-125 group-hover:rotate-12
              group-hover:shadow-[0_0_45px_rgba(99,102,241,0.6)]"
            >
              <span className="text-3xl font-black text-white drop-shadow-lg">
                {item.step}
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3
                className="mt-20 text-xl font-bold text-gray-900
                transition-all duration-500
                group-hover:-translate-y-1 group-hover:text-indigo-600"
              >
                {item.title}
              </h3>

              <p
                className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed
                transition-all duration-500 delay-75
                group-hover:-translate-y-1 group-hover:text-gray-700"
              >
                {item.desc}
              </p>
            </div>

            {/* Bottom Gradient Progress */}
            <div
              className="absolute bottom-0 left-0 h-1 w-0
              bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
              transition-all duration-700 group-hover:w-full"
            />
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {showToggle && features.length > initialCount && (
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center py-3
            rounded-full bg-[#262755] px-9 text-md font-semibold text-white transition-all duration-300 hover:scale-110 hover:bg-[#ffd740] hover:text-[#262755] hover:shadow-lg hover:shadow-[#ffd740]/50"
          >
            {showAll ? "Show Less Features" : "View More Features"}
          </button>
        </div>
      )}
    </>
  );
};

export default FeatureGrid;
