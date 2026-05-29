"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/85 backdrop-blur-lg border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl text-text-primary tracking-tight hover:text-accent transition-colors duration-200"
          >
            César Alameda
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navSections.map((section) => (
              <Link
                key={section.key}
                href={section.href as "/"}
                className="text-sm text-text-secondary hover-link transition-colors"
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
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-lg border-b border-border-subtle">
          <div className="px-5 py-4 space-y-3">
            {navSections.map((section) => (
              <Link
                key={section.key}
                href={section.href as "/"}
                className="block py-2 text-base text-text-secondary hover:text-accent transition-colors"
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
