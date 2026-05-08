"use client";
import { useEffect, useRef, useState } from "react";
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
  const [menuLock, setMenuLock] = useState(false);
  const scrollYRef = useRef<number>(0);
  const pendingHashRef = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // iOS Safari can "jump" when toggling overflow; lock scroll by fixing body.
    if (menuLock) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [menuLock]);

  const open = () => {
    setMenuLock(true);
    setMenuOpen(true);
  };

  const close = () => setMenuOpen(false);

  const onNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      pendingHashRef.current = href;
    }
    close();
  };

  const scrollToHash = (hash: string) => {
    if (!hash.startsWith("#")) return;

    const el = document.querySelector(hash);
    if (!el) return;

    // Keep URL in sync without relying on native anchor jump while locked.
    window.history.pushState(null, "", hash);

    // Wait a tick so body unlock + layout settle before scrolling.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

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
            onClick={open}
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
      <AnimatePresence
        onExitComplete={() => {
          setMenuLock(false);
          const hash = pendingHashRef.current;
          pendingHashRef.current = null;
          if (hash) scrollToHash(hash);
        }}
      >
        {menuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            exit={{ y: -20 }}
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

            {/* Links (fade only the content, keep backdrop solid) */}
            <motion.nav
              aria-label="Mobile navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut", delay: 0.03 }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => onNavLinkClick(e, href)}
                  className="font-jakarta text-cream/80 hover:text-cream transition-colors"
                  style={{ fontSize: "2rem", textDecoration: "none" }}
                >
                  {label}
                </a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
