"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  onOpenModal: () => void;
}

const navLinks = [
  { label: "課題",           href: "#problem"  },
  { label: "ソリューション",  href: "#solution" },
  { label: "導入の流れ",     href: "#onboarding" },
  { label: "助成金",         href: "#grant"    },
  { label: "FAQ",           href: "#faq"      },
];

export default function Header({ onOpenModal }: HeaderProps) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="ct">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2"  y="2"  width="6" height="6" rx="1.5" fill="white" fillOpacity=".9"/>
                <rect x="10" y="2"  width="6" height="6" rx="1.5" fill="white" fillOpacity=".45"/>
                <rect x="2"  y="10" width="6" height="6" rx="1.5" fill="white" fillOpacity=".45"/>
                <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" fillOpacity=".9"/>
              </svg>
            </div>
            <span className="text-[15px] font-bold tracking-tight text-gray-900">
              SKILL TUNE
            </span>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* ── Desktop Actions ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-[13px] font-medium text-gray-500 hover:text-gray-800 transition-colors px-3 py-2"
            >
              ログイン
            </a>
            <button
              onClick={onOpenModal}
              className="btn-primary !py-2.5 !px-5 !text-[13px]"
            >
              資料を請求する
            </button>
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="メニュー"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 7h14M4 11h14M4 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 space-y-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-gray-600 hover:text-gray-900 font-medium"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 space-y-2">
            <a href="#" className="block py-2 text-sm text-gray-500">ログイン</a>
            <button
              onClick={() => { setMenuOpen(false); onOpenModal(); }}
              className="w-full btn-primary !justify-center"
            >
              資料を請求する
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
