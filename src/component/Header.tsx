import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/image1.png";
import { products } from "../component/projectpage/data/products";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  // Smart navbar scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current <= 0 || isOpen) {
        setShowNavbar(true);
        lastScrollY.current = current;
        return;
      }

      if (current > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    `text-lg transition-colors ${isActive
      ? "text-[#262755] font-semibold"
      : "text-gray-900 hover:text-[#262755]"
    }`;

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-4 py-2 text-sm ${isActive
      ? "bg-gray-100 text-[#262755] font-semibold"
      : "hover:bg-gray-100"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b bg-white shadow-sm transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={desktopLink}>Home</NavLink>
            <NavLink to="/services" className={desktopLink}>Services</NavLink>
            <NavLink to="/case-Study" className={desktopLink}>Case Study</NavLink>

            {/* Desktop Product Dropdown */}
            <div className="relative group">
              <span className={desktopLink({ isActive: false })}>
                Products
              </span>

              <div
                className="
    absolute left-0 top-full mt-4 w-60
    rounded-2xl bg-white/90 backdrop-blur-2xl
    border border-white/60
    shadow-[0_25px_50px_-12px_rgba(38,39,85,0.35)]

    opacity-0 invisible
    translate-y-3 scale-[1.06]
 

    group-hover:opacity-100 group-hover:visible
    group-hover:translate-y-0 group-hover:scale-100
    group-hover:blur-0

    transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)]
    will-change-transform origin-top
  "
              >
                {/* Floating arrow */}
                <div className="absolute -top-2 left-6 h-4 w-4 rotate-45 bg-white/90  border-l border-t border-white/40" />

                <div className="py-3">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="
          group/item relative block px-6 py-4
          transition-all duration-300
          rounded-xl

          hover:bg-linear-to-r
          hover:from-indigo-50/70 hover:to-transparent
        "
                    >
                      {/* Accent rail */}
                      <span
                        className="
            absolute left-0 top-3 bottom-3 w-0.75
            bg-linear-to-b from-indigo-900 to-violet-500
            scale-y-0 group-hover/item:scale-y-100
            transition-transform duration-300 origin-top rounded-full
          "
                      />

                      <div className="relative z-10">
                        <div
                          className="
              text-sm font-semibold text-gray-900
              group-hover/item:text-indigo-600
              transition-colors duration-300
              tracking-tight
            "
                        >
                          {product.name}
                        </div>

                        <div
                          className="
              mt-0.5 text-xs text-gray-500
              group-hover/item:text-gray-600
              transition-colors duration-300
            "
                        >
                          {product.category}
                        </div>
                      </div>

                      {/* Hover glow */}
                      <div
                        className="
            absolute inset-0 rounded-xl
            opacity-0 group-hover/item:opacity-100
            bg-linear-to-r from-indigo-500/10 to-transparent
            transition-opacity duration-300
            pointer-events-none
          "
                      />
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            <NavLink to="/blog" className={desktopLink}>Blog</NavLink>

            <NavLink to="/contact-us">
              <div className="rounded-md bg-[#262755] px-4 py-1 text-white font-semibold hover:bg-[#ffd740] hover:text-[#262755] transition">
                Contact Us
              </div>
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden space-y-2 pb-4 animate-fade-in">
            <NavLink to="/" className={mobileLink} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/services" className={mobileLink} onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink to="/case-Study" className={mobileLink} onClick={() => setIsOpen(false)}>Case Studies</NavLink>

            {/* Mobile Product Dropdown */}
            <button
              onClick={() => setIsProductOpen(!isProductOpen)}
              className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
            >
              Products
              <ChevronDown
                className={`transition ${isProductOpen ? "rotate-180" : ""}`}
                size={16}
              />
            </button>

            {isProductOpen && (
              <div className="ml-4 space-y-1">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    onClick={() => {
                      setIsOpen(false);
                      setIsProductOpen(false);
                    }}
                    className="block rounded-md px-4 py-2 text-sm hover:bg-indigo-50"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            )}

            <NavLink to="/blog" className={mobileLink} onClick={() => setIsOpen(false)}>Blog</NavLink>
            <NavLink to="/contact-us" className={mobileLink} onClick={() => setIsOpen(false)}>Contact</NavLink>
          </nav>
        )}
      </div>

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
