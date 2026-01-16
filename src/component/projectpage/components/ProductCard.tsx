import { Link } from "react-router-dom";
import { Check, Layers } from "lucide-react";

interface Props {
  id: string;
  name: string;
  shortDesc: string;
  icon?: React.ReactNode;
  featured?: boolean;
}

const ProductCard: React.FC<Props> = ({
  id,
  name,
  shortDesc,
  icon = <Layers size={22} />,
  featured = false,
}) => {
  return (
    <Link
      to={`/products/${id}`}
      className="group relative flex flex-col rounded-[22px] shadow-xl p-8 pt-16 bg-white
      transition-all duration-500 hover:-translate-y-3"
    >
      {/* ================= AMBIENT GLOW ================= */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[22px] opacity-0
        group-hover:opacity-100 transition duration-700 blur-2xl -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,0.35), transparent 70%)",
        }}
      />

      {/* ================= 360° ANIMATED BORDER ================= */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px]"
      >
        <div
          className="absolute inset-[-200%] animate-[spin_3s_linear_infinite]
          opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #2563EB 340deg, #7C3AED 360deg)",
          }}
        />

        <div className="absolute inset-0 rounded-[22px] border border-gray-100 group-hover:border-transparent transition-colors" />
        <div className="absolute inset-1 rounded-[20px] bg-white z-10" />
      </div>

      {/* ================= FEATURED WAVE ================= */}
      {featured && (
        <div className="absolute inset-x-0.5 top-0.5 h-36 overflow-hidden rounded-t-4xl z-20">
          <div className="absolute inset-0 bg-linear-to-br from-[#2563EB] via-[#4F46E5] to-[#7C3AED]" />

          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 180">
            <path
              d="M0,40 C120,80 240,0 360,20 480,40 600,80 720,60
              840,40 960,0 1080,10 1200,20 1320,40 1440,20
              L1440,0 L0,0 Z"
              fill="white"
            />
          </svg>

          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2
            h-12 w-12 rounded-full bg-white
            flex items-center justify-center
            shadow-lg animate-bounce"
          >
            <Check className="text-[#4F46E5]" size={22} />
          </div>
        </div>
      )}

      {/* ================= ICON BADGE ================= */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
        h-14 w-14 rotate-45 rounded-xl
        bg-linear-to-br from-[#011644] to-[#7C3AED]
        flex items-center justify-center
        shadow-lg z-30"
      >
        <div className="-rotate-45 text-white shadow">{icon}</div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-30 text-center">
        <h3 className="mt-4 text-xl font-bold text-[#111827]">
          {name}
        </h3>

        <div className="mx-auto my-4 h-1 w-10 bg-linear-to-r from-[#2563EB] to-[#7C3AED] rounded-full" />

        <p className="mt-8 text-gray-600 text-sm leading-relaxed">
          {shortDesc}
        </p>

        {/* CTA */}
        <div
          className="mt-8 inline-flex items-center gap-2 px-6 py-2
        rounded-full bg-[#262755]  text-md font-semibold text-white transition-all duration-300 hover:scale-110 hover:bg-[#ffd740] hover:text-[#262755] hover:shadow-lg hover:shadow-[#ffd740]/50"
        >
          Explore Product
          <span className="text-lg transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
