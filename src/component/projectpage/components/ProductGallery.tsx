import React, { useState, useEffect } from "react";

export interface ProductImage {
  src: string;
  alt?: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
  initialCount?: number;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  initialCount = 4,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const visibleImages = showAll ? images : images.slice(0, initialCount);

  const close = () => setActiveIndex(null);
  const next = () =>
    setActiveIndex((i) => (i! + 1) % images.length);
  const prev = () =>
    setActiveIndex((i) => (i! - 1 + images.length) % images.length);

  // Keyboard support
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <>
      {/* ================= GALLERY GRID ================= */}
      <section className="py-6 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Product Experience
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Step inside the product and explore real screens in sequence.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {visibleImages.map((img, index) => (
              <div
                key={`${img.src}-${index}`}
                onClick={() => setActiveIndex(index)}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.alt || "Product image"}
                  className="h-full w-full object-cover
        transition-transform duration-1000 ease-out
        group-hover:scale-[1.06]"
                />

                {/* ===== CENTER RADIAL OVERLAY ===== */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Radial Expanding Circle */}
                  <div
                    className="absolute h-0 w-0 rounded-full
          bg-[#262755]/90
          group-hover:h-[160%] group-hover:w-[160%]
          transition-all duration-1000 ease-out"
                  />
                </div>

                {/* Inner Outline */}
                <div
                  className="absolute inset-6 rounded-2xl
        border border-white/90
        opacity-0 scale-90
        group-hover:opacity-100 group-hover:scale-100
        transition duration-1000 ease-out delay-200"
                />

                {/* ===== CENTER CONTENT (SLOW FADE + SCALE) ===== */}
                <div
                  className="absolute inset-0 z-10 flex flex-col
        items-center justify-center text-center
        text-[#FDD53D] px-6
        opacity-0 scale-90
        group-hover:opacity-100 group-hover:scale-100
        transition duration-700 ease-out delay-300"
                >
                  {/* Icon */}
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center
          rounded-full bg-white text-indigo-900 text-xl font-bold
          animate-none group-hover:animate-[pulseSlow_2.4s_ease-in-out_infinite]"
                  >
                    ↗
                  </div>

                  <h3 className="text-lg font-semibold tracking-wide">
                    View Preview
                  </h3>
                </div>
              </div>
            ))}
          </div>



          {images.length > initialCount && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-indigo-600 font-semibold hover:text-indigo-700"
              >
                {showAll ? "Show Less" : "View Full Experience →"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= LIGHTBOX EXPERIENCE ================= */}
      {activeIndex !== null && (
        <div
          className="fixed  inset-0 z-50 bg-black/80 backdrop-blur-lg
          flex items-center justify-center px-6"
          onClick={close}
        >
          <div
            className="relative max-w-6xl w-full top-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="absolute -top-14 left-0 right-0
              flex items-center justify-between text-white text-sm">
              <span>
                Screen {activeIndex + 1} of {images.length}
              </span>
              <button onClick={close} className="text-xl">
                ✕
              </button>
            </div>

            {/* Image */}
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="w-full max-h-[75vh] object-contain rounded-2xl
              shadow-2xl bg-white animate-[zoomIn_1.1s_ease-out]"
            />

            {/* Navigation */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2
              h-12 w-12 rounded-full bg-[#262755] text-white
              flex items-center justify-center shadow hover:scale-105 transition"
            >
              ←
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2
              h-12 w-12 rounded-full bg-[#262755] text-white
              flex items-center justify-center shadow hover:scale-110 transition"
            >
              →
            </button>

            {/* Thumbnails */}
            <div className="mt-6  flex justify-center gap-3 overflow-x-auto">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  onClick={() => setActiveIndex(i)}
                  className={`h-16 w-24 object-cover rounded-lg cursor-pointer
                  transition border-2 ${i === activeIndex
                      ? "border-indigo-500"
                      : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Animation */}
          <style>{`
            @keyframes zoomIn {
              from { opacity: 0; transform: scale(0.92); }
              to { opacity: 1; transform: scale(1); }
            }
                @keyframes pulseSlow {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.12);
    }
  }
          `}</style>
        </div>
      )}
    </>
  );
};

export default ProductGallery;
