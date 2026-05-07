"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-navy/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <a href="#hero" className="font-jakarta">
            <span style={{ color: "#F5EDD8", fontSize: "16px", fontWeight: 500, letterSpacing: "0.01em" }}>
              <SparkleI />nês<span className="hidden md:inline"> soares</span> silva
            </span>
          </a>

          {/* Desktop nav */}
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

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center gap-[6px] p-1"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-label="Open navigation menu"
          >
            <span style={{ display: "block", width: "24px", height: "2px", background: "#F5EDD8", borderRadius: "1px" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "#F5EDD8", borderRadius: "1px" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "#F5EDD8", borderRadius: "1px" }} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
            style={{ backgroundColor: "#0D1B2A" }}
          >
            {/* Close button — mirrors hamburger position */}
            <button
              onClick={close}
              aria-label="Close navigation menu"
              className="absolute top-5 right-6 font-jakarta text-cream/80 hover:text-cream transition-colors"
              style={{ fontSize: "28px", lineHeight: 1, background: "none", border: "none", cursor: "pointer" }}
            >
              ×
            </button>

            {/* Links */}
            <nav aria-label="Mobile navigation" className="flex flex-col items-center gap-8">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={close}
                  className="font-jakarta text-cream/80 hover:text-cream transition-colors"
                  style={{ fontSize: "2rem", textDecoration: "none" }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
