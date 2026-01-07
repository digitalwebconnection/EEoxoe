import { useParams } from "react-router-dom";
import { products } from "./data/products";
import FeatureGrid from "./components/FeatureGrid";
import ProductGallery from "./components/ProductGallery";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) return <div className="p-20">Product not found</div>;

  return (
    <main className="bg-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-18 px-6">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-50 via-white to-purple-50" />

        {/* Floating Blurs */}
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-300/10 blur-3xl animate-floatSlow" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl animate-floatSlow delay-2000" />

        <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="animate-fadeUp">
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600">
              Product Overview
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="bg-linear-to-r from-[#262755] to-[#262755] bg-clip-text text-transparent">
                {product.heroTitle}
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              {product.heroDesc}
            </p>

            {/* CTA */}
            <div className="mt-10 inline-flex items-center gap-4 px-8 py-4 
              bg-linear-to-r rounded-full bg-[#262755]  text-sm  text-white transition-all duration-300 hover:scale-110 hover:bg-[#ffd740] hover:text-[#262755] hover:shadow-lg hover:shadow-[#ffd740]/50 font-semibold
              shadow-lg ">
              Explore Features →
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative animate-fadeUp delay-300">
            <div className="relative p-6 group">
              <img
                src={product.heroImage}
                alt={product.name}
                className="w-full rounded-3xl object-cover
                transition-all duration-700
                group-hover:scale-[1.04]
                "
              />

              {/* Floating Badge */}
              <div className="absolute top-6 -right-6 h-16 w-16 rounded-2xl
                bg-linear-to-br from-indigo-600 to-purple-600
                text-white flex items-center justify-center shadow-xl animate-bounceSlow">
                ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-indigo-200 to-transparent" />

        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-16 animate-fadeUp">
            Key Features
          </h2>
          <FeatureGrid features={product.features} />
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <ProductGallery images={product.images} />

      {/* ================= VALUE SECTION ================= */}
      <section className="relative py-20 px-6 bg-slate-50 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold animate-fadeUp">
            Built for Clarity, Control & Scalability
          </h2>

          <p className="mt-6 max-w-5xl mx-auto text-lg text-slate-600 animate-fadeUp delay-200">
            Every product is developed with a clear operational purpose —
            structured workflows, controlled access, and dependable execution.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: "✓", title: "Purpose-Driven Design", color: "indigo" },
              { icon: "🔒", title: "Secure Access Control", color: "purple" },
              { icon: "📈", title: "Scale with Confidence", color: "emerald" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-3xl bg-white p-10 border
                border-slate-900/10
                hover:-translate-y-3 hover:shadow-[0_40px_100px_-30px_rgba(99,102,241,0.35)]
                transition-all duration-500 animate-fadeUp"
              >
                <div
                  className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center
                  rounded-2xl bg-${item.color}-100 text-${item.color}-600
                  group-hover:scale-110 transition`}
                >
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm">
                  Designed to remove complexity while supporting growth and
                  operational confidence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CSS ANIMATIONS ================= */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes bounceSlow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.9s ease-out forwards;
        }
        .animate-floatSlow {
          animation: floatSlow 12s ease-in-out infinite;
        }
        .animate-bounceSlow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default ProductDetailsPage;
