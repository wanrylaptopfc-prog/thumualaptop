import Image from "next/image";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

const NAV = [
  { label: "Bảng giá", href: "#bang-gia" },
  { label: "Quy trình", href: "#quy-trinh" },
  { label: "Dịch vụ", href: "#dich-vu" },
  { label: "FAQ", href: "#faq" },
  { label: "Liên hệ", href: "#lien-he" },
];

const SERVICES = [
  "Thu mua laptop văn phòng",
  "Thu mua MacBook",
  "Thu mua laptop Gaming",
  "Thu mua laptop hư · thanh lý",
  "Thu mua Workstation",
  "Thu cũ đổi mới",
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8">

        {/* Top: Logo + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-8 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <Image src="/img/logo-footer.png" alt="LaptopWanry" width={180} height={44} className="h-9 w-auto" />
            <span className="hidden sm:block w-px h-6 bg-zinc-200" />
            <span className="hidden sm:block text-base text-zinc-500 font-medium">Thu mua laptop cũ giá cao #1 TP.HCM</span>
          </div>
          <div className="flex gap-2">
            <a href="tel:0965476598" className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors">
              <PhoneIcon className="w-3.5 h-3.5" />
              0965 476 598
            </a>
            <a href="https://zalo.me/0965476598" target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 text-xs font-medium px-4 py-2 rounded-full transition-colors">
              Nhắn Zalo
            </a>
          </div>
        </div>

        {/* Middle: Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 py-8">

          {/* Dịch vụ */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Dịch vụ</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s} className="text-[15px] text-zinc-500">{s}</li>
              ))}
            </ul>
          </div>

          {/* Điều hướng */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Trang</h4>
            <ul className="space-y-2">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[15px] text-zinc-500 hover:text-amber-500 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Liên hệ</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-[15px] text-zinc-500">115/16 Lê Trọng Tấn, P. Sơn Kỳ, Q. Tân Phú, TP.HCM</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-[15px] text-zinc-500">0965 476 598</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-[15px] text-zinc-500">8:30 – 20:30 · T2 – CN</span>
              </div>
            </div>
          </div>

          {/* Cam kết */}
          <div className="col-span-1 lg:col-span-4">
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4">Cam kết</h4>
            <div className="space-y-2">
              {["Giá cao nhất thị trường", "Thanh toán tiền mặt ngay", "Miễn phí kiểm tra định giá", "Thu mua tận nơi miễn phí", "Phục vụ 7/7 kể cả lễ Tết"].map((c) => (
                <div key={c} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  <span className="text-[15px] text-zinc-500">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-100 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-zinc-400">© 2024 LaptopWanry.com — Tất cả quyền được bảo lưu.</p>
          <p className="text-sm text-zinc-400">Thiết kế bởi LaptopWanry</p>
        </div>
      </div>
    </footer>
  );
}
