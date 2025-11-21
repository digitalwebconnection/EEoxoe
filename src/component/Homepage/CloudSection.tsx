import React from "react";
import { Zap, Shield, TrendingUp, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Deploy applications in minutes with our optimized infrastructure",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "99.99% uptime guarantee with enterprise-grade security",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Scale effortlessly from startup to enterprise level",
  },
];

const CloudSection: React.FC = () => {
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
      {/* Background dark overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#000000c5] via-black/80 to-[#0a0904] opacity-80" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="mb-4 text-4xl font-bold text-[#ffd740] drop-shadow-lg md:text-5xl">
            Experience Our Best Cloud Management Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white animate-fade-in delay-200">
            Enterprise-grade cloud solutions tailored for your business, with
            cutting-edge performance and security.
          </p>
        </div>

        {/* Features */}
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="animate-fade-in rounded-2xl border border-[#262755]/30 bg-linear-to-br from-[#262755]/90 to-[#ffd740]/30 p-8 transition-all duration-500 hover:scale-105 hover:border-[#ffd740] hover:shadow-2xl hover:shadow-[#ffd740]/50"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <feature.icon
                size={32}
                className="mb-4 text-[#ffd740] transition-transform duration-300 hover:rotate-12 hover:text-[#ffd740]"
              />
              <h3 className="mb-2 text-xl font-bold text-[#ffd740]">
                {feature.title}
              </h3>
              <p className="text-white">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in delay-600">
          <button
            className="rounded-full bg-[#262755] px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-110 hover:bg-[#ffd740] hover:text-[#262755] hover:shadow-lg hover:shadow-[#ffd740]/50"
            type="button"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Local animation styles */}
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
        .delay-200 { animation-delay: 0.2s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default CloudSection;
