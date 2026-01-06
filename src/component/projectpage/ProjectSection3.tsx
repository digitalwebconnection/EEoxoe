import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

const ProductsPage = () => {
  return (
    <main className="bg-white">
      {/* HEADER */}
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Our Products
        </h1>

        <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-600">
          Powerful platforms designed for education consultants and enterprises.
          Choose a product to explore its full capabilities.
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="pb-28 px-6">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              shortDesc={product.shortDesc}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
