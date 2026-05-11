import {
  ComputerDesktopIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import MobileSlider from "./MobileSlider";

const SERVICES = [
  {
    icon: ComputerDesktopIcon,
    title: "Laptop Văn Phòng",
    color: "bg-blue-50 text-blue-500",
    brands: [
      "Dell XPS · Latitude · Precision · Inspiron",
      "Lenovo ThinkPad · Yoga · IdeaPad · LOQ",
      "HP EliteBook · Spectre · Envy · Pavilion",
      "Asus Zenbook · Vivobook · ExpertBook",
      "Acer Swift · Aspire · TravelMate",
      "Microsoft Surface Pro · Laptop",
    ],
  },
  {
    icon: CpuChipIcon,
    title: "Laptop Gaming",
    color: "bg-red-50 text-red-500",
    brands: [
      "MSI Titan · Stealth · Raider · Pulse",
      "Asus ROG Zephyrus · TUF · ROG Strix",
      "Dell Alienware · G5 · G7",
      "Acer Nitro · Predator · Helios",
      "Lenovo Legion 5 · Legion 7",
      "HP Victus · Omen · Razer Blade",
    ],
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "MacBook Apple",
    color: "bg-zinc-100 text-zinc-500",
    brands: [
      "MacBook Air M1 · M2 · M3",
      "MacBook Pro 14\" & 16\" M1/M2/M3 Pro/Max",
      "MacBook Pro Intel (2015–2020)",
      "MacBook Retina · MacBook 12 inch",
    ],
  },
  {
    icon: PaintBrushIcon,
    title: "Đồ Họa · Workstation",
    color: "bg-purple-50 text-purple-500",
    brands: [
      "Dell Precision 3000 · 5000 · 7000",
      "HP ZBook Firefly · Power · Studio · Fury",
      "Lenovo ThinkPad P-series · P1 · P16",
      "MSI Creator · Prestige",
    ],
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Laptop Hư · Thanh Lý",
    color: "bg-amber-50 text-amber-500",
    brands: [
      "Hỏng màn hình · mainboard · bàn phím · pin",
      "Cấn móp, rơi vỡ, vô nước",
      "Xác laptop không sửa được",
      "Thanh lý doanh nghiệp, trường học",
    ],
  },
  {
    icon: GlobeAltIcon,
    title: "Thương Hiệu Khác",
    color: "bg-emerald-50 text-emerald-500",
    brands: [
      "Samsung Galaxy Book Pro · Ultra",
      "LG Gram (siêu nhẹ) · Gigabyte Aorus",
      "Toshiba / Dynabook · Intel NUC",
      "Laptop xách tay Mỹ, Nhật, Hàn",
    ],
  },
];

function Card({ svc }: { svc: (typeof SERVICES)[number] }) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl ${svc.color} flex items-center justify-center`}>
          <svc.icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
        <h3 className="text-base font-semibold text-zinc-900">{svc.title}</h3>
      </div>
      <div className="space-y-0">
        {svc.brands.map((b, i) => (
          <div key={i} className={`flex items-center gap-2.5 py-2 ${i !== svc.brands.length - 1 ? "border-b border-zinc-50" : ""}`}>
            <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
            <span className="text-sm text-zinc-500">{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Categories() {
  return (
    <section id="dich-vu" className="py-10 sm:py-14 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">
            Các Loại Laptop Chúng Tôi Thu Mua
          </h2>
          <p className="text-base text-zinc-500 max-w-2xl mx-auto">
            Thu mua hầu hết các dòng laptop phổ biến — từ cao cấp, gaming, văn phòng đến laptop hư hỏng, thanh lý.
          </p>
        </div>

        <MobileSlider>
          {SERVICES.map((svc) => <Card key={svc.title} svc={svc} />)}
        </MobileSlider>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((svc) => (
            <div key={svc.title} className="rounded-2xl border border-zinc-200 hover:border-amber-200 transition-colors p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${svc.color} flex items-center justify-center`}>
                  <svc.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900">{svc.title}</h3>
              </div>
              <div className="space-y-0">
                {svc.brands.map((b, i) => (
                  <div key={i} className={`flex items-center gap-2.5 py-2 ${i !== svc.brands.length - 1 ? "border-b border-zinc-50" : ""}`}>
                    <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                    <span className="text-sm text-zinc-500">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
