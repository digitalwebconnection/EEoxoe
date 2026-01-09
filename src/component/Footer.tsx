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
import { Link } from "react-router-dom";
import logo from "../assets/image2.png";


interface FooterColProps {
  title: string;
  links: string[];
}

const Footer: React.FC = () => {
  return (
    <>  {/* FOOTER */}
      <footer className="relative w-full bg-[#262753] text-white py-2 md:py-2 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-36 bg-[#FDD53D] -skew-x-33 -translate-x-8 z-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* BRAND */}
          <div className=" text-lg ms-15 tracking-wide">
            <div className="grid   place-items-center rounded-xl font-black">
              <Link to="/" className="flex text-2xl  items-center gap-3">
                Exochos Technologies LLP
              </Link>
              <span>  Innovating Tomorrow, Today </span>
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
      <footer className="relative overflow-hidden bg-black text-white">
        {/* top border glow */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-[#ffd740] to-transparent opacity-60" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-4">

            {/* LEFT: BRAND + CONTACT */}
            <div className="md:col-span-1">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-13.75 w-auto" />
              </Link>

              {/* Contact details */}
              <div className="mt-6 space-y-3 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-[#ffd740]" />
                  <span>+91 99309 93212</span>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-[#ffd740]" />
                  <span>management@exochostech.com</span>
                </div>


              </div>
            </div>

            {/* RIGHT: LINKS */}
            <div className="md:col-span-3 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              <FooterCol title="Company" links={["About", "Careers", "Blog", "Press"]} />
              <FooterCol title="Products" links={["Services", "Solutions", "Pricing", "Integrations"]} />
              <FooterCol title="Resources" links={["Docs", "Guides", "Status", "Community"]} />
              <FooterCol title="Legal" links={["Privacy", "Terms", "Security", "SLA"]} />
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 pt-10">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-2 text-[#ffd740]" />
              <span>
                Casa Lakeside A Wing,
                Khoni Palava Phase-2, <br />
                Dombivli East, Thane-421204
              </span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-2 text-[#ffd740]" />
              <span>
                Elco Arcade, D Wing, F/45, First Floor, Near Almeida Park,<br /> Bandra West, Mumbai 400050
              </span>
            </div>
          </div>

          {/* bottom bar */}
          <div className="mt-10 border-t border-white/10 pt-6 text-center md:flex md:justify-between md:text-left">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Exochos Technologies LLP
              Innovating Tomorrow, Today . All rights reserved.
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
