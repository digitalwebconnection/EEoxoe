// ExcelintFeaturesPage.tsx
import React from "react";

type Feature = {
  id: number;
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  badge?: "Available" | "Coming Soon";
  eta?: string; // for roadmap transparency
};

const coreFeatures: Feature[] = [
  {
    id: 1,
    title: "Student Data Management",
    description:
      "Manage student profiles, academic records, documents, and communication history in one centralized, organized system.",
    imageAlt: "Illustration of student profile management",
    imageSrc:
      "https://schoolmanagement.school.blog/wp-content/uploads/2019/12/student-management.png?w=1412",
    badge: "Available",
  },
  {
    id: 2,
    title: "Application Status Tracker",
    description:
      "Track real-time application status across universities for full transparency and timely updates.",
    imageAlt: "Application status timeline illustration",
    imageSrc:
      "https://recruithire.com/images/blog/ats-tracker-advantages.png?v=1665658342102722543",
    badge: "Available",
  },
  {
    id: 3,
    title: "Log Notes for Conversations",
    description:
      "Record every conversation with students, universities, and agents to keep full context and improve service quality.",
    imageAlt: "Chat notes or discussion log illustration",
    imageSrc:
      "https://www.shutterstock.com/image-vector/interviewer-asks-questions-couple-park-260nw-2661428927.jpg",
    badge: "Available",
  },
  {
    id: 4,
    title: "Follow-Up Reminders & Activities",
    description:
      "Schedule follow-ups, tasks, and activities so no lead, application stage, or commitment is ever missed.",
    imageAlt: "Calendar and reminder illustration",
    imageSrc:
      "https://cdn.prod.website-files.com/63f5de8e8260819e3bbf4432/66f56b6a446d8534968285a9_10%20Reminder%20Email%20Templates%20to%20Boost%20Your%20Follow-up%20Success.png",
    badge: "Available",
  },
  {
    id: 5,
    title: "Agent Management",
    description:
      "Onboard agents, assign students, track performance, and maintain a clear record of every agent’s contribution.",
    imageAlt: "Team of agents illustration",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvqdkG9r-fCoYfWDxaqIA3AhtGrjoQ7qxGw&s",
    badge: "Available",
  },
  {
    id: 6,
    title: "Commission Management",
    description:
      "Automate commission tracking based on predefined structures and keep accurate financial records with less manual work.",
    imageAlt: "Commission payout and finance illustration",
    imageSrc:
      "https://media.gettyimages.com/id/1384187707/video/customer-make-bank-payment-by-phone-in-coffee-shop.jpg?s=640x640&k=20&c=KgPf8zgdveaDO6PL6ohuzSuQhNW-PCgRA_R_CAaCwmc=",
    badge: "Available",
  },
  {
    id: 7,
    title: "Invoicing",
    description:
      "Generate and send invoices directly from the portal, track payment status, and keep an eye on outstanding balances.",
    imageAlt: "Invoice document illustration",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJ-jpyy5sOswjzFE-cv1snI98NEyyYFsbiQ&s",
    badge: "Available",
  },
  {
    id: 8,
    title: "One-Click Reports & Analytics",
    description:
      "Download detailed reports on applications, agents, and finances in a single click for quick sharing and analysis.",
    imageAlt: "Analytics and report dashboard illustration",
    imageSrc:
      "https://cdn.prod.website-files.com/633c0368f5d54bf96327848d/654b879f7dc711231c92f9db_Marketing%20Analytics%20thumbnail.webp",
    badge: "Available",
  },
  {
    id: 9,
    title: "Interactive Dashboard",
    description:
      "Get a visual snapshot of KPIs, leads, applications, commissions, and overall performance on a clean dashboard.",
    imageAlt: "Interactive dashboard illustration",
    imageSrc:
      "https://media.gettyimages.com/id/1556253588/video/business-data-analytics-dashboard-animated-overlays.jpg?s=640x640&k=20&c=Kcv_preiLiysrx8CmlbRSFLl52BU3en-2HNwsR2yFDw=",
    badge: "Available",
  },
  {
    id: 10,
    title: "Employee Management",
    description:
      "Assign roles, manage tasks, and monitor team productivity to streamline internal workflows.",
    imageAlt: "Team and task management illustration",
    imageSrc:
      "https://img.freepik.com/free-photo/management-coaching-business-dealing-mentor-concept_53876-133858.jpg?semt=ais_hybrid&w=740&q=80",
    badge: "Available",
  },
  {
    id: 11,
    title: "User Management",
    description:
      "Define user roles, permissions, and access levels to protect sensitive data and maintain operational control.",
    imageAlt: "User access control illustration",
    imageSrc:
      "https://img.freepik.com/free-vector/connecting-teams-concept-landing-page_52683-28274.jpg?semt=ais_hybrid&w=740&q=80",
    badge: "Available",
  },
  {
    id: 12,
    title: "Internal Chat",
    description:
      "Collaborate through integrated internal chat to keep communication inside the CRM and reduce reliance on external tools.",
    imageAlt: "Internal chat bubbles illustration",
    imageSrc:
      "https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_52683-76159.jpg?semt=ais_hybrid&w=740&q=80",
    badge: "Available",
  },
  {
    id: 13,
    title: "Company Management",
    description:
      "Manage multiple companies or branches under one system, maintaining separate profiles and data for each.",
    imageAlt: "Multiple companies or buildings illustration",
    imageSrc:
      "https://www.shutterstock.com/shutterstock/videos/3653370435/thumb/1.jpg?ip=x480",
    badge: "Available",
  },
  {
    id: 14,
    title: "University Management",
    description:
      "Maintain a complete database of partnered universities, including programs, contracts, commissions, and requirements.",
    imageAlt: "University building illustration",
    imageSrc:
      "https://media.istockphoto.com/id/1094465614/photo/speaker-addressing-group-of-females.jpg?s=612x612&w=0&k=20&c=FaITb4X3lC2dMfY10htrG9YMeoqkN0riFuP-USjvfq8=",
    badge: "Available",
  },
];

