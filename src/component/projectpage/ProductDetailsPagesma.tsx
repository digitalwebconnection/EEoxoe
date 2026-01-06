import { useParams } from "react-router-dom";
import { products } from "./data/products";
import FeatureGrid from "./components/FeatureGrid";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) return <div className="p-20">Product not found</div>;

  return (
    <main className="bg-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-24 px-6">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-50 via-white to-purple-50" />

        {/* Decorative Blurs */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <div className="inline-flex items-center rounded-full bg-indigo-100 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600">
              Product Overview
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {product.heroTitle}
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              {product.heroDesc}
            </p>

         
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative">
            {/* Card Wrapper */}
            <div className="relative rounded-3xl bg-white p-6 ">
              {/* Image Placeholder */}
              <img
                src={product.heroImage}
                alt={product.name}
                className="w-full rounded-2xl object-cover"
              />

              {/* Floating Accent */}
              <div className="absolute -top-6 -right-6 h-16 w-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-10 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-16">
            Key Features
          </h2>

          <FeatureGrid features={product.features} />
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
