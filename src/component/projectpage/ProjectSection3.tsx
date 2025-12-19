
import React, { useEffect, useState } from "react";

import {
    Briefcase,
    CheckCircle,
    Users,
    Award,
} from "lucide-react";

/* ================= FEATURES DATA ================= */

const featuresAvailable = [
    {
        step: "01",
        title: "Student Data Management",
        desc: "Centralized management of student profiles, academic records, application documents, and complete communication history in one secure system.",
    },
    {
        step: "02",
        title: "Application Status Tracker",
        desc: "Real-time tracking of student applications across universities with full visibility for consultants, agents, and teams.",
    },
    {
        step: "03",
        title: "Notes & Conversation Logs",
        desc: "Log and review every interaction with students, agents, and universities to maintain context and improve service quality.",
    },
    {
        step: "04",
        title: "Follow-Up & Activity Scheduler",
        desc: "Automated reminders and task scheduling ensure no lead, follow-up, or application stage is ever missed.",
    },
    {
        step: "05",
        title: "Agent Management",
        desc: "Onboard agents, assign students, track performance, and manage agent relationships efficiently.",
    },
    {
        step: "06",
        title: "Commission Management",
        desc: "Automated commission calculations based on predefined structures with accurate, transparent financial records.",
    },
    {
        step: "07",
        title: "Invoicing & Payments",
        desc: "Generate invoices, track payments, and monitor outstanding balances directly from the platform.",
    },
    {
        step: "08",
        title: "Reports & Analytics",
        desc: "One-click downloadable reports covering applications, agent performance, commissions, and financial insights.",
    },
    {
        step: "09",
        title: "Interactive Dashboard",
        desc: "A dynamic dashboard offering visual insights into KPIs, leads, applications, commissions, and overall business performance.",
    },
    {
        step: "10",
        title: "Employee Management",
        desc: "Assign roles, manage tasks, and monitor team productivity to streamline internal workflows.",
    },
    {
        step: "11",
        title: "User Access Management",
        desc: "Define user roles and permissions to ensure data security and controlled platform access.",
    },
    {
        step: "12",
        title: "Internal Chat System",
        desc: "Built-in internal chat enables seamless collaboration between teams and agents without third-party tools.",
    },
    {
        step: "13",
        title: "Company Management",
        desc: "Manage multiple companies or branches under one system with separate profiles, contacts, and data control.",
    },
    {
        step: "14",
        title: "University Management",
        desc: "Maintain a structured database of partnered universities, programs, commission structures, and requirements.",
    },
    {
        step: "15",
        title: "Security & Compliance",
        desc: "Advanced security controls including strong password policies, two-factor authentication, audit trails, and role-based access to protect sensitive data.",
    },
    {
        step: "16",
        title: "Automated Backup & Data Protection",
        desc: "Scheduled automated backups with secure storage, one-click restore options, and minimal downtime to ensure business continuity.",
    },
];


const stats = [
    {
        icon: Briefcase,
        value: "4+",
        label: "Years of Experience",
    },
    {
        icon: CheckCircle,
        value: "200+",
        label: "Projects Completed",
    },
    {
        icon: Users,
        value: "68+",
        label: "Team Members",
    },
    {
        icon: Award,
        value: "99+",
        label: "Total Award Wins",
    },
];
// 
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

//     step: "01",
//     title: "Agent Portal Access (B2B Expansion)",
//     desc: "Agents will gain direct platform access to submit applications, track student progress, and manage commissions — improving transparency and operational efficiency.",
//   },
//   {
//     step: "02",
//     title: "Student Portal Access (B2C Experience)",
//     desc: "Students will be able to register, upload documents, track application status, and receive real-time updates for a more personalized journey.",
//   },
//   {
//     step: "03",
//     title: "Accounting & Tax Management",
//     desc: "Built-in accounting capabilities including expense tracking, taxation, profit & loss statements, and comprehensive financial reporting.",
//   },
//   {
//     step: "04",
//     title: "Leads Management CRM",
//     desc: "Capture and manage leads from digital campaigns, integrate landing pages, automate lead assignment, and track conversions — unifying the entire lead pipeline.",
//   },
// ];
/* ================= PAGE ================= */

