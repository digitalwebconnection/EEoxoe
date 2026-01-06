import { Link } from "react-router-dom";
import { Check, Layers } from "lucide-react";

interface Props {
  id: string;
  name: string;
  shortDesc: string;
  icon?: React.ReactNode;
  featured?: boolean; // first card animation
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
      className="group relative rounded-[22px] bg-white
      p-8 pt-16
      border border-gray-800/30
      shadow-2xl shadow-gray-900/50
      transition-all duration-500
      hover:-translate-y-3 hover:shadow-[0_35px_70px_-25px_rgba(0,0,0,0.2)]"
    >
      {/* ================= FEATURED ANIMATED WAVE ================= */}
      {featured && (
        <div className="absolute inset-x-0 top-0 h-36 overflow-hidden rounded-t-[22px]">
          <div className="absolute inset-0 bg-linear-to-br from-[#2563EB] via-[#4F46E5] to-[#7C3AED]" />

          {/* Wave Shape */}
          <svg
            className="absolute bottom-0 w-full"
            viewBox="0 0 1440 90"
            fill="none"
          >
            <path
              d="M0,40 C120,80 240,0 360,20 480,40 600,80 720,60 840,40 960,0 1080,10 1200,20 1320,40 1440,20 L1440,0 L0,0 Z"
              fill="white"
            />
          </svg>

          {/* Floating Check */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2
            h-12 w-12 rounded-full bg-white
            flex items-center justify-center
            shadow-lg animate-bounce">
            <Check className="text-[#4F46E5]" size={22} />
          </div>
        </div>
      )}

      {/* ================= ICON BADGE ================= */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
        h-14 w-14 rotate-45 rounded-xl
        bg-linear-to-br from-[#2563EB] to-[#7C3AED]
        flex items-center justify-center
        shadow-lg"
      >
        <div className="-rotate-45 text-white">
          {icon}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center">
        <h3 className="mt-4 text-xl font-bold text-[#111827]">
          {name}
        </h3>

        <div className="mx-auto my-4 h-1 w-10 bg-linear-to-r from-[#2563EB] to-[#7C3AED] rounded-full" />

        <p className="text-gray-600 leading-relaxed">
          {shortDesc}
        </p>

        <div className="mt-6 inline-flex items-center gap-2
          text-[#2563EB] font-semibold">
          Learn More
          <span className="text-lg">→</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
