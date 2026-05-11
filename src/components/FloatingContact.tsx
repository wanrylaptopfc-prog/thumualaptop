"use client";

import { useState, useEffect } from "react";

const PHONE = "0965476598";
const ZALO_URL = `https://zalo.me/${PHONE}`;
const MESSENGER_URL = "https://m.me/thumualaptopcuhcm";
const CALL_URL = `tel:${PHONE}`;
const MAPS_URL = "https://maps.app.goo.gl/FcsdYx621mdj1dh2A";

/* ── SVG Icons (inline to avoid extra deps) ── */

function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#0068FF" />
      <path
        d="M32.5 14H15.5C14.12 14 13 15.12 13 16.5V31.14C13 32.52 14.12 33.64 15.5 33.64H19.68L23.72 37.18C23.86 37.3 24.04 37.36 24.22 37.36C24.4 37.36 24.58 37.3 24.72 37.18L28.76 33.64H32.5C33.88 33.64 35 32.52 35 31.14V16.5C35 15.12 33.88 14 32.5 14Z"
        fill="white"
      />
      <text x="17" y="28.5" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="11" fill="#0068FF">
        Z
      </text>
    </svg>
  );
}

function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="msgGrad" x1="24" y1="2" x2="24" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00B2FF" />
          <stop offset="100%" stopColor="#006AFF" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="24" fill="url(#msgGrad)" />
      <path
        d="M24 11C16.82 11 11 16.26 11 22.78C11 26.48 12.94 29.72 16.04 31.8V36.5L20.5 34.02C21.6 34.32 22.78 34.5 24 34.5C31.18 34.5 37 29.3 37 22.78C37 16.26 31.18 11 24 11Z"
        fill="white"
      />
      <path
        d="M15.5 27L20.3 22L25 27L30 22"
        stroke="url(#msgGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function PhoneBubbleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#22C55E" />
      <path
        d="M30.64 27.82C30.12 27.3 29.48 27.3 28.96 27.82L27.44 29.34C27.3 29.48 27.14 29.54 26.96 29.52C26.4 29.46 25.3 29.02 24.1 27.82C22.9 26.62 22.46 25.52 22.4 24.96C22.38 24.78 22.44 24.62 22.58 24.48L24.1 22.96C24.62 22.44 24.62 21.8 24.1 21.28L21.28 18.46C20.76 17.94 20.12 17.94 19.6 18.46L18.36 19.7C17.88 20.18 17.62 20.78 17.6 21.44C17.54 23.16 18.26 25.08 19.9 27.02C21.84 29.34 24.28 30.78 26.28 31.24C27.08 31.42 27.76 31.28 28.3 30.74L29.56 29.5L30.64 28.42C31.16 27.9 31.16 27.34 30.64 27.82Z"
        fill="white"
        transform="translate(-1, -1) scale(1.08)"
      />
      <path
        d="M19.14 18.5C19.14 18.5 18.2 19.44 18.08 19.58C17.66 20 17.48 20.52 17.5 21.12C17.56 22.72 18.22 24.5 19.76 26.34C21.6 28.54 23.92 29.88 25.82 30.32C26.52 30.48 27.1 30.36 27.54 29.92L28.7 28.76L30.14 27.32C30.36 27.1 30.36 26.84 30.14 26.62L27.32 23.8C27.1 23.58 26.84 23.58 26.62 23.8L25.1 25.32C24.86 25.56 24.54 25.66 24.2 25.62C23.42 25.52 22.16 24.96 20.96 23.76C19.76 22.56 19.2 21.3 19.1 20.52C19.06 20.18 19.16 19.86 19.4 19.62L20.92 18.1C21.14 17.88 21.14 17.62 20.92 17.4L18.1 14.58C17.88 14.36 17.62 14.36 17.4 14.58L16.24 15.74C15.52 16.46 15.2 17.38 15.24 18.44C15.32 20.66 16.2 23.1 18.22 25.52C20.62 28.38 23.62 30.08 26.02 30.62C27.02 30.84 27.86 30.66 28.52 30L29.68 28.84"
        fill="white"
      />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 11.5C21 16.75 16.75 21 11.5 21C10.12 21 8.82 20.7 7.62 20.16L3 21L3.84 16.38C3.3 15.18 3 13.88 3 12.5C3 7.25 7.25 3 12.5 3C17.75 3 21 7.25 21 11.5Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="12" r="1" fill="white" />
      <circle cx="12.5" cy="12" r="1" fill="white" />
      <circle cx="16.5" cy="12" r="1" fill="white" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function MapsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#EA4335" />
      <path
        d="M24 13C20.13 13 17 16.13 17 20C17 25.25 24 33 24 33C24 33 31 25.25 31 20C31 16.13 27.87 13 24 13ZM24 22.5C22.62 22.5 21.5 21.38 21.5 20C21.5 18.62 22.62 17.5 24 17.5C25.38 17.5 26.5 18.62 26.5 20C26.5 21.38 25.38 22.5 24 22.5Z"
        fill="white"
      />
    </svg>
  );
}

