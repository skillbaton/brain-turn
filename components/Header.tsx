"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "課題", href: "#problem" },
    { label: "ソリューション", href: "#solution" },
    { label: "価値", href: "#value" },
    { label: "助成金", href: "#grant" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.9" />
                <rect x="10" y="2" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.5" />
                <rect x="2" y="10" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.5" />
                <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" fillOpacity="0.9" />
              </svg>
            </div>
            <span className="text-[15px] font-semibold text-gray-900 tracking-tight">
              EduManage
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-800 transition-colors font-medium px-3 py-2"
            >
              ログイン
            </a>
            <button
              onClick={onOpenModal}
              className="bg-navy-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-navy-700 transition-colors"
            >
              資料を請求する
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="メニュー"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 7H18M4 11H18M4 15H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2.5 text-sm text-gray-600 hover:text-gray-900 font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-3 space-y-2">
              <a
                href="#"
                className="block px-2 py-2 text-sm text-gray-500 font-medium"
              >
                ログイン
              </a>
              <button
                onClick={() => { setMenuOpen(false); onOpenModal(); }}
                className="w-full bg-navy-900 text-white text-sm font-medium px-5 py-3 rounded-lg"
              >
                資料を請求する
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
