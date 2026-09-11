import { useState } from "react";
import logo from "../assets/logo-text.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(event, href) {
  event.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleNavClick = (event, link) => {
    scrollToSection(event, link.href);
    setActiveLink(link.label);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Mobile: hamburger */}
        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Brand */}
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, { label: "Home", href: "#home" })}
          className="flex items-center md:flex-none"
        >
          <img src={logo} alt="Dev Stack" className="h-7 w-auto sm:h-8" />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleNavClick(event, link)}
              className={`text-sm font-medium transition-colors ${
                activeLink === link.label
                  ? "text-pink-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="text-xs font-medium text-slate-600 hover:text-slate-900 sm:text-sm"
          >
            Sign In
          </button>
          <button
            type="button"
            className="bg-gradient-brand rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 sm:px-5 sm:py-2 sm:text-sm"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    activeLink === link.label
                      ? "bg-pink-50 text-pink-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
