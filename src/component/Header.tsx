import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/image1.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  // Smart navbar: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const current = window.scrollY;

      // Always show when near top
      if (current <= 0) {
        setShowNavbar(true);
        lastScrollY.current = 0;
        return;
      }

      // If mobile menu is open, keep navbar visible
      if (isOpen) {
        setShowNavbar(true);
        lastScrollY.current = current;
        return;
      }

      const diff = current - lastScrollY.current;

      if (diff > 5) {
        // scrolling down
        setShowNavbar(false);
      } else if (diff < -5) {
        // scrolling up
        setShowNavbar(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const linkBaseClasses = "text-lg transition-colors";
  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    `${linkBaseClasses} ${
      isActive
        ? "text-[#262755] font-semibold"
        : "text-gray-900 hover:text-[#262755]"
    }`;

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-4 py-2 text-sm ${
      isActive
        ? "bg-gray-100 text-[#262755] font-semibold"
        : "hover:bg-gray-100"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[#262755]/20 bg-white/90 backdrop-blur shadow-sm transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-[30px] w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/services" className={desktopLink}>
              Services
            </NavLink>
            <NavLink to="/solutions" className={desktopLink}>
              Solutions
            </NavLink>
            <NavLink to="/projects" className={desktopLink}>
              Project
            </NavLink>
            <NavLink to="/blog" className={desktopLink}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={desktopLink}>
              Contact
            </NavLink>

            {/* Desktop Button */}
            <div className="ml-4 flex items-center gap-3">
              <Link
                to="/contact"
                className="rounded-md bg-[#262755] px-4 py-2 text-sm text-white shadow-md transition-all hover:bg-[#ffd740] hover:text-[#262755]"
              >
                Get Started
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="space-y-2 pb-4 md:hidden animate-fade-in">
            <NavLink
              to="/services"
              className={mobileLink}
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/solutions"
              className={mobileLink}
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </NavLink>
            <NavLink
              to="/blog"
              className={mobileLink}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={mobileLink}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <div className="flex gap-2 pt-2">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-md bg-[#262755] px-4 py-2 text-sm text-white transition hover:bg-[#ffd740] hover:text-[#262755]"
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>

      {/* Simple fade-in animation for mobile menu */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}
