"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  TruckIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  ArrowPathIcon,
  TicketIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const POLICIES = [
  {
    icon: TruckIcon,
    title: "Thu mua tận nơi",
    desc: "Hỗ trợ thu mua laptop tại nhà, văn phòng trong TP.HCM. Không cần mang máy đến cửa hàng.",
    img: "/img/THU-MUA-GIA-CAO-7.jpg",
  },
  {
    icon: ShieldCheckIcon,
    title: "Không ép giá",
    desc: "Định giá minh bạch trước mặt khách hàng, mua đúng giá trị thực tế của máy.",
    img: "/img/THU-MUA-GIA-CAO-3.jpg",
  },
  {
    icon: LockClosedIcon,
    title: "Bảo mật dữ liệu",
    desc: "Hỗ trợ xoá dữ liệu miễn phí trước khi thu mua, bảo mật tuyệt đối.",
    img: "/img/THU-MUA-GIA-CAO-2.jpg",
  },
  {
    icon: ArrowPathIcon,
    title: "Thu cũ đổi mới",
    desc: "Thu laptop cũ giá cao để lên đời máy mới ngay tại cửa hàng.",
    img: "/img/THU-MUA-GIA-CAO.jpg",
  },
  {
    icon: TicketIcon,
    title: "Tặng voucher 500K",
    desc: "Phiếu mua hàng 500.000đ áp dụng cho lần mua laptop tiếp theo.",
    img: "/img/THU-MUA-GIA-CAO-6.jpg",
  },
];

export default function Policies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const check = () => { if (window.innerWidth >= 640) setActive(0); };
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const goTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    // On mobile (< 640), use full-width slide; on desktop, use card-based scroll
    if (window.innerWidth < 640) {
      el.scrollTo({ left: index * el.offsetWidth, behavior: "smooth" });
    } else {
      const card = el.firstElementChild as HTMLElement;
      if (card) el.scrollTo({ left: index * (card.offsetWidth + 16), behavior: "smooth" });
    }
    setActive(index);
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    if (window.innerWidth < 640) {
      setActive(Math.round(el.scrollLeft / el.offsetWidth));
    } else {
      const card = el.firstElementChild as HTMLElement;
      if (card) setActive(Math.round(el.scrollLeft / (card.offsetWidth + 16)));
    }
  }, []);

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-2">
              Chính Sách Hỗ Trợ
            </h2>
            <p className="text-sm sm:text-base text-zinc-500">
              Luôn đặt lợi ích khách hàng lên hàng đầu.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => goTo(Math.max(0, active - 1))}
              disabled={active === 0}
              className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 disabled:opacity-30 transition-all"
            >
              <ChevronLeftIcon className="w-4 h-4 text-zinc-600" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => goTo(Math.min(POLICIES.length - 1, active + 1))}
              disabled={active === POLICIES.length - 1}
              className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 disabled:opacity-30 transition-all"
            >
              <ChevronRightIcon className="w-4 h-4 text-zinc-600" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Mobile: Full-width slide carousel */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {POLICIES.map((p) => (
              <div key={p.title} className="snap-center shrink-0 w-full px-1">
                <div className="rounded-2xl overflow-hidden border border-zinc-200">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.title}
                      width={360}
                      height={270}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <p.icon className="w-5 h-5 text-amber-500 shrink-0" strokeWidth={1.5} />
                      <h3 className="text-base font-semibold text-zinc-900">{p.title}</h3>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile navigation */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={() => goTo(Math.max(0, active - 1))}
              disabled={active === 0}
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center disabled:opacity-30 transition-all active:scale-90"
              aria-label="Previous"
            >
              <ChevronLeftIcon className="w-4 h-4 text-zinc-600" strokeWidth={2.5} />
            </button>
            <div className="flex gap-1.5">
              {POLICIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === active ? "w-6 bg-amber-500" : "w-1.5 bg-zinc-200"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(Math.min(POLICIES.length - 1, active + 1))}
              disabled={active === POLICIES.length - 1}
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center disabled:opacity-30 transition-all active:scale-90"
              aria-label="Next"
            >
              <ChevronRightIcon className="w-4 h-4 text-zinc-600" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Desktop: Horizontal slider with cards */}
        <div className="hidden sm:block">
          <div
            ref={typeof window !== "undefined" && window.innerWidth >= 640 ? scrollRef : undefined}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2"
            style={{ scrollbarWidth: "none" }}
            onScroll={(e) => {
              const el = e.currentTarget;
              const card = el.firstElementChild as HTMLElement;
              if (card) setActive(Math.round(el.scrollLeft / (card.offsetWidth + 16)));
            }}
          >
            {POLICIES.map((p) => (
              <div
                key={p.title}
                className="shrink-0 w-[320px] lg:w-[360px] snap-start rounded-2xl overflow-hidden border border-zinc-200 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={360}
                    height={270}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <p.icon className="w-5 h-5 text-amber-500 shrink-0" strokeWidth={1.5} />
                    <h3 className="text-sm sm:text-base font-semibold text-zinc-900">{p.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop dots */}
          <div className="flex justify-center gap-1.5 mt-5">
            {POLICIES.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === active ? "w-6 bg-amber-500" : "w-1.5 bg-zinc-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
