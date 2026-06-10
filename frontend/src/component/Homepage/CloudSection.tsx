
import React from "react";
import {
  Settings,
  RefreshCcw,
  Lightbulb,
 LinkIcon, // ✅ FIXED
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Feature {
  icon: LucideIcon;
  title: string;
  points: string[];
}

const features: Feature[] = [
  {
    icon: Settings,
    title: "Odoo Implementation",
    points: [
      "Setting up Odoo ERP based on your business processes, configuring modules, and deploying the system.",
      "From planning to deployment, we ensure a smooth and optimized Odoo implementation process.",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Odoo Migration",
    points: [
      "Technical Odoo migration solutions covering database restructuring, code migration, and cloud deployment support.",
      "Advanced Odoo migration services ensuring schema validation, API compatibility, and system stability.",
    ],
  },
  {
    icon: Lightbulb,
    title: "Odoo Consultation",
    points: [
      "Data-driven Odoo consulting to align ERP solutions with your growth and performance goals.",
      "Professional Odoo ERP consultation for business process analysis, system planning, and automation strategy.",
    ],
  },
  {
    icon: LinkIcon,
    title: "Odoo Integration",
    points: [
      "Secure Odoo system integration with external software, marketplaces, and enterprise tools.",
      "Expert Odoo API integration to streamline data flow across business applications and platforms.",
    ],
  },
  {
    icon: Wrench,
    title: "Odoo Customizations",
    points: [
      "Scalable Odoo module customization for improved automation and performance.",
      "Personalized Odoo ERP customization solutions for seamless process optimization.",
    ],
  },
];

const CloudSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative overflow-hidden bg-linear-to-br from-[#262755]/10 to-[#ffd740]/10 px-4 py-10 sm:px-6 lg:px-8 md:py-12"
      style={{
        backgroundImage:
          'url("https://www.shutterstock.com/image-photo/asian-indian-developer-team-discussion-600nw-2470769711.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#000000c5] via-black/80 to-[#0a0904] opacity-80" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="mb-4 text-4xl mx-auto max-w-4xl font-bold text-[#ffd740] drop-shadow-lg md:text-[49px]">
            End-to-End Odoo ERP Services for Business Automation
          </h2>
          <p className="mx-auto max-w-6xl text-lg text-white animate-fade-in delay-200">
            Odoo services help businesses implement and manage Odoo ERP to
            streamline operations, automate processes, and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {features.map((feature, i) => {
            let spanClass = "lg:col-span-2";

            if (i === 3) spanClass = "lg:col-span-3 ";
            if (i === 4) spanClass = "lg:col-span-3";

            return (
              <div
                key={feature.title}
                className={`animate-fade-in ${spanClass} rounded-2xl border border-[#262755]/30 bg-linear-to-br from-[#262755]/90 to-[#ffd740]/30 p-8 transition-all duration-500 hover:scale-105 hover:border-[#ffd740] hover:shadow-2xl hover:shadow-[#ffd740]/50`}
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <feature.icon
                  size={32}
                  className="mb-4 text-[#ffd740] transition-transform duration-300 hover:rotate-12"
                />

                <h3 className="mb-4 text-xl font-bold text-[#ffd740]">
                  {feature.title}
                </h3>

                <ul className="space-y-3 text-white text-sm leading-relaxed">
                  {feature.points.map((point, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-[#ffd740] mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in delay-600">
        <button
  onClick={() => navigate("/services")}
  className="rounded-full bg-[#262755] px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-110 hover:bg-[#ffd740] hover:text-[#262755] hover:shadow-lg hover:shadow-[#ffd740]/50"
>
  Learn More
</button>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default CloudSection;

