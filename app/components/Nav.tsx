"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a
          href="#hero"
          className="font-jakarta text-lg font-semibold text-cream tracking-tight"
        >
          Inês Silva
        </a>
        <nav aria-label="Primary navigation" className="flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-jakarta text-xs font-medium tracking-[0.15em] text-cream/60 transition-colors hover:text-cream"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
