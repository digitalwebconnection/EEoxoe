
import { useEffect, useState } from "react";



const newsData = [
    {
        id: 1,
        category: "TECHNOLOGY",
        date: "Dec 15, 2024",
        title: "Agent Portal Access (B2B Expansion)",
        desc: "Agents will be able to access the platform directly to submit applications, track student progress, and monitor commissions in real time. This enhancement will improve transparency, reduce manual coordination, and streamline collaboration across agent networks.",
        image:
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    },
    {
        id: 2,
        category: "TECHNOLOGY",
        date: "Dec 15, 2024",
        title: "Student Portal Access (B2C Experience)",
        desc: "Students will be able to register on the platform, upload documents, track their application status, and receive timely updates. This will create a more personalized, interactive, and transparent experience throughout their study-abroad journey.",
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
        id: 3,
        category: "TECHNOLOGY",
        date: "Dec 15, 2024",
        title: "Accounting & Tax Management Modules",
        desc: "Excelint will introduce integrated accounting capabilities, including expense tracking, taxation management, profit & loss statements, and financial reporting—helping businesses manage finances efficiently without relying on external systems.",
        image:
            "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
    },
    {
        id: 4,
        category: "TECHNOLOGY",
        date: "Dec 15, 2024",
        title: "Leads Management CRM",
        desc: "A dedicated leads management module will enable capturing and managing leads from digital marketing campaigns. With landing page integration, automated lead assignment, and conversion tracking, your entire lead pipeline will be managed within one unified system.",
        image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    },
];

const ProjectSection5 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % newsData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const activeNews = newsData[activeIndex];
    return (
        <>
            <section className="bg-white py-24 px-6">
                <div className="mx-auto max-w-7xl">

                    {/* Header */}
                    <h2 className="mb-14 text-center text-3xl md:text-4xl font-extrabold text-gray-900">
                        Coming Soon – Future Enhancements
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* ================= LEFT FEATURED ================= */}
                        <div className="group">
                            <div className="relative overflow-hidden rounded-2xl shadow-lg">

                                {/* Image */}
                                <img
                                    src={activeNews.image}
                                    alt={activeNews.title}
                                    className="h-[340px] w-full object-cover
            transition-all duration-700 ease-out
            group-hover:scale-110 group-hover:rotate-[0.5deg]"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 opacity-0
            bg-linear-to-t from-black/40 via-transparent to-transparent
            transition-opacity duration-500 group-hover:opacity-100" />
                            </div>

                            {/* Content */}
                            <div className="mt-6 transition-all duration-500 group-hover:-translate-y-1">
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="rounded-full bg-indigo-100 px-3 py-1 font-semibold text-indigo-600">
                                        {activeNews.category}
                                    </span>
                                    <span className="text-gray-500">{activeNews.date}</span>
                                </div>

                                <h3 className="mt-4 text-2xl font-bold text-gray-900">
                                    {activeNews.title}
                                </h3>

                                <p className="mt-3 text-gray-600">
                                    {activeNews.desc}
                                </p>

                                <button className="mt-6 inline-flex items-center gap-2
            text-indigo-600 font-semibold
            transition-all duration-300
            hover:gap-4">
                                    Read Details →
                                </button>
                            </div>
                        </div>

                        {/* ================= RIGHT LIST ================= */}
                        <div className="space-y-6">
                            {newsData.map((item, index) => (
                                <div
                                    key={item.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`group flex cursor-pointer gap-4 rounded-xl border p-4
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:shadow-lg
            ${index === activeIndex
                                            ? "border-indigo-500 bg-indigo-50 shadow-md"
                                            : "border-gray-200 hover:bg-gray-50"
                                        }`}
                                >
                                    {/* Image */}
                                    <div className="overflow-hidden rounded-lg">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-20 w-28 object-cover
                transition-transform duration-500
                group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <div className="flex items-center gap-2 text-xs">
                                            <span className="rounded-full bg-indigo-100 px-2 py-0.5 font-semibold text-indigo-600">
                                                {item.category}
                                            </span>
                                            <span className="text-gray-500">{item.date}</span>
                                        </div>

                                        <h4 className="mt-2 text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                            {item.title}
                                        </h4>

                                        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-all duration-300 group-hover:gap-2">
                                            Read Details →
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectSection5
