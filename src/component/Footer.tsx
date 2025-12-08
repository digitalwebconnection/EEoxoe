import React from "react";
import {

  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Github,
  Linkedin, type LucideIcon

} from "lucide-react";
import logo from "../assets/image2.png";


interface FooterColProps {
  title: string;
  links: string[];
}

const Footer: React.FC = () => {
  return (
    <>  {/* FOOTER */}
      <footer className="relative w-full bg-[#262753] text-white py-4 md:py-6 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-36 bg-[#FDD53D] -skew-x-33 -translate-x-8 z-10"></div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-0 
      flex flex-col md:flex-row items-center justify-between gap-6">

          {/* BRAND */}
          <div className="font-semibold text-lg ms-10 tracking-wide">
            <div className="grid w-60  place-items-center rounded-xl font-black">
              <img
                src={logo}
                alt="Logo"
                width={160}
                height={70}
              />
            </div>
          </div>

          {/* SOCIAL ICONS (YOUR BLOCK) */}
          <div className="flex items-center gap-8">
            <Social href="#" label="LinkedIn" Icon={Linkedin} />
            <Social href="#" label="Twitter" Icon={Twitter} />
            <Social href="#" label="GitHub" Icon={Github} />
            <Social href="#" label="Facebook" Icon={Facebook} />
          </div>

        </div>
      </footer>
      <footer className="relative overflow-hidden  bg-black text-white">
        {/* top border glow */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-[#ffd740] to-transparent opacity-60" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
  
          {/* link columns */}
          <div className=" grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <FooterCol title="Company" links={["About", "Careers", "Blog", "Press"]} />
            <FooterCol title="Products" links={["Services", "Solutions", "Pricing", "Integrations"]} />
            <FooterCol title="Resources" links={["Docs", "Guides", "Status", "Community"]} />
            <FooterCol title="Legal" links={["Privacy", "Terms", "Security", "SLA"]} />
          </div>
          {/* brand */}
          <div className=" mt-10 flex  justify-between">
            <div className="mt-2 flex items-center gap-3 text-sm text-white/70">
              <Phone className="h-4 w-4 text-[#ffd740]" /> +91 99309 93212
            </div>

            <div className="mt-2 flex items-center gap-3 text-sm text-white/70">
              <Mail className="h-4 w-4 text-[#ffd740]" />management@exochostech.com
            </div>
            <div className=" flex items-center gap-3 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-[#ffd740]" />
              Casa lakeside A wing, Flat-105, Khoni Palava Phase-2, Dombivli East, Kalyan Thane-421204
            </div>
          </div>

          {/* bottom bar */}
          <div className="mt-4 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} EEOXOE. All rights reserved.
            </p>

          </div>
        </div>
      </footer>
    </>
  );
};

const FooterCol: React.FC<FooterColProps> = ({ title, links }) => {
  return (
    <div>
      <h4 className="mb-4 font-semibold text-white">{title}</h4>

      <ul className="space-y-2 text-sm">
        {links.map((l: string) => (
          <li key={l}>
            <a href="#" className="text-white/70 transition-colors hover:text-white">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface SocialProps {
  href: string;
  label: string;
  Icon: LucideIcon;
}

const Social: React.FC<SocialProps> = ({ href, label, Icon }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="group inline-flex items-center justify-center rounded-lg p-2 ring-1 ring-white/10 transition hover:bg-white/10"
    >
      <Icon className="h-5 w-5 text-white transition group-hover:text-[#ffd740]" />
    </a>
  );
};

export default Footer;
