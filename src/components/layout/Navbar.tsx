"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const navSections = [
  { key: "home", href: "/" },
  { key: "about", href: "/#about" },
  { key: "experience", href: "/#experience" },
  { key: "projects", href: "/#projects" },
  { key: "skills", href: "/#skills" },
  { key: "contact", href: "/#contact" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold font-mono text-accent hover:text-accent-hover transition-colors"
          >
            &lt;CA /&gt;
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navSections.map((section) => (
              <Link
                key={section.key}
                href={section.href as "/"}
                className="text-sm text-text-secondary hover:text-accent transition-colors"
              >
                {t(section.key as any)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-text-primary p-2"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border-glass">
          <div className="px-4 py-3 space-y-2">
            {navSections.map((section) => (
              <Link
                key={section.key}
                href={section.href as "/"}
                className="block py-2 text-sm text-text-secondary hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t(section.key as any)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
