import { useEffect, useRef, useState } from "react";
import {
    Briefcase,
    CheckCircle,
    Users,
    Award,
} from "lucide-react";
import CountUp from "react-countup";

const stats = [
    {
        icon: Briefcase,
        value: 4,
        suffix: "+",
        label: "Years of Experience",
    },
    {
        icon: CheckCircle,
        value: 200,
        suffix: "+",
        label: "Projects Completed",
    },
    {
        icon: Users,
        value: 68,
        suffix: "+",
        label: "Team Members",
    },
    {
        icon: Award,
        value: 99,
        suffix: "+",
        label: "Total Award Wins",
    },
];

const ProjectSection4 = () => {
    const sectionRef = useRef(null);
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect(); // 🔥 stop observing after first run
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
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
                                <div
                                    className="flex h-14 w-14 items-center justify-center rounded-full
                                    border border-white/30
                                    bg-white/10 backdrop-blur-sm
                                    transition-all duration-300
                                    group-hover:bg-indigo-600 group-hover:border-indigo-500"
                                >
                                    <Icon className="h-7 w-7 text-white" />
                                </div>

                                {/* Animated Number */}
                                <h3 className="text-3xl font-extrabold tracking-tight">
                                    {startCount && (
                                        <>
                                            <CountUp
                                                start={0}
                                                end={stat.value}
                                                duration={3}
                                            />
                                            {stat.suffix}
                                        </>
                                    )}
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
    );
};

export default ProjectSection4;
