"use client";

import Image from "next/image";

const ROW1 = [
  { img: "/img/0055984_macbook-air-m3-13-inch-8gb-ram-256gb-ssd.png", name: "MacBook Air M3" },
  { img: "/img/250_25740_msi_raider_a16_hx_b8wh___4.jpg", name: "MSI Raider" },
  { img: "/img/laptop-dell-pro-premium-14-nhieu-cong-ket-noi.png", name: "Dell Pro Premium" },
  { img: "/img/laptop-gaming-hp-victus-16-s1148ax-az0d3pa-03.webp", name: "HP Victus Gaming" },
  { img: "/img/Macbook_Air_M1.jpg", name: "MacBook Air M1" },
  { img: "/img/thinkpad-e14-gen-4-2022-3.jpg", name: "ThinkPad E14" },
  { img: "/img/h525.png", name: "HP Laptop" },
];

const ROW2 = [
  { img: "/img/10015-hxmj-uu-www.laptopvip.vn-1679108511.webp", name: "Asus ROG" },
  { img: "/img/macbook-air-size-unselect-202601-gallery-1_FMT_WHH.jpg", name: "MacBook Air 2026" },
  { img: "/img/thinkpad_e15_gen_4_intel_ct1_02_3de0b725ae0e4cdabda58c80d278e417_grande.png", name: "ThinkPad E15" },
  { img: "/img/lt221-9_68538da535e44fae99d1af0d26933278.png", name: "Lenovo IdeaPad" },
  { img: "/img/1772768245889443853.webp", name: "Samsung Galaxy Book" },
  { img: "/img/thiet-ke-mong-nhe-cua-macbook-air-m1.jpg", name: "MacBook Air" },
];

function MarqueeRow({ items, reverse }: { items: typeof ROW1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex gap-3 sm:gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((laptop, i) => (
          <div key={`${laptop.name}-${i}`} className="shrink-0 w-[140px] sm:w-[200px] lg:w-[220px]">
            <div className="aspect-[4/3] rounded-lg sm:rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center p-2.5 sm:p-3 overflow-hidden">
              <Image src={laptop.img} alt={laptop.name} width={220} height={165} className="w-full h-full object-contain" />
            </div>
            <p className="text-[11px] sm:text-xs font-medium text-zinc-400 text-center mt-1.5 truncate">{laptop.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LaptopSlider() {
  return (
    <section className="py-10 sm:py-14 bg-white overflow-hidden">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 text-center mb-2">
          Các Dòng Laptop Thu Mua
        </h2>
        <p className="text-sm sm:text-base text-zinc-500 text-center">
          Thu mua tất cả các hãng, mọi tình trạng máy.
        </p>
      </div>

      <div className="relative space-y-3 sm:space-y-4">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <MarqueeRow items={ROW1} />
        <MarqueeRow items={ROW2} reverse />
      </div>
    </section>
  );
}
