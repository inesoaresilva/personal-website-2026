"use client";
import { useEffect, useState } from "react";
import SparkleI from "./SparkleI";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "writing", href: "#writing" },
  { label: "stack", href: "#stack" },
  { label: "contact", href: "#contact" },
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
        <a href="#hero" className="font-jakarta">
          <span style={{ display: 'inline-flex', alignItems: 'baseline', color: '#F5EDD8', fontSize: '16px', fontWeight: 500, letterSpacing: '0.01em' }}>
            <SparkleI />nês<span className="hidden sm:inline"> soares</span> silva
          </span>
        </a>
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
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
