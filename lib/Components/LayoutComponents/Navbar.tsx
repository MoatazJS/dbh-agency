"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const navLinks = [
  { name: "About", href: "/about" },
  { name: "Vision", href: "/vision" },
  { name: "Method", href: "/method" },
  { name: "Work", href: "/work" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 md:px-6 rounded-full transition-all duration-300",
          isScrolled
            ? "glass shadow-2xl bg-black/40 backdrop-blur-md border-white/10"
            : ""
        )}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="relative group z-50">
            <span className="text-3xl font-black tracking-tighter text-white font-artistic">
              DBH<span className="text-primary">.</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-linear-to-r from-primary to-secondary transition-all group-hover:w-full duration-300" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-all duration-300 hover:text-primary hover:tracking-wider hover:drop-shadow-[0_0_5px_var(--primary)]"
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="primary"
              size="sm"
              onClick={() => (window.location.href = "/contact-us")}
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-0 left-0 right-0 min-h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-white transition-all duration-300 hover:text-primary hover:tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Button
            className="w-40"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.location.href = "/contact-us";
            }}
          >
            Get Started
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}
