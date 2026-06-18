import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays, Clock, AlertCircle, RefreshCw } from "lucide-react";
import { apiUrl, getImageUrl } from "../../lib/api";
import { fetchWithRetry } from "../../lib/fetchWithRetry";
import { cacheGetStale, cacheSet } from "../../lib/dataCache";
import { staticBlogs } from "../../lib/staticBlogs";

const CACHE_KEY = "blogs_list";

interface Blog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
  isStatic?: boolean;
}

const BlogPage = () => {
  // Initialize blogs with cached list if exists, otherwise clicked blogs + static blogs
  const [blogs, setBlogs] = useState<Blog[]>(() => {
    try {
      // 1. Try to load the full cached dynamic blogs list first (if user is returning / navigating back)
      const cachedList = cacheGetStale<Blog[]>(CACHE_KEY);
      if (cachedList && cachedList.length > 0) {
        return cachedList;
      }

      // 2. Fall back to static blogs + clicked blogs hybrid list on very first load
      const list = [...staticBlogs] as any[];
      const raw = localStorage.getItem("clicked_blogs");
      const clickedData = raw ? JSON.parse(raw) : [];
      
      const deletedRaw = localStorage.getItem("deleted_blog_slugs");
      const deletedSlugs: string[] = deletedRaw ? JSON.parse(deletedRaw) : [];

      if (Array.isArray(clickedData)) {
        clickedData.forEach((item) => {
          if (item && typeof item === "object" && "blog" in item && "index" in item) {
            const b = item.blog;
            const idx = item.index;
            if (idx >= 0 && idx < list.length && !deletedSlugs.includes(b.slug) && !deletedSlugs.includes(b._id)) {
              list[idx] = b;
            }
          }
        });
      }
      return list;
    } catch {
      return staticBlogs as any;
    }
  });

  const [loading, setLoading] = useState(false); // Direct render of initialBlogs, no skeleton
  const [error, setError] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(true);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    setIsRefreshing(true);

    fetchWithRetry(apiUrl("/api/blogs"), { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setBlogs(data.data);
          cacheSet(CACHE_KEY, data.data);
          setError("");

          // Clean up deleted blogs from clicked_blogs in localStorage
          try {
            const raw = localStorage.getItem("clicked_blogs");
            if (raw) {
              const clickedData = JSON.parse(raw);
              const freshBlogs = data.data;

              if (Array.isArray(clickedData)) {
                // Filter out clicked blogs that are no longer in freshBlogs, and update their index
                const updatedClicked = clickedData
                  .map((item) => {
                    if (item && typeof item === "object" && "blog" in item && "index" in item) {
                      const cb = item.blog;
                      if (cb._id.startsWith("static-")) return item;
                      const freshIndex = freshBlogs.findIndex((fb: Blog) => fb._id === cb._id || fb.slug === cb.slug);
                      if (freshIndex !== -1) {
                        return { blog: freshBlogs[freshIndex], index: freshIndex };
                      }
                    }
                    return null;
                  })
                  .filter(Boolean);

                localStorage.setItem("clicked_blogs", JSON.stringify(updatedClicked));
              }

              // Record deleted slugs/IDs to avoid showing them
              const deletedSlugs: string[] = [];
              if (Array.isArray(clickedData)) {
                clickedData.forEach((item) => {
                  if (item && typeof item === "object" && "blog" in item) {
                    const cb = item.blog;
                    if (!cb._id.startsWith("static-")) {
                      const exists = freshBlogs.some((fb: Blog) => fb._id === cb._id || fb.slug === cb.slug);
                      if (!exists) {
                        deletedSlugs.push(cb.slug);
                        deletedSlugs.push(cb._id);
                        localStorage.removeItem(`ts_cache_blog_detail_${cb.slug}`);
                        localStorage.removeItem(`ts_cache_blog_detail_${cb._id}`);
                      }
                    }
                  }
                });
              }

              if (deletedSlugs.length > 0) {
                const existingDeletedRaw = localStorage.getItem("deleted_blog_slugs");
                const existingDeleted: string[] = existingDeletedRaw ? JSON.parse(existingDeletedRaw) : [];
                const newDeleted = Array.from(new Set([...existingDeleted, ...deletedSlugs]));
                localStorage.setItem("deleted_blog_slugs", JSON.stringify(newDeleted));
              }
            }
          } catch (e) {
            console.error("Error updating clicked_blogs storage:", e);
          }
        } else {
          // If fetch fails, we just keep displaying static / clicked blogs
          console.warn("Could not fetch fresh blogs:", data.message);
        }
      })
      .catch((err) => {
        console.error("Error fetching fresh blogs:", err);
      })
      .finally(() => {
        setIsRefreshing(false);
      });
  }, []);


  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col items-center justify-center gap-2 mb-10">
          <div className="flex items-center gap-3">
            <h1 className="text-5xl md:text-5xl font-black text-[#262755]">Blogs</h1>
            {isRefreshing && (
              <RefreshCw
                size={22}
                className="text-[#262755] animate-spin mt-1"
              />
            )}
          </div>
          <p className="text-slate-900 text-sm md:text-base text-center font-light max-w-5xl mt-1">
            Stay updated with the latest insights, implementation guides, and technological trends in CRM & HRMS platforms.
          </p>
        </div>

        {loading ? (
          // Full skeleton — shown only on very first visit with no cache
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="rounded-md border border-gray-200 bg-white shadow-md h-full flex flex-col overflow-hidden animate-pulse"
              >
                <div className="h-56 w-full bg-gray-200" />
                <div className="p-6 flex flex-col grow gap-3">
                  <div className="flex justify-between items-center">
                    <div className="h-6 w-20 bg-gray-200 rounded-full" />
                    <div className="h-4 w-16 bg-gray-200 rounded" />
                  </div>
                  <div className="h-8 w-full bg-gray-200 rounded mt-2" />
                  <div className="h-8 w-3/4 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : error && blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 px-4 text-center">
            <AlertCircle className="text-red-500" size={44} />
            <p className="text-red-600 font-medium text-lg">{error}</p>
            <button
              onClick={() => {
                hasFetched.current = false;
                setError("");
                setLoading(true);
              }}
              className="mt-2 px-6 py-2 bg-[#262755] text-white rounded-full font-semibold hover:bg-[#1a1b3d] transition"
            >
              Retry
            </button>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No blog posts found yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-10">
            {blogs.map((post, index) => {
              const staticMatch = staticBlogs.find((sb) => sb.slug === post.slug);
              const displayImage = post.isStatic ? post.image : (post.image ? getImageUrl(post.image) : (staticMatch ? staticMatch.image : ''));
              return (
                <Link
                  to={`/blog/${post.slug || post._id}`}
                  key={post._id}
                  className="group h-full"
                  onClick={() => {
                    if (!post.isStatic) {
                      try {
                        const raw = localStorage.getItem("clicked_blogs");
                        let clicked: { blog: Blog; index: number }[] = raw ? JSON.parse(raw) : [];
                        clicked = clicked.filter(item => item.blog.slug !== post.slug && item.blog._id !== post._id);
                        clicked.push({ blog: post, index });
                        localStorage.setItem("clicked_blogs", JSON.stringify(clicked));
                      } catch (e) {
                        console.error("Failed to store clicked blog:", e);
                      }
                    }
                  }}
                >
                  <article className="relative h-full overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#262755]/25 group-hover:shadow-[0_28px_60px_rgba(38,39,85,0.16)]">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#262755] via-blue-500 to-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      {displayImage ? (
                        <img
                          src={displayImage}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-end bg-[linear-gradient(135deg,#262755_0%,#2563eb_52%,#14b8a6_100%)] p-6">
                          <span className="max-w-[12rem] text-xl font-black leading-tight text-white">
                            {post.categories || "Insights"}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111332]/65 via-[#111332]/5 to-transparent opacity-80" />

                      <span className="absolute left-5 top-5 max-w-[calc(100%-2.5rem)] rounded-full border border-white/35 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-[#262755] shadow-sm backdrop-blur">
                        {post.categories}
                      </span>

                      <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-white/90">
                        {post.date && (
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays size={14} />
                            {post.date}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="flex grow flex-col p-6">
                      <h3 className="line-clamp-2 text-xl font-black leading-snug text-slate-950 transition-colors group-hover:text-[#262755]">
                        {post.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                        <span className="text-sm font-bold text-[#262755]">
                          Read article
                        </span>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#262755] text-white transition-all duration-300 group-hover:rotate-12 group-hover:bg-blue-600">
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                    </div>
                  </article>
              </Link>
            );
          })}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPage;
