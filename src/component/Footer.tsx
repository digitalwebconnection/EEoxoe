import React from "react";
import {
  Facebook,
  Twitter,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
    type LucideIcon,
} from "lucide-react";
import logo from "../assets/image1.png";


interface FooterColProps {
  title: string;
  links: string[];
}

interface SocialProps {
  href: string;
  label: string;
  Icon: LucideIcon;
}

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden  bg-black text-white">
      {/* top border glow */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-[#ffd740] to-transparent opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* top row */}
        <div className="grid gap-10 md:grid-cols-5 md:gap-8">
          {/* brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="grid w-70 -ms-12 place-items-center rounded-xl font-black">
                <img
                  src={logo}
                  alt="Logo"
                  width={190}
                  height={80}
                />
              </div>
            </div>

    

            <div className="mt-5 flex items-center gap-3 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-[#ffd740]" />
              Remote-first • Global clients
            </div>

            <div className="mt-2 flex items-center gap-3 text-sm text-white/70">
              <Phone className="h-4 w-4 text-[#ffd740]" /> +91 74474 01177
            </div>

            <div className="mt-2 flex items-center gap-3 text-sm text-white/70">
              <Mail className="h-4 w-4 text-[#ffd740]" /> info@saasoft.dev
            </div>
          </div>

          {/* newsletter */}
          <div className="md:col-span-3">
            <p className="mb-3 text-sm font-semibold text-white/80">
              Subscribe for product updates
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-2xl items-center gap-3 rounded-2xl bg-white/5 p-1 ring-1 ring-white/15 backdrop-blur"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-3 py-1 text-sm text-white placeholder:text-white/50 outline-none"
              />

              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#ffd740] px-4 py-2 text-sm font-semibold text-[#262755] hover:bg-[#ffd740]/90"
              >
                Join newsletter
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            <p className="mt-2 text-xs text-white/60">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* link columns */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <FooterCol title="Company" links={["About", "Careers", "Blog", "Press"]} />
          <FooterCol title="Products" links={["Services", "Solutions", "Pricing", "Integrations"]} />
          <FooterCol title="Resources" links={["Docs", "Guides", "Status", "Community"]} />
          <FooterCol title="Legal" links={["Privacy", "Terms", "Security", "SLA"]} />
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} EEOXOE. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <Social href="#" label="LinkedIn" Icon={Linkedin} />
            <Social href="#" label="Twitter" Icon={Twitter} />
            <Social href="#" label="GitHub" Icon={Github} />
            <Social href="#" label="Facebook" Icon={Facebook} />
          </div>
        </div>
      </div>
    </footer>
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
