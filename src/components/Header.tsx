"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PhoneIcon,
  Bars3Icon,
  XMarkIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const NAV_LINKS = [
  { label: "Trang chủ", href: "#" },
  { label: "Dịch vụ", href: "#dich-vu" },
  { label: "Bảng giá", href: "#bang-gia" },
  { label: "Quy trình", href: "#quy-trinh" },
  { label: "Về chúng tôi", href: "#ve-chung-toi" },
  { label: "Liên hệ", href: "#lien-he" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-white"
      }`}
    >
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/img/logo-footer.png"
              alt="LaptopWanry"
              width={200}
              height={48}
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-glass-link relative px-4 py-2 text-[15px] font-medium text-zinc-500 hover:text-zinc-900 tracking-[-0.01em] transition-colors rounded-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <a
              href="tel:0965476598"
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-amber-50 text-amber-600 active:scale-95 transition-transform"
              aria-label="Gọi ngay"
            >
              <PhoneIcon className="w-[18px] h-[18px]" strokeWidth={2} />
            </a>

            <a
              href="tel:0965476598"
              className="hidden lg:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-[15px] font-semibold px-5 py-2 rounded-full active:scale-95 transition-all"
            >
              <PhoneIcon className="w-4 h-4" strokeWidth={2.5} />
              Báo giá ngay
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full active:bg-zinc-100 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <XMarkIcon className="w-5 h-5 text-zinc-700" strokeWidth={2} />
              ) : (
                <Bars3Icon className="w-5 h-5 text-zinc-700" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 z-40 lg:hidden"
            style={{ top: "56px" }}
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <div
            className="fixed inset-x-0 z-50 lg:hidden bg-white border-t border-zinc-100 animate-in slide-in-from-top-2 duration-200"
            style={{ top: "56px", maxHeight: "calc(100dvh - 56px)", overflowY: "auto" }}
          >
            {/* Nav links */}
            <nav className="py-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center h-12 px-6 text-[16px] font-medium text-zinc-800 active:bg-zinc-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="border-t border-zinc-100" />

            {/* Contact info */}
            <div className="p-5 space-y-3">
              <a
                href="tel:0965476598"
                className="flex items-center justify-center gap-2 w-full h-12 bg-amber-500 hover:bg-amber-600 text-white text-[16px] font-semibold rounded-xl active:scale-[0.98] transition-all"
              >
                <PhoneIcon className="w-5 h-5" strokeWidth={2} />
                0965 476 598
              </a>

              <div className="flex items-center gap-2 text-[13px] text-zinc-400 px-1">
                <MapPinIcon className="w-4 h-4 shrink-0" />
                <span>115/16 Lê Trọng Tấn, P. Sơn Kỳ, Q. Tân Phú</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-zinc-400 px-1">
                <ClockIcon className="w-4 h-4 shrink-0" />
                <span>8:00 – 20:00, thứ 2 – CN</span>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