/* ── Contact Items ── */
const CONTACT_ITEMS = [
  {
    label: "Gọi ngay",
    sublabel: "0965 476 598",
    href: CALL_URL,
    icon: PhoneBubbleIcon,
    bg: "bg-green-500",
    hoverBg: "hover:bg-green-600",
    shadow: "shadow-green-500/30",
  },
  {
    label: "Chat Zalo",
    sublabel: "Phản hồi nhanh",
    href: ZALO_URL,
    icon: ZaloIcon,
    bg: "bg-[#0068FF]",
    hoverBg: "hover:bg-[#0055DD]",
    shadow: "shadow-blue-500/30",
  },
  {
    label: "Messenger",
    sublabel: "Facebook Chat",
    href: MESSENGER_URL,
    icon: MessengerIcon,
    bg: "bg-gradient-to-b from-[#00B2FF] to-[#006AFF]",
    hoverBg: "hover:brightness-110",
    shadow: "shadow-blue-400/30",
  },
  {
    label: "Chỉ đường",
    sublabel: "Google Maps",
    href: MAPS_URL,
    icon: MapsIcon,
    bg: "bg-[#EA4335]",
    hoverBg: "hover:bg-[#D33426]",
    shadow: "shadow-red-500/30",
  },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show the floating button after a short delay to avoid CLS
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#floating-contact-widget")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  if (!visible) return null;

  return (
    <div
      id="floating-contact-widget"
      className="fixed bottom-6 right-5 md:bottom-16 md:right-6 lg:bottom-20 lg:right-8 z-[9999] flex flex-col items-end gap-3"
      style={{ pointerEvents: "auto" }}
    >
      {/* ── Expanded Menu ── */}
      <div
        className={`flex flex-col gap-2.5 transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-3 scale-95 pointer-events-none"
        }`}
      >
        {/* Header card */}
        <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-zinc-100 overflow-hidden min-w-[260px]">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3.5">
            <p className="text-white font-bold text-[15px] flex items-center gap-1.5">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.102 41.102 0 01-3.55.414c-.28.02-.521.18-.643.413l-1.712 3.293a.75.75 0 01-1.33 0l-1.713-3.293a.783.783 0 00-.642-.413 41.108 41.108 0 01-3.55-.414C1.993 13.245 1 11.986 1 10.574V5.426c0-1.413.993-2.67 2.43-2.902z" clipRule="evenodd" />
              </svg>
              Liên hệ LaptopWanry
            </p>
            <p className="text-amber-100 text-xs mt-0.5">Phản hồi nhanh trong 5 phút</p>
          </div>

          <div className="p-3 space-y-1.5">
            {CONTACT_ITEMS.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-zinc-50 transition-all group"
                style={{
                  animationDelay: `${i * 60}ms`,
                  animation: open ? `float-item-in 0.3s ease-out ${i * 60}ms both` : "none",
                }}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <item.icon className="w-10 h-10" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-zinc-800 group-hover:text-zinc-900">{item.label}</p>
                  <p className="text-xs text-zinc-400">{item.sublabel}</p>
                </div>
                <svg className="w-4 h-4 text-zinc-300 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main FAB Button ── */}
      <button
        onClick={() => setOpen(!open)}
        className={`group relative w-14 h-14 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center ${
          open
            ? "bg-zinc-800 hover:bg-zinc-700 shadow-zinc-800/30 rotate-0"
            : "bg-amber-500 hover:bg-amber-600 shadow-amber-500/40 hover:shadow-amber-500/50"
        }`}
        aria-label={open ? "Đóng menu liên hệ" : "Mở menu liên hệ"}
      >
        {/* Pulse rings (only when closed) */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-amber-500 animate-[fab-ping_2s_ease-out_infinite]" />
            <span className="absolute inset-0 rounded-full bg-amber-500 animate-[fab-ping_2s_ease-out_0.6s_infinite]" />
          </>
        )}

        {/* Icon */}
        <div className="relative z-10 w-6 h-6 transition-transform duration-300">
          {open ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <ChatIcon className="w-6 h-6" />
          )}
        </div>
      </button>
    </div>
  );
}
