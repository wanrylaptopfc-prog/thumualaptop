"use client";

import { useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";

const TABS = ["Theo hãng", "Theo đời", "Gaming"] as const;

const PRICE_BY_BRAND = [
  { name: "Laptop Apple (Macbook)", price: "5 – 110 triệu" },
  { name: "Laptop Dell", price: "5 – 90 triệu" },
  { name: "Laptop Gaming", price: "5 – 90 triệu" },
  { name: "Laptop HP", price: "5 – 50 triệu" },
  { name: "Laptop Surface", price: "5 – 50 triệu" },
  { name: "Laptop Lenovo Thinkpad", price: "5 – 40 triệu" },
  { name: "Laptop Asus", price: "5 – 40 triệu" },
  { name: "Laptop Samsung", price: "5 – 30 triệu" },
  { name: "Laptop Acer", price: "5 – 20 triệu" },
];

const PRICE_BY_GEN = [
  { name: "Laptop i3, i5, i7 đời 11-12, Có VGA", price: "6 – 15 triệu" },
  { name: "Laptop i3, i5, i7 đời 9-10, Có VGA", price: "5 – 11.5 triệu" },
  { name: "Laptop i3, i5, i7 đời 7-8, Có VGA", price: "4 – 7.5 triệu" },
  { name: "Laptop i3, i5, i7 đời 5-6, Có VGA", price: "3.5 – 6.9 triệu" },
  { name: "Laptop i3, i5, i7 đời 3-4, Có VGA", price: "3 – 6 triệu" },
  { name: "Laptop Macbook", price: "Tuỳ dòng máy" },
];

const PRICE_GAMING = [
  { name: "Laptop VGA RTX3080", price: "31 – 45 triệu" },
  { name: "Laptop VGA RTX3070", price: "22 – 30 triệu" },
  { name: "Laptop VGA RTX3060", price: "20 – 25 triệu" },
  { name: "Laptop VGA RTX3050", price: "15 – 21 triệu" },
  { name: "Laptop VGA GTX1660Ti", price: "15 – 19 triệu" },
  { name: "Laptop VGA GTX1650Ti", price: "13 – 17 triệu" },
  { name: "Laptop VGA GTX1650", price: "12 – 16 triệu" },
  { name: "Laptop VGA GTX1060", price: "12 – 14.5 triệu" },
  { name: "Laptop VGA GTX1050Ti", price: "9 – 12.5 triệu" },
  { name: "Laptop VGA GTX1050", price: "8 – 11.5 triệu" },
];

const DATA_MAP = {
  "Theo hãng": PRICE_BY_BRAND,
  "Theo đời": PRICE_BY_GEN,
  Gaming: PRICE_GAMING,
};

export default function PriceTable() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Theo hãng");
  const rows = DATA_MAP[tab];

  return (
    <section id="bang-gia" className="py-10 sm:py-14 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">
            Bảng Giá Thu Mua Laptop
          </h2>
          <p className="text-base text-zinc-500 max-w-lg mx-auto">
            Giá tham khảo, liên hệ hotline để nhận báo giá chính xác theo tình trạng máy.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 border border-zinc-200">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  tab === t
                    ? "bg-amber-500 text-white"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-zinc-200 overflow-hidden">
          <div className="grid grid-cols-2 px-5 py-3 bg-zinc-50 border-b border-zinc-200">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Dịch vụ</span>
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide text-right">Định giá dự kiến</span>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.name}
              className={`grid grid-cols-2 px-5 py-3.5 items-center ${
                i !== rows.length - 1 ? "border-b border-zinc-100" : ""
              }`}
            >
              <span className="text-sm sm:text-[15px] font-medium text-zinc-700">{row.name}</span>
              <span className="text-sm sm:text-[15px] font-semibold text-amber-600 text-right">{row.price}</span>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-6 space-y-4">
          <p className="text-sm text-zinc-400">
            Giá có thể thay đổi tuỳ tình trạng thực tế. Liên hệ để nhận báo giá chính xác.
          </p>
          <a
            href="tel:0965476598"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full active:scale-95 transition-all"
          >
            <PhoneIcon className="w-4 h-4" />
            Gọi báo giá: 0965 476 598
          </a>
        </div>
      </div>
    </section>
  );
}
