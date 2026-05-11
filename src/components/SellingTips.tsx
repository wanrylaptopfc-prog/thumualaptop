"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  SparklesIcon,
  BoltIcon,
  CloudArrowUpIcon,
  HeartIcon,
  UserMinusIcon,
  ClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const TIPS = [
  { icon: SparklesIcon, tip: "Vệ sinh máy sạch sẽ — máy sạch được đánh giá tâm lý cao hơn" },
  { icon: BoltIcon, tip: "Mang sạc zin chính hãng — tăng thêm 200.000 – 500.000đ" },
  { icon: CloudArrowUpIcon, tip: "Backup và xoá dữ liệu cá nhân trước khi mang máy" },
  { icon: HeartIcon, tip: "Kiểm tra pin: Settings → Battery Health, pin >80% = giá tốt" },
  { icon: UserMinusIcon, tip: "Gỡ tài khoản iCloud (MacBook) hoặc Microsoft trước khi bán" },
  { icon: ClockIcon, tip: "Bán sớm trước khi có thế hệ chip mới — tránh mất giá 15–25%/năm" },
];

export default function SellingTips() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => { if (window.innerWidth >= 640) setActive(0); };
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const goTo = useCallback((i: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: i * scrollRef.current.offsetWidth, behavior: "smooth" });
    setActive(i);
  }, []);

  const onScroll = useCallback(() => {
    if (!scrollRef.current) return;
    setActive(Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth));
  }, []);

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">
            Mẹo Bán Laptop Được Giá Cao
          </h2>
          <p className="text-base text-zinc-500 max-w-md mx-auto">
            Chuẩn bị đúng cách để nhận giá tốt nhất khi bán laptop cũ.
          </p>
        </div>

        {/* Mobile slide */}
        <div className="sm:hidden">
          <div ref={scrollRef} onScroll={onScroll} className="flex snap-x snap-mandatory overflow-x-auto" style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
            {TIPS.map((t, idx) => (
              <div key={idx} className="snap-center shrink-0 w-full px-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                  <t.icon className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-sm text-zinc-600 leading-relaxed">{t.tip}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 mt-5">
            <button onClick={() => goTo(Math.max(0, active - 1))} disabled={active === 0} className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center disabled:opacity-30 transition-all active:scale-90" aria-label="Previous">
              <ChevronLeftIcon className="w-4 h-4 text-zinc-600" strokeWidth={2.5} />
            </button>
            <div className="flex gap-1.5">
              {TIPS.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className={`h-1.5 rounded-full transition-all duration-200 ${i === active ? "w-6 bg-amber-500" : "w-1.5 bg-zinc-200"}`} aria-label={`Tip ${i + 1}`} />
              ))}
            </div>
            <button onClick={() => goTo(Math.min(TIPS.length - 1, active + 1))} disabled={active === TIPS.length - 1} className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center disabled:opacity-30 transition-all active:scale-90" aria-label="Next">
              <ChevronRightIcon className="w-4 h-4 text-zinc-600" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid max-w-3xl mx-auto sm:grid-cols-2 gap-3">
          {TIPS.map((t, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/50 border border-amber-100">
              <t.icon className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-sm text-zinc-600 leading-relaxed">{t.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