const securityFeatures: Feature[] = [
  {
    id: 15,
    title: "Security & Compliance",
    description:
      "Password strength policies, two-factor authentication, audit trails, and role-based access ensure your data is protected and compliant.",
    imageAlt: "Shield and lock security illustration",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjM71VYeNxHSTCE-i0FxAiPm0dWnlgN0r5w&s",
    badge: "Available",
  },
  {
    id: 16,
    title: "Automated Backup & Data Protection",
    description:
      "Automated scheduled backups, secure storage, one-click restore, and minimal downtime to keep your business running smoothly.",
    imageAlt: "Cloud backup and restore illustration",
    imageSrc:
      "https://technoadvantage.com/wp-content/uploads/2024/08/what-is-data-backup-and-recovery-4-1-1024x576.webp",
    badge: "Available",
  },
];

const upcomingFeatures: Feature[] = [
  {
    id: 17,
    title: "Agent Portal Access (B2B)",
    description:
      "Give agents their own login to submit applications, track student progress, and view commissions in real time.",
    imageAlt: "Agent using portal on laptop illustration",
    imageSrc:
      "https://backend.traviyo.com/Images/Blogss/Amar_10431/638744390051478358_temp.jpg",
    badge: "Coming Soon",
    eta: "Beta access: Q1 2026",
  },
  {
    id: 18,
    title: "Student Portal Access (B2C)",
    description:
      "Allow students to register, upload documents, track their application status, and receive updates directly.",
    imageAlt: "Student portal on mobile illustration",
    imageSrc:
      "https://www.coherentlab.com/BlogPost/FeaturedGallery/a4a522ca-8d9b-4ef0-88d1-b5a77a5f050a.jpg",
    badge: "Coming Soon",
    eta: "Planned: 2026 intake season",
  },
  {
    id: 19,
    title: "Accounting & Tax Modules",
    description:
      "Integrate advanced accounting features like expense tracking, tax calculation, P&L, and financial reporting.",
    imageAlt: "Accounting and tax calculator illustration",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefNU_VlK3nLCQKCDuNiq19qvEY8nf8psA4g&s",
    badge: "Coming Soon",
    eta: "Roadmap: 2026",
  },
  {
    id: 20,
    title: "Leads Management CRM",
    description:
      "Capture leads from campaigns, assign them automatically, and track conversions across your entire pipeline.",
    imageAlt: "Lead funnel and CRM illustration",
    imageSrc:
      "https://bigestate-network-upload.s3.ap-south-1.amazonaws.com/f1037ab5-5f23-4285-a50a-86e0e7deb029.png",
    badge: "Coming Soon",
    eta: "Private beta: 2025–26",
  },
];

