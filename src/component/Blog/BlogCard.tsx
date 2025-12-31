import { motion, type Variants, cubicBezier } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";

/* --------------------------------
   Smooth Easing Preset
----------------------------------*/
const smoothEase = cubicBezier(0.22, 1, 0.36, 1);

/* --------------------------------
   Blog Data
----------------------------------*/
const blogs = [
  {
    slug: "digital-strategy-business-growth",
    title: "How Digital Strategy Drives Real Business Growth",
    excerpt:
      "A practical breakdown of how smart digital strategies convert traffic into long-term revenue.",
    content:
      "Digital strategy today is about alignment between business goals, customer intent, and technology. Brands that win focus on data-driven decisions, consistent messaging, and long-term value creation.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    category: "Digital Strategy",
    date: "12 Jan 2025",
    readTime: "5 min read",
  },
  {
    slug: "seo-2025-what-works",
    title: "SEO in 2025: What Actually Works Now",
    excerpt:
      "Search algorithms evolve fast. Here’s what genuinely improves rankings today.",
    content:
      "SEO has shifted from manipulation to usefulness. Search engines now reward topical authority, helpful content, clean UX, and genuine expertise.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "SEO",
    date: "18 Jan 2025",
    readTime: "6 min read",
  },
  {
    slug: "Paid Ads",
    title: "Paid Ads vs Organic Marketing: Where Should You Invest?",
    excerpt:
      "Understanding ROI, timelines, and scalability between paid and organic growth.",
    content:
      "SEO has shifted from manipulation to usefulness. Search engines now reward topical authority, helpful content, clean UX, and genuine expertise.",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Marketing",
    date: "22 Jan 2025",
    readTime: "4 min read",
  },
  {
    slug: "How Content",
    title: "How Content Builds Trust Before the First Call",
    excerpt:
      "Educational content shortens sales cycles and attracts high-intent customers.",
    content:
      "SEO has shifted from manipulation to usefulness. Search engines now reward topical authority, helpful content, clean UX, and genuine expertise.",

    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    category: "Content",
    date: "28 Jan 2025",
    readTime: "5 min read",
  },
  {
    slug: "Website Design",
    title: "Website Design Mistakes That Kill Conversions",
    excerpt:
      "Common UX and UI mistakes that silently push customers away.",
    content:
      "SEO has shifted from manipulation to usefulness. Search engines now reward topical authority, helpful content, clean UX, and genuine expertise.",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Web Design",
    date: "02 Feb 2025",
    readTime: "6 min read",
  },
  {
    slug: "AI Tools",
    title: "AI Tools Every Modern Business Should Use",
    excerpt:
      "From automation to analytics, tools that give teams an edge.",
    content:
      "SEO has shifted from manipulation to usefulness. Search engines now reward topical authority, helpful content, clean UX, and genuine expertise.",

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    category: "AI & Tech",
    date: "05 Feb 2025",
    readTime: "7 min read",
  },
];


/* --------------------------------
   Animations
----------------------------------*/
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

/* --------------------------------
   Page Component
----------------------------------*/
export default function BlogPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");

  const selectedBlog = blogs.find((b) => b.slug === slug);

  /* ---------- BLOG DETAIL ---------- */
  if (selectedBlog) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: smoothEase }}
        className="bg-white"
      >
        {/* Hero */}
        <div className="relative h-[50vh] overflow-hidden">
          <motion.img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="h-full w-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: smoothEase }}
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 max-w-7xl px-6 text-center text-white">
            <span className="text-sm text-yellow-400 uppercase">
              {selectedBlog.category}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">
              {selectedBlog.title}
            </h1>
            <p className="mt-4 text-sm opacity-90">
              {selectedBlog.date} • {selectedBlog.readTime}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg leading-relaxed text-gray-700"
          >
            {selectedBlog.content}
          </motion.p>

          <div className="mt-12 flex gap-4">
            <button
              onClick={() => navigate("/blog")}
              className="rounded-lg border px-6 py-3 font-semibold hover:bg-gray-100 transition"
            >
              ← Back to Blogs
            </button>

            <button className="rounded-lg bg-[#262755] px-6 py-3 text-white font-semibold hover:bg-[#FDD53D] hover:text-black transition">
              Get Expert Advice →
            </button>
          </div>
        </div>
      </motion.article>
    );
  }

  /* ---------- BLOG LIST ---------- */
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.intuji.com/2022/08/Software-development-digital-transformation_comp-scaled-1.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <motion.div
          className="relative max-w-7xl mx-auto px-6 py-24"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block mb-4 rounded-full bg-yellow-400/20 px-4 py-1 text-sm font-semibold text-yellow-300"
          >
            ✨ Insights • Trends • Guides
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Smart Ideas That Shape{" "}
            <span className="text-yellow-400">Better Decisions</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-lg text-gray-200"
          >
            Practical insights, industry trends, and expert opinions to help you
            stay ahead.
          </motion.p>
        </motion.div>
      </section>

      {/* GRID */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <motion.article
              key={blog.slug}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.35, ease: smoothEase },
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(`/blog?slug=${blog.slug}`)}
              className="cursor-pointer rounded-2xl bg-white shadow-md hover:shadow-2xl transition will-change-transform"
            >
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.18 }}
                  transition={{ duration: 1.2, ease: smoothEase }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-yellow-400 px-4 py-1 text-xs font-semibold text-blue-900">
                  {blog.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {blog.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="mt-4 text-xs text-gray-500">
                  {blog.date} • {blog.readTime}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
