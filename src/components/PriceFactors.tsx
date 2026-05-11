"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  DevicePhoneMobileIcon,
  CpuChipIcon,
  CalendarIcon,
  BoltIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const FACTORS = [
  {
    icon: DevicePhoneMobileIcon,
    title: "Ngoại hình máy",
    desc: "Phân loại 5 cấp: New Seal → Like New → 99% → 95% → Dưới 90%. Máy đẹp = giá cao hơn đáng kể.",
  },
  {
    icon: CpuChipIcon,
    title: "Cấu hình phần cứng",
    desc: "CPU (i5→i7→i9), GPU (GTX→RTX), RAM và SSD ảnh hưởng trực tiếp. Chênh lệch 30–50% giữa các tier.",
  },
  {
    icon: CalendarIcon,
    title: "Đời máy",
    desc: "Laptop 2022+ giữ giá tốt hơn nhiều. Chip Intel Gen 12–14, AMD Ryzen 6000–8000 được định giá cao.",
  },
  {
    icon: BoltIcon,
    title: "Tình trạng pin",
    desc: "Pin trên 80% sức khoẻ = giá tốt. Pin dưới 50% có thể bị giảm 500K – 2 triệu tuỳ dòng máy.",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Màn hình",
    desc: "Màn OLED, 2K, 4K hoặc tần số 144Hz+ được định giá cao hơn hẳn so với FHD thông thường.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Phụ kiện đi kèm",
    desc: "Sạc zin: +200–500K. Hộp gốc: +100–300K. Phụ kiện đầy đủ giúp tăng giá đáng kể.",
  },
];

export default function PriceFactors() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => {
      if (window.innerWidth >= 640) setActive(0);
    };
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    el.scrollTo({ left: index * el.offsetWidth, behavior: "smooth" });
    setActive(index);
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setActive(index);
  }, []);

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">
            Yếu Tố Ảnh Hưởng Giá Thu Mua
          </h2>
          <p className="text-base text-zinc-500 max-w-xl mx-auto">
            Hiểu rõ các yếu tố giúp bạn chuẩn bị máy tốt hơn và nhận giá cao hơn.
          </p>
        </div>

        {/* Mobile: Slide carousel */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {FACTORS.map((f) => (
              <div
                key={f.title}
                className="snap-center shrink-0 w-full px-2"
              >
                <div className="flex gap-4 p-5 rounded-2xl border border-zinc-200">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-amber-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 mb-1">{f.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows + dots */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={() => scrollToSlide(Math.max(0, active - 1))}
              disabled={active === 0}
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center disabled:opacity-30 transition-all active:scale-90"
              aria-label="Previous"
            >
              <ChevronLeftIcon className="w-4 h-4 text-zinc-600" strokeWidth={2.5} />
            </button>
            <div className="flex gap-1.5">
              {FACTORS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === active ? "w-6 bg-amber-500" : "w-1.5 bg-zinc-200"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => scrollToSlide(Math.min(FACTORS.length - 1, active + 1))}
              disabled={active === FACTORS.length - 1}
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center disabled:opacity-30 transition-all active:scale-90"
              aria-label="Next"
            >
              <ChevronRightIcon className="w-4 h-4 text-zinc-600" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FACTORS.map((f) => (
            <div key={f.title} className="flex gap-4 p-5 rounded-2xl border border-zinc-200 hover:border-amber-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-amber-500" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm sm:text-[15px] font-semibold text-zinc-900 mb-1">{f.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
