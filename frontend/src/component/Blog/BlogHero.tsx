import {
    BookOpen,
    TrendingUp,
    Laptop,
    Users,
    ShieldCheck
} from "lucide-react";
import BlogPage from "./BlogPage";

const heroImg = "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop";

export default function SolarBlogPage() {
    return (
        <div className="bg-[#FAF9F6] min-h-screen font-sans antialiased text-slate-800">
            {/* HERO SECTION - mt-16 offsets the fixed navbar, py-8/py-16 keeps it compact */}
            <section className="relative mt-16 pt-8 pb-8 md:pt-16 md:pb-16 overflow-hidden border-b border-slate-100">
                {/* Soft Abstract Background Elements using Website Color (#262755) */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute -top-[10%] right-[10%] w-[35%] h-[50%] rounded-full bg-[#262755]/5 blur-[80px]" />
                    <div className="absolute top-[30%] -left-[10%] w-[30%] h-[40%] rounded-full bg-blue-100/20 blur-[80px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Column - Main Copy & Compact Badge */}
                    <div className="lg:col-span-7 flex flex-col gap-5">
                        {/* Mini Badge using Website Color #262755 */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#262755]/20 bg-[#262755]/5 px-3.5 py-1 text-xs font-bold text-[#262755] w-fit">
                            <Laptop className="h-4 w-4 text-[#262755]" />
                            <span className="tracking-wider uppercase text-[10px]">Exochos Knowledge Hub</span>
                        </div>

                        {/* Heading & Desc */}
                        <div className="space-y-3">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#262755] leading-[1.15] tracking-tight">
                                Demystifying Tech. <br className="hidden md:block" />
                                <span className="text-blue-600 relative inline-block">
                                    Simple & Practical
                                    <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-blue-600/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                                    </svg>
                                </span>{" "}
                                Solutions.
                            </h1>
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light max-w-xl">
                                Insights, guides, and explainers to help you make confident decisions about Education CRMs, HRMS, and enterprise software systems.
                            </p>
                        </div>

                        {/* Interactive Features / Smaller Cards */}
                        <div className="grid sm:grid-cols-3 gap-3 pt-1">
                            {[
                                { 
                                    icon: Laptop, 
                                    title: "Education CRM", 
                                    desc: "Student & Agent portals", 
                                    color: "border-[#262755]/10 hover:border-[#262755]/30 text-[#262755] bg-[#262755]/5" 
                                },
                                { 
                                    icon: Users, 
                                    title: "HRMS & Payroll", 
                                    desc: "Geo-fenced attendance", 
                                    color: "border-blue-100 hover:border-blue-300 text-blue-600 bg-blue-50/25" 
                                },
                                { 
                                    icon: ShieldCheck, 
                                    title: "Enterprise Solutions", 
                                    desc: "Scaling digital systems", 
                                    color: "border-[#262755]/10 hover:border-[#262755]/30 text-[#262755] bg-[#262755]/5" 
                                },
                            ].map((card, idx) => (
                                <div 
                                    key={idx}
                                    className={`p-3.5 rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow cursor-pointer ${card.color}`}
                                >
                                    <card.icon className="h-4.5 w-4.5 mb-2" />
                                    <h3 className="text-xs font-bold text-slate-900 mb-0.5">{card.title}</h3>
                                    <p className="text-[10px] text-slate-500 leading-normal">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Compact Layered Collage Design */}
                    <div className="lg:col-span-5 relative w-full mt-4 lg:mt-0">
                        {/* Background Grid Accent */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 opacity-10 bg-[radial-gradient(#262755_1.5px,transparent_1.5px)] [background-size:10px_10px] hidden sm:block" />

                        {/* Main Image Card (with unique organic oval/pebble shape) */}
                        <div className="relative rounded-[30%_70%_70%_30%_/_50%_30%_70%_50%] overflow-hidden border-4 border-white shadow-xl h-[200px] sm:h-[260px] lg:h-[300px] bg-slate-100 transition-all duration-500 hover:rotate-1">
                            <img 
                                src={heroImg} 
                                alt="Modern tech workspace" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#262755]/50 via-transparent to-transparent" />
                        </div>

                        {/* Outer Ring Accent to mimic other page images */}
                        <div className="absolute -inset-2 rounded-[30%_70%_70%_30%_/_50%_30%_70%_50%] border-[6px] border-slate-200/60 pointer-events-none -z-10" />

                        {/* Overlay Stat Card (Website Color themed) */}
                        <div className="absolute -top-3 -right-3 bg-white rounded-2xl p-2.5 sm:p-3 shadow-md border border-slate-50 flex items-center gap-2 sm:gap-2.5 hidden sm:flex">
                            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-[#262755]/10 flex items-center justify-center text-[#262755]">
                                <TrendingUp className="h-4.5 w-4.5" />
                            </div>
                            <div>
                                <p className="text-[8px] sm:text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Average ROI</p>
                                <p className="text-xs sm:text-sm font-black text-[#262755]">3x Growth</p>
                            </div>
                        </div>

                        {/* Floating Highlight Card (Compacted and Styled in Website Color) */}
                        <div className="absolute -bottom-3 -left-4 z-20 rounded-2xl border border-white/60 bg-white/90 p-3 sm:p-3.5 backdrop-blur-md shadow-md max-w-[200px] sm:max-w-[220px] hidden sm:flex">
                            <div className="flex items-center gap-2 sm:gap-2.5">
                                <div className="flex h-7.5 w-7.5 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#262755]/10 text-[#262755]">
                                    <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                </div>
                                <div>
                                    <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">
                                        Featured
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] font-semibold text-[#262755] leading-snug">
                                        &ldquo;Choosing the Right Consultancy CRM&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT BLOCK */}
            <main className="max-w-7xl mx-auto px-6 pb-16">
                <BlogPage />
            </main>
        </div>
    );
}