const ExcelintFeaturesPage: React.FC = () => {

    const [showAll, setShowAll] = useState(false);

    const visibleFeatures = showAll
        ? featuresAvailable
        : featuresAvailable.slice(0, 4);
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto switch every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % newsData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const activeNews = newsData[activeIndex];

    return (
        <>
            <main className="bg-white overflow-hidden">
                {/* ================= HEADER ================= */}
                <section className="py-14 text-center px-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-6 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600">
                        Features Available
                    </div>

                    <h1 className=" text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Smart Features <span className="text-[#262755] "> <br /> That  Power Faster Decisions</span>
                    </h1>

                    <p className="mt-6 max-w-6xl mx-auto text-lg text-gray-600">
                        Excelint is built to manage students, agents, commissions, teams,
                        universities, security, and data protection — all from one powerful,
                        enterprise-grade platform.
                    </p>
                </section>

                {/* ================= FEATURES GRID ================= */}
                <section className="pb-28 px-6">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                            {visibleFeatures.map((item) => (
                                <div
                                    key={item.step}
                                    className="group relative overflow-hidden rounded-3xl
                bg-linear-to-br from-indigo-50 via-white to-purple-50
                p-8 transition-all duration-500 ease-out
                hover:-translate-y-3 hover:scale-[1.03]
                hover:shadow-[0_30px_80px_-20px_rgba(99,102,241,0.55)]"
                                >
                                    {/* Animated Gradient Border */}
                                    <div className="pointer-events-none absolute inset-0 rounded-3xl
                  border border-transparent
                  bg-[linear-gradient(120deg,transparent,rgba(99,102,241,0.45),transparent)]
                  bg-size-[200%_200%]
                  opacity-0 group-hover:opacity-100
                  animate-none group-hover:animate-[shimmer_1.6s_linear]" />

                                    {/* Glow Ring */}
                                    <div className="pointer-events-none absolute inset-0 rounded-3xl
                  ring-1 ring-gray-800
                  group-hover:ring-2 group-hover:ring-indigo-400/50
                  transition-all duration-500" />

                                    {/* Light Sweep */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute -left-1/2 top-0 h-full w-1/2
                    bg-linear-to-r from-transparent via-white/40 to-transparent
                    skew-x-[-20deg] animate-[sweep_1.2s_ease-out]" />
                                    </div>

                                    {/* Floating Step Number */}
                                    <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full
                  bg-linear-to-br from-indigo-500 to-purple-500
                  flex items-center justify-center
                  transition-all duration-500
                  group-hover:scale-125 group-hover:rotate-12
                  group-hover:shadow-[0_0_45px_rgba(99,102,241,0.6)]">
                                        <span className="text-3xl font-black text-white drop-shadow-lg">
                                            {item.step}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="mt-12 text-xl font-bold text-gray-900
                    transition-all duration-500
                    group-hover:-translate-y-1 group-hover:text-indigo-600">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed
                    transition-all duration-500 delay-75
                    group-hover:-translate-y-1 group-hover:text-gray-700">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Bottom Gradient Progress */}
                                    <div className="absolute bottom-0 left-0 h-1 w-0
                  bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
                  transition-all duration-700 group-hover:w-full" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-16 text-center">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="inline-flex items-center justify-center rounded-full
              bg-indigo-600 px-8 py-4 text-sm font-semibold text-white
              transition-all duration-300
              hover:bg-indigo-700 hover:scale-105"
                            >
                                {showAll ? "Show Less Features" : "View More Features"}
                            </button>
                        </div>

                    </div>
                </section>
            </main>
            <section
                className="relative w-full bg-fixed bg-center bg-cover py-12"
                style={{
                    backgroundImage:
                        "url('https://bairesdev.mo.cloudinary.net/blog/2023/08/Software-Development-Models.jpg')",
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/85" />

                <div className="relative z-10 mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-white text-center">

                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center gap-3
                transition-all duration-300 hover:-translate-y-1"
                                >
                                    {/* Icon */}
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full
                  border border-white/30
                  bg-white/10 backdrop-blur-sm
                  transition-all duration-300
                  group-hover:bg-indigo-600 group-hover:border-indigo-500"
                                    >
                                        <Icon className="h-7 w-7 text-white" />
                                    </div>

                                    {/* Value */}
                                    <h3 className="text-3xl font-extrabold tracking-tight">
                                        {stat.value}
                                    </h3>

                                    {/* Label */}
                                    <p className="text-sm text-white/80">
                                        {stat.label}
                                    </p>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>
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
            bg-gradient-to-t from-black/40 via-transparent to-transparent
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
    );
};

export default ExcelintFeaturesPage;
