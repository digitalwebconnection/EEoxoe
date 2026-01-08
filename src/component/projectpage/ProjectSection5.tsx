import { useEffect, useRef, useState, memo } from "react";

/* ---------------- TYPES ---------------- */
interface NewsItemData {
  id: number;
  category: string;
  date: string;
  title: string;
  desc: string;
  image: string;
}

/* ---------------- DATA ---------------- */
const newsData: NewsItemData[] = [
  {
    id: 1,
    category: "TECHNOLOGY",
    date: "Dec 2024",
    title: "Agent Portal Access (B2B Expansion)",
    desc:
      "Agents can submit applications, track student progress, and monitor commissions in real time through a dedicated portal.",
    image:
      "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    category: "TECHNOLOGY",
    date: "Dec 2024",
    title: "Student Portal Access (B2C Experience)",
    desc:
      "Students will register, upload documents, track application status, and receive timely updates throughout their journey.",
    image:
      "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    category: "TECHNOLOGY",
    date: "Dec 2024",
    title: "Accounting & Tax Management",
    desc:
      "Integrated accounting, expense tracking, tax management, and financial reporting within the platform.",
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    category: "TECHNOLOGY",
    date: "Dec 2024",
    title: "Leads Management CRM",
    desc:
      "Capture, assign, and track leads from marketing campaigns with a unified CRM system.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const AUTO_DELAY = 2000;

/* ---------------- COMPONENT ---------------- */
const ProjectSection5: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Correct interval typing for TS
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoSlide = (): void => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startAutoSlide = (): void => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % newsData.length);
    }, AUTO_DELAY);
  };

  useEffect(() => {
    if (!isPaused) startAutoSlide();
    return stopAutoSlide;
  }, [isPaused]);

  const handleItemClick = (index: number): void => {
    setActiveIndex(index);
    startAutoSlide();
  };

  const activeNews: NewsItemData = newsData[activeIndex];

  return (
    <section
      className="bg-white py-20 px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl md:text-4xl font-extrabold text-gray-900">
          Coming Soon – Future Enhancements
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT FEATURE */}
          <div>
            <div className="relative overflow-hidden rounded-2xl shadow-md">
              <img
                key={activeNews.image}
                src={activeNews.image}
                alt={activeNews.title}
                loading="lazy"
                decoding="async"
                className="h-[320px] w-full object-cover transition-opacity duration-700"
              />
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-3 text-sm">
                <span className="rounded-full bg-indigo-100 px-3 py-1 font-semibold text-indigo-600">
                  {activeNews.category}
                </span>
                <span className="text-gray-500">{activeNews.date}</span>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                {activeNews.title}
              </h3>

              <p className="mt-3 text-gray-600 max-w-xl">
                {activeNews.desc}
              </p>
            </div>
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-4">
            {newsData.map((item, index) => (
              <NewsListItem
                key={item.id}
                item={item}
                isActive={index === activeIndex}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- MEMOIZED LIST ITEM ---------------- */
interface NewsListItemProps {
  item: NewsItemData;
  isActive: boolean;
  onClick: () => void;
}

const NewsListItem = memo(
  ({ item, isActive, onClick }: NewsListItemProps) => {
    return (
      <div
        onClick={onClick}
        className={`flex cursor-pointer gap-4 rounded-xl border p-4 transition-all duration-300
          ${
            isActive
              ? "border-indigo-500 bg-indigo-50 shadow-sm"
              : "border-gray-200 hover:bg-gray-50"
          }`}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="h-20 w-28 rounded-lg object-cover"
        />

        <div>
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-full bg-indigo-100 px-2 py-0.5 font-semibold text-indigo-600">
              {item.category}
            </span>
            <span className="text-gray-500">{item.date}</span>
          </div>

          <h4 className="mt-2 text-sm font-bold text-gray-900">
            {item.title}
          </h4>
        </div>
      </div>
    );
  }
);

export default ProjectSection5;
