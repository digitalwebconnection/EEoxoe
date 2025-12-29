"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState, useEffect } from "react";

/* --------------------------------
   Animation Variants (FIXED)
----------------------------------*/

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const contentFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* --------------------------------
   Blog Data
----------------------------------*/

const blogs = [
  {
    title: "How Digital Strategy Drives Real Business Growth",
    excerpt:
      "A practical breakdown of how smart digital strategies convert traffic into long-term revenue.",
    content:
      "Digital strategy today is about alignment — between business goals, customer intent, and technology. Brands that win focus on data-driven decisions, consistent messaging, and long-term value creation. A strong digital strategy removes guesswork and builds predictable growth engines.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    category: "Digital Strategy",
    date: "12 Jan 2025",
    readTime: "5 min read",
  },
  {
    title: "SEO in 2025: What Actually Works Now",
    excerpt:
      "Search algorithms evolve fast. Here’s what genuinely improves rankings today.",
    content:
      "SEO has shifted from manipulation to usefulness. Search engines now reward topical authority, helpful content, clean UX, and genuine expertise. Businesses must focus on quality over shortcuts to win long-term visibility.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "SEO",
    date: "18 Jan 2025",
    readTime: "6 min read",
  },
  {
    title: "Paid Ads vs Organic Marketing: Where Should You Invest?",
    excerpt:
      "Understanding ROI, timelines, and scalability between paid and organic growth.",
    content:
      "Paid ads offer speed and scale, while organic marketing builds trust and sustainability. The smartest brands use ads to validate ideas and organic channels to compound growth over time.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Marketing",
    date: "22 Jan 2025",
    readTime: "4 min read",
  },
  {
    title: "How Content Builds Trust Before the First Call",
    excerpt:
      "Educational content shortens sales cycles and attracts high-intent customers before they ever speak to sales.",
    content:
      "Trust-driven content answers customer questions before sales calls. Blogs, guides, and insights reduce friction, build authority, and attract better-qualified leads.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    category: "Content",
    date: "28 Jan 2025",
    readTime: "5 min read",
  },
  {
    title: "Website Design Mistakes That Kill Conversions",
    excerpt:
      "Common UX and UI mistakes that silently push potential customers away from your website.",
    content:
      "Slow load speed, unclear CTAs, cluttered layouts, and poor mobile experiences reduce conversions. Great design removes friction and guides users naturally.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Web Design",
    date: "02 Feb 2025",
    readTime: "6 min read",
  },
  {
    title: "AI Tools Every Modern Business Should Use",
    excerpt:
      "From automation to analytics, these AI tools help teams work faster and smarter.",
    content:
      "AI tools improve productivity, automate workflows, and enhance decision-making. Businesses that adopt AI early gain a measurable competitive advantage.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    category: "AI & Tech",
    date: "05 Feb 2025",
    readTime: "7 min read",
  },
];

/* --------------------------------
   Page Component
----------------------------------*/

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [progress, setProgress] = useState(0);

  // Reading progress
  useEffect(() => {
    if (!selectedBlog) return;

    const handleScroll = (e: any) => {
      const el = e.target;
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress((scrollTop / scrollHeight) * 100);
    };

    const modal = document.getElementById("blog-scroll");
    modal?.addEventListener("scroll", handleScroll);

    return () => modal?.removeEventListener("scroll", handleScroll);
  }, [selectedBlog]);

  return (
    <>
      {/* BLOG GRID */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Latest Insights & Ideas
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Deep dives, strategies, and perspectives shaping modern businesses.
            </p>
          </div>

          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {blogs.map((blog, index) => (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                onClick={() => setSelectedBlog(blog)}
                className="cursor-pointer rounded-2xl bg-white shadow-md hover:shadow-2xl transition"
              >
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PREMIUM MODAL */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 60 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Progress Bar */}
              <motion.div
                className="absolute top-0 left-0 h-1 bg-yellow-400"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />

              {/* Close */}
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedBlog(null)}
                className="absolute top-5 right-5 z-10 rounded-full bg-white/90 px-3 py-1 text-lg hover:bg-white"
              >
                ✕
              </motion.button>

              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="h-72 md:h-auto">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <motion.div
                  id="blog-scroll"
                  variants={contentFade}
                  initial="hidden"
                  animate="visible"
                  className="max-h-[80vh] overflow-y-auto p-10"
                >
                  <span className="text-sm font-semibold text-yellow-500">
                    {selectedBlog.category}
                  </span>

                  <h2 className="mt-2 text-3xl font-extrabold text-gray-900 leading-snug">
                    {selectedBlog.title}
                  </h2>

                  <div className="mt-3 text-sm text-gray-500">
                    {selectedBlog.date} • {selectedBlog.readTime}
                  </div>

                  <p className="mt-8 text-gray-700 leading-relaxed text-lg">
                    {selectedBlog.content}
                  </p>

                  <div className="mt-10 border-t pt-6">
                    <button className="rounded-lg bg-blue-900 px-6 py-3 text-white font-semibold hover:bg-blue-800 transition">
                      Get Expert Advice →
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