// ===== Small helpers =====
const entranceClasses = (pageLoaded: boolean, delayClass: string) =>
  `transition-opacity duration-700 ease-out transform ${delayClass} ${
    pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

// ===== Main Page =====
const ExcelintFeaturesPage: React.FC = () => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  const [selectedFeature, setSelectedFeature] = React.useState<Feature | null>(
    null
  );

  React.useEffect(() => {
    setPageLoaded(true);
  }, []);

  const handleCloseModal = () => setSelectedFeature(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-12">
        {/* PAGE TITLE + INTRO – SEO + value prop */}
        <header
          className={`mb-8 space-y-2 ${entranceClasses(
            pageLoaded,
            "delay-100"
          )}`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-600">
            Excelint – CRM Portal for Agents
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Excelint CRM Features – Student Application Management Software
          </h1>
          <p className="max-w-3xl text-sm text-slate-600 md:text-base">
            Excelint is a CRM built specifically for{" "}
            <strong className="font-semibold">
              education consultants, study-abroad agents, and recruitment
              partners
            </strong>
            — not a generic sales tool. Replace scattered Excel sheets, emails
            and WhatsApp chats with one connected portal for students,
            universities, and commissions.
          </p>
        </header>

        {/* VALUE PROP STRIP – how Excelint is different */}
        <section
          className={`mb-10 rounded-2xl bg-blue-900 px-5 py-6 text-emerald-50 shadow-md md:px-7 md:py-7 ${entranceClasses(
            pageLoaded,
            "delay-150"
          )}`}
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold md:text-lg">
                CRM for Education & Study Abroad Agents – built for your
                workflows
              </h2>
              <p className="mt-1 max-w-3xl text-xs text-emerald-100 md:text-sm">
                Unlike generic CRMs, Excelint ships with student lifecycle,
                agent commission, and university management flows out of the
                box, so your team can go live in days, not months.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium uppercase tracking-wide text-black">
              Faster onboarding · Education-first UX
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-yellow-400 p-4 text-black">
              <p className="text-xs font-semibold uppercase tracking-wide ">
                01 · Faster deployment
              </p>
              <p className="mt-2 text-sm font-semibold">
                Ready-made education workflows
              </p>
              <p className="mt-1 text-xs ">
                Student, agent, and commission modules are pre-built — no
                complex configuration needed.
              </p>
            </div>
            <div className="rounded-xl bg-yellow-400 p-4 text-black ">
              <p className="text-xs font-semibold uppercase tracking-wide ">
                02 · Better user experience
              </p>
              <p className="mt-2 text-sm font-semibold">
                Designed for counsellors, not coders
              </p>
              <p className="mt-1 text-xs ">
                Clean screens, simple filters, and clear timelines so counsellors
                know exactly what to do next.
              </p>
            </div>
            <div className="rounded-xl bg-yellow-400 p-4 text-black ">
              <p className="text-xs font-semibold uppercase tracking-wide ">
                03 · Industry-specific insights
              </p>
              <p className="mt-2 text-sm font-semibold">
                Education-focused reporting
              </p>
              <p className="mt-1 text-xs ">
                Track intakes, offers, visa outcomes, and agent-wise revenue —
                not just generic “deals won”.
              </p>
            </div>
          </div>
        </section>

        {/* VISUAL / DEMO SECTION */}
        <section
          className={`mb-10 grid gap-6 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2 md:p-7 ${entranceClasses(
            pageLoaded,
            "delay-180"
          )}`}
        >
          <div className="relative overflow-hidden rounded-xl bg-slate-900/90">
            {/* big screenshot placeholder */}
            <img
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Excelint CRM dashboard preview"
              className="h-full w-full object-cover opacity-90"
            />
            {/* play overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
                <span className="ml-0.5 translate-x-px text-2xl text-yellow-500">
                  ►
                </span>
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-100">
                Watch product walkthrough (2 min)
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
              See how Excelint connects students, agents & universities in one
              view
            </h2>
            <p className="text-sm text-slate-600">
              Walk through the live dashboard, student profiles, commission
              reports and upcoming portals in a guided demo. Understand how your
              current Excel + email + WhatsApp workflow maps into Excelint.
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-slate-600 md:text-sm">
              <li>Track complete student journey from enquiry to visa.</li>
              <li>View agent performance and payouts in real time.</li>
              <li>See how follow-ups and reminders keep your team on track.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition">
                Book a live demo
              </button>
              <button className="rounded-full border border-blue-500 bg-white px-5 py-2.5 text-xs font-semibold  transition hover:bg-yellow-500 hover:text-white">
                Download product brochure (PDF)
              </button>
            </div>
          </div>
        </section>

        {/* CORE FEATURES (only 3 visible, then View all) */}
        <FeatureSection
          title="Core CRM Features"
          subtitle="Built to simplify your daily operations and give you full visibility across students, agents, and applications."
          features={coreFeatures}
          maxVisible={3}
          wrapperClassName={entranceClasses(pageLoaded, "delay-200")}
          onFeatureClick={setSelectedFeature}
        />

        {/* SECURITY FEATURES (only 2 – no need for View all) */}
        <FeatureSection
          title="Security, Compliance & Reliability"
          subtitle="Your data is protected with modern security standards, detailed activity tracking, and reliable backup systems."
          features={securityFeatures}
          maxVisible={3}
          wrapperClassName={entranceClasses(pageLoaded, "delay-300")}
          onFeatureClick={setSelectedFeature}
        />

        {/* UPCOMING FEATURES (3 visible then View all) */}
        <FeatureSection
          title="Coming Soon – Future Enhancements"
          subtitle="Future modules that extend Excelint from a back-office engine into a full self-service ecosystem for agents and students."
          features={upcomingFeatures}
          maxVisible={3}
          wrapperClassName={`mb-4 border-t border-slate-200 pt-8 ${entranceClasses(
            pageLoaded,
            "delay-350"
          )}`}
          badgeLabel="Roadmap"
          onFeatureClick={setSelectedFeature}
        />

        {/* ROADMAP BETA CTA */}
        <section
          className={`mb-10 rounded-2xl bg-blue-50 px-5 py-6 text-slate-900 md:px-0 md:py-7 ${entranceClasses(
            pageLoaded,
            "delay-400"
          )}`}
        >
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center p-5">
            <div>
              <h2 className="text-base font-semibold md:text-lg">
                Join the Excelint roadmap beta
              </h2>
              <p className="mt-1 max-w-xl text-xs text-slate-700 md:text-sm">
                Get early access to upcoming features like agent / student
                portals and leads CRM. Share your workflows and help us shape
                what ships next.
              </p>
            </div>
            <button className="rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition ">
              Apply for beta access
            </button>
          </div>
        </section>

        {/* CLIENT SUCCESS STORIES */}
        <section
          className={`mb-10 rounded-2xl bg-white px-5 py-7 shadow-sm md:px-0 md:py-9 ${entranceClasses(
            pageLoaded,
            "delay-450"
          )}`}
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
                Client success stories
              </h2>
              <p className="mt-1 max-w-2xl text-xs text-slate-600 md:text-sm">
                Overseas education firms use Excelint to standardise operations,
                reduce manual work, and give students a more professional
                experience.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="flex flex-col rounded-xl border border-slate-600/50 bg-slate-50 p-4">
              <p className="text-xs text-slate-700 md:text-sm">
                “We moved from four Excel files and two WhatsApp groups to one
                Excelint dashboard. The team finally sees the same numbers.”
              </p>
              <div className="mt-3 text-xs text-slate-500">
                <p className="font-semibold text-slate-800">
                  Mumbai-based education consultant
                </p>
                <p>25+ counsellors · 3 branches</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl border border-slate-600/50 bg-slate-50 p-4">
              <p className="text-xs text-slate-700 md:text-sm">
                “Commission tracking for agents used to take us 3–4 days every
                month. With Excelint reports, it’s a 30-minute task.”
              </p>
              <div className="mt-3 text-xs text-slate-500">
                <p className="font-semibold text-slate-800">
                  Regional master franchise partner
                </p>
                <p>40+ active agent relationships</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl border border-slate-600/50 bg-slate-50 p-4">
              <p className="text-xs text-slate-700 md:text-sm">
                “The team finally has proper follow-ups. Students feel the whole
                journey is organised and transparent.”
              </p>
              <div className="mt-3 text-xs text-slate-500">
                <p className="font-semibold text-slate-800">
                  Study abroad brand (India–UAE)
                </p>
                <p>3x increase in active pipeline visibility</p>
              </div>
            </div>
          </div>
        </section>

      
      </main>

      {/* POPUP MODAL */}
      {selectedFeature && (
        <FeatureModal feature={selectedFeature} onClose={handleCloseModal} />
      )}
    </div>
  );
};

// ===== Feature Section with "View all" =====
type FeatureSectionProps = {
  title: string;
  subtitle: string;
  features: Feature[];
  maxVisible?: number;
  wrapperClassName?: string;
  badgeLabel?: string;
  onFeatureClick: (feature: Feature) => void;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  features,
  maxVisible = 3,
  wrapperClassName,
  badgeLabel,
  onFeatureClick,
}) => {
  const [showAll, setShowAll] = React.useState(false);

  const visibleFeatures = showAll ? features : features.slice(0, maxVisible);
  const hasMore = features.length > maxVisible;

  return (
    <section className={`mb-10 ${wrapperClassName ?? ""}`}>
      <div className="mb-2 flex items-center gap-2">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
          {title}
        </h2>
        {badgeLabel && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700 animate-pulse">
            {badgeLabel}
          </span>
        )}
      </div>
      <p className="mb-6 max-w-2xl text-sm text-slate-600">{subtitle}</p>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleFeatures.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            onClick={() => onFeatureClick(feature)}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-5 flex">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center rounded-full border border-emerald-500 px-4 py-1.5 text-xs font-medium text-emerald-700 transition-colors hover:bg-emerald-500 hover:text-white"
          >
            {showAll ? "View less" : "View all"}
          </button>
        </div>
      )}
    </section>
  );
};

// ===== Feature Card (clickable) =====
const FeatureCard: React.FC<{ feature: Feature; onClick?: () => void }> = ({
  feature,
  onClick,
}) => {
  return (
    <article
      onClick={onClick}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-black/40 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-emerald-200/50"
    >
      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden bg-linear-to-br from-emerald-50 via-slate-50 to-sky-50">
        <div className="absolute inset-0 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -left-10 top-6 h-24 w-24 rounded-full bg-emerald-300/60 blur-2xl transition-all duration-300 group-hover:-left-5" />
          <div className="absolute right-0 bottom-0 h-28 w-28 rounded-full bg-sky-300/70 blur-2xl transition-all duration-300 group-hover:right-5" />
        </div>
        <img
          src={feature.imageSrc}
          alt={feature.imageAlt}
          className="relative h-full w-full object-cover transition-all duration-300 group-hover:brightness-105 group-hover:scale-105"
        />
        {feature.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium shadow-md ${
              feature.badge === "Available"
                ? "bg-emerald-500 text-white"
                : "bg-amber-400 text-amber-900"
            } transition-transform duration-300 group-hover:scale-105`}
          >
            {feature.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 border-t-2 border-black/40 p-4 sm:p-5">
        <h3 className="text-sm font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 md:text-base">
          {feature.title}
        </h3>
        <p className="flex-1 text-xs text-slate-600 md:text-sm">
          {feature.description}
        </p>
        {feature.badge === "Coming Soon" && feature.eta && (
          <p className="text-[11px] font-medium text-amber-700">
            {feature.eta}
          </p>
        )}
      </div>
      <div className="h-1 w-full origin-left scale-x-0 bg-emerald-500 transition-all duration-300 group-hover:scale-x-100" />
    </article>
  );
};

// ===== Popup Modal =====
const FeatureModal: React.FC<{ feature: Feature; onClose: () => void }> = ({
  feature,
  onClose,
}) => {
  // Close on ESC
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white hover:bg-black"
        >
          ✕
        </button>

        <div className="grid gap-0 md:grid-cols-2">
          <div className="relative h-52 w-full md:h-full">
            <img
              src={feature.imageSrc}
              alt={feature.imageAlt}
              className="h-full w-full object-cover"
            />
            {feature.badge && (
              <span
                className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium ${
                  feature.badge === "Available"
                    ? "bg-emerald-500 text-white"
                    : "bg-amber-400 text-amber-900"
                }`}
              >
                {feature.badge}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-700">{feature.description}</p>
            {feature.badge === "Coming Soon" && feature.eta && (
              <p className="text-xs font-medium text-amber-700">
                Roadmap update: {feature.eta}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelintFeaturesPage;
