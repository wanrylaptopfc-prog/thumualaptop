import Image from "next/image";
import {
  PhoneIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  TruckIcon,
  CheckBadgeIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const BADGES = [
  { icon: BanknotesIcon, text: "Giá cao nhất" },
  { icon: ShieldCheckIcon, text: "Không ép giá" },
  { icon: TruckIcon, text: "Thu tận nơi" },
  { icon: BoltIcon, text: "Thanh toán nhanh" },
];

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-10 sm:py-14 lg:py-20">

          {/* ── Text ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 mb-5 sm:mb-6">
              <CheckBadgeIcon className="w-4 h-4 text-amber-500" />
              <span className="text-[13px] sm:text-[14px] font-semibold text-amber-600">
                Uy tín #1 tại TP.HCM
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[26px] sm:text-[42px] lg:text-[52px] font-semibold leading-[1.1] tracking-tight text-zinc-900 mb-3 sm:mb-4">
              Thu Mua Laptop Cũ
              <br />
              <span className="text-amber-500">Giá Cao TPHCM</span>
            </h1>

            {/* Sub */}
            <p className="text-sm sm:text-lg text-zinc-500 leading-relaxed max-w-md mx-auto lg:mx-0 mb-5 sm:mb-7">
              Chuyên thu mua tất cả các dòng laptop — thanh toán nhanh, không ép giá, hỗ trợ tận nơi tại TP.HCM.
            </p>

            {/* CTAs */}
            <div className="flex flex-row items-center gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
              <a
                href="tel:0965476598"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm sm:text-base font-semibold px-5 sm:px-7 py-2.5 sm:py-3 rounded-full active:scale-95 transition-all justify-center"
              >
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                Liên hệ ngay
              </a>
              <a
                href="#bang-gia"
                className="inline-flex items-center border border-amber-500 text-amber-600 hover:bg-amber-50 text-sm sm:text-base font-semibold px-5 sm:px-7 py-2.5 sm:py-3 rounded-full active:scale-95 transition-all justify-center"
              >
                Xem bảng giá
              </a>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-5 justify-items-start">
              {BADGES.map((badge) => (
                <div key={badge.text} className="flex items-center gap-1.5">
                  <badge.icon className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-[13px] sm:text-[14px] font-medium text-zinc-500 whitespace-nowrap">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Image ── */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
              <Image
                src="/img/THU-MUA-GIA-CAO-6.jpg"
                alt="LaptopWanry - Thu mua laptop cũ giá cao tại cửa hàng TP.HCM"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>

            {/* Floating card: bottom-left */}
            <div className="absolute -bottom-3 left-2 sm:left-4 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl px-4 py-3 border border-zinc-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-[13px] sm:text-sm font-semibold text-zinc-900 leading-tight">Thanh toán ngay</p>
                  <p className="text-[11px] sm:text-xs text-zinc-400">Tiền mặt · Chuyển khoản</p>
                </div>
              </div>
            </div>

            {/* Floating card: top-right */}
            <div className="absolute -top-2 right-2 sm:right-4 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl px-4 py-2.5 border border-zinc-100">
              <p className="text-2xl sm:text-[28px] font-bold text-amber-500 leading-none">5000+</p>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 font-medium">Laptop đã thu mua</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
